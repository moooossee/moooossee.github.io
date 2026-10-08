(() => {
  try {
    const saved = localStorage.getItem('moose-theme');
    if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  } catch {}
})();
