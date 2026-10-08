(() => {
  const themeButton = document.querySelector('.theme-toggle');
  const updateThemeLabel = () => {
    const dark = document.documentElement.dataset.theme !== 'light';
    themeButton?.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    const label = themeButton?.querySelector('.theme-label');
    if (label) label.textContent = dark ? 'light' : 'dark';
  };
  if (themeButton) {
    themeButton.hidden = false;
    updateThemeLabel();
    themeButton.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#20211f' : '#fafaf8');
      try { localStorage.setItem('moose-theme', next); } catch {}
      updateThemeLabel();
    });
  }

  const toast = document.querySelector('.toast');
  let toastTimeout;
  const notify = message => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 3000);
  };
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(button.dataset.copy);
        } else {
          const text = document.createElement('textarea');
          text.value = button.dataset.copy;
          text.className = 'clipboard-fallback';
          document.body.append(text);
          text.select();
          const copied = document.execCommand('copy');
          text.remove();
          button.focus();
          if (!copied) throw new Error('Clipboard unavailable');
        }
        notify('Command copied to clipboard.');
      } catch {
        notify('Select the command and copy it manually.');
      }
    });
  });

  const screenshot = document.getElementById('app-screenshot');
  const screenshotLink = document.querySelector('.screenshot-link');
  const caption = document.getElementById('preview-caption');
  const screenshotTabs = [...document.querySelectorAll('.preview-tab')];
  const selectScreenshot = tab => {
    if (!screenshot) return;
    screenshot.src = tab.dataset.image;
    screenshot.alt = tab.dataset.alt;
    screenshotLink.href = tab.dataset.image;
    screenshotLink.setAttribute('aria-label', `Open full-size ${tab.dataset.label} screenshot`);
    caption.textContent = tab.dataset.caption;
    screenshotTabs.forEach(item => item.setAttribute('aria-pressed', String(item === tab)));
  };
  screenshotTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectScreenshot(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? screenshotTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + screenshotTabs.length) % screenshotTabs.length;
      screenshotTabs[next].focus();
      selectScreenshot(screenshotTabs[next]);
    });
  });
  document.querySelectorAll('.prose pre').forEach(pre => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-copy';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code block');
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(pre.querySelector('code')?.textContent ?? '');
        notify('Code copied to clipboard.');
      } catch { notify('Select the code and copy it manually.'); }
    });
    pre.append(button);
  });
})();
