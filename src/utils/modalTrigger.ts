import { getSessionValue, setSessionValue } from "./sessionStorage";

export interface ModalTriggerState {
  modalHasBeenShown: boolean;
  screenTimeSeconds: number;
  clicks: number;
}

export interface ModalTriggerConfig {
  storageKey: string;
  minClicks?: number;
  maxClicks?: number;
  timeThresholdSeconds?: number;
  preConditions?: () => boolean;
  onTrigger: () => void;
}

export const initModalTrigger = (config: ModalTriggerConfig) => {
  const minClicks = config.minClicks ?? 30;
  const maxClicks = config.maxClicks ?? 45;
  const timeThresholdSeconds = config.timeThresholdSeconds ?? 600;
  const preConditions = config.preConditions ?? (() => true);

  const state = getSessionValue<ModalTriggerState>(config.storageKey, {
    modalHasBeenShown: false,
    screenTimeSeconds: 0,
    clicks: 0,
  });

  const saveState = () => {
    setSessionValue(config.storageKey, state);
  };

  // Si ya se ha mostrado, no hacemos nada
  if (state.modalHasBeenShown) {
    return {
      cleanup: () => { },
    };
  }

  const triggerController = new AbortController();
  const triggerSignal = triggerController.signal;
  let intervalId: NodeJS.Timeout | null = null;

  const cleanup = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    triggerController.abort();
  };

  const considerOpening = () => {
    if (state.modalHasBeenShown) {
      cleanup();
      return;
    }

    const randomClickTarget =
      Math.floor(Math.random() * (maxClicks - minClicks + 1)) + minClicks;

    const hasEnoughClicks = state.clicks >= randomClickTarget;
    const hasEnoughTime = state.screenTimeSeconds > timeThresholdSeconds;
    const hasEnoughPreConditions = preConditions();

    console.log({ hasEnoughClicks, hasEnoughTime, hasEnoughPreConditions, randomClickTarget });

    if ((hasEnoughClicks || hasEnoughTime) && hasEnoughPreConditions) {
      state.modalHasBeenShown = true;
      saveState();
      config.onTrigger();
      cleanup();
    }
  };

  const handleGlobalClick = () => {
    state.clicks++;
    saveState();
    considerOpening();
  };

  document.body.addEventListener("click", handleGlobalClick, {
    signal: triggerSignal,
  });

  intervalId = setInterval(() => {
    state.screenTimeSeconds++;
    saveState();
    considerOpening();
  }, 1000);

  // Ejecutar una consideración inicial por si ya se cumplen las condiciones
  considerOpening();

  return {
    cleanup,
  };
}
