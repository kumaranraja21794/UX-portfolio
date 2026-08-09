const SESSION_KEY = 'sp-splash-seen';

/* Skip the curtain when the visitor has already seen it this session,
   when they've asked for reduced motion, or via ?nosplash (used by
   the screenshot tooling). */
export const shouldSkipSplash = () => {
  if (typeof window === 'undefined') return true;
  if (new URLSearchParams(window.location.search).has('nosplash')) return true;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return true;
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    return false;
  }
};

export const markSplashSeen = () => {
  try { window.sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* private mode */ }
};
