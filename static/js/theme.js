(() => {
  const root = document.documentElement;
  root.classList.add('js');
  let preference = 'system';
  try {
    const saved = localStorage.getItem('moose-theme');
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch {}
  root.dataset.themePreference = preference;
  if (preference !== 'system') root.dataset.theme = preference;
  document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
    if (preference !== 'system') {
      meta.removeAttribute('media');
      meta.content = preference === 'dark' ? '#222226' : '#fafafb';
    }
  });
})();
