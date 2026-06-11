import { getSessionValue, setSessionValue } from "./sessionStorage";

export interface ModalTriggerState {
  modalHasBeenShown: boolean;
  screenTimeSeconds: number;
  clicks: number;
  clickTarget?: number;
}

export interface ModalTriggerConfig {
  storageKey: string;
  minClicks?: number;
  maxClicks?: number;
  timeThresholdSeconds?: number;
  preConditions?: () => boolean;
  onTrigger: () => void;
}

interface ModalTriggerInstance {
  cleanup: () => void;
}

declare global {
  interface Window {
    __modalTriggerInstances?: Record<string, ModalTriggerInstance>;
  }
}

export const initModalTrigger = (config: ModalTriggerConfig) => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return {
      cleanup: () => { },
    };
  }

  const minClicks = Math.min(config.minClicks ?? 30, config.maxClicks ?? 45);
  const maxClicks = Math.max(config.minClicks ?? 30, config.maxClicks ?? 45);
  const timeThresholdSeconds = config.timeThresholdSeconds ?? 600;
  const preConditions = config.preConditions ?? (() => true);
  const modalTriggerInstances = (window.__modalTriggerInstances ??= {});

  modalTriggerInstances[config.storageKey]?.cleanup();
  delete modalTriggerInstances[config.storageKey];

  const getRandomClickTarget = () =>
    Math.floor(Math.random() * (maxClicks - minClicks + 1)) + minClicks;

  const state = getSessionValue<ModalTriggerState>(config.storageKey, {
    modalHasBeenShown: false,
    screenTimeSeconds: 0,
    clicks: 0,
    clickTarget: getRandomClickTarget(),
  });

  const saveState = () => {
    setSessionValue(config.storageKey, state);
  };

  if (
    !state.clickTarget ||
    state.clickTarget < minClicks ||
    state.clickTarget > maxClicks
  ) {
    state.clickTarget = getRandomClickTarget();
    saveState();
  }

  // Si ya se ha mostrado, no hacemos nada
  if (state.modalHasBeenShown) {
    return {
      cleanup: () => { },
    };
  }

  const triggerController = new AbortController();
  const triggerSignal = triggerController.signal;
  let intervalId: NodeJS.Timeout | null = null;
  let isCleanedUp = false;
  let instance: ModalTriggerInstance;

  const cleanup = () => {
    if (isCleanedUp) return;

    isCleanedUp = true;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    triggerController.abort();

    if (modalTriggerInstances[config.storageKey] === instance) {
      delete modalTriggerInstances[config.storageKey];
    }
  };

  instance = {
    cleanup,
  };
  modalTriggerInstances[config.storageKey] = instance;

  const considerOpening = () => {
    if (state.modalHasBeenShown) {
      cleanup();
      return;
    }

    const hasEnoughClicks = state.clickTarget !== undefined && state.clicks >= state.clickTarget;
    const hasEnoughTime = state.screenTimeSeconds > timeThresholdSeconds;
    const hasEnoughPreConditions = preConditions();

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

  return instance;
};
