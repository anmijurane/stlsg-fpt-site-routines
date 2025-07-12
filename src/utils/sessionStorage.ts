export function getSessionValue<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;

  try {
    const raw = sessionStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function setSessionValue<T>(key: string, value: T): void {
  if (typeof window === 'undefined' || !key) return;
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.log('Error to set sessionStorage');
  }
}
