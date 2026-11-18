(() => {
  const root = document.documentElement;
  const sidebar = document.getElementById('app-sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebarClose = document.querySelector('.sidebar-close');
  const sidebarBackdrop = document.querySelector('.sidebar-backdrop');
  const contentPane = document.querySelector('.content-pane');
  if (sidebar && sidebarToggle && sidebarClose && sidebarBackdrop && contentPane) {
    const compactLayout = window.matchMedia('(max-width: 860px)');
    const setSidebar = (open, restoreFocus = false) => {
      const expanded = compactLayout.matches && open;
      root.classList.toggle('sidebar-open', expanded);
      sidebar.inert = compactLayout.matches && !expanded;
      contentPane.inert = expanded;
      sidebarBackdrop.hidden = !expanded;
      sidebarToggle.hidden = !compactLayout.matches;
      sidebarClose.hidden = !compactLayout.matches;
      sidebarToggle.setAttribute('aria-expanded', String(expanded));
      if (expanded) (sidebar.querySelector('nav a[aria-current="page"]') ?? sidebar.querySelector('nav a'))?.focus({ preventScroll: true });
      else if (restoreFocus && compactLayout.matches) sidebarToggle.focus({ preventScroll: true });
    };
    sidebarToggle.addEventListener('click', () => setSidebar(true));
    sidebarClose.addEventListener('click', () => setSidebar(false, true));
    sidebarBackdrop.addEventListener('click', () => setSidebar(false, true));
    sidebar.addEventListener('click', event => {
      if (compactLayout.matches && event.target.closest('a[href]')) setSidebar(false);
    });
    document.addEventListener('keydown', event => {
      if (!root.classList.contains('sidebar-open')) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        setSidebar(false, true);
      }
      if (event.key === 'Tab') {
        const items = [...sidebar.querySelectorAll('a[href], button:not([hidden])')];
        const first = items[0];
        const last = items.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    });
    compactLayout.addEventListener('change', () => setSidebar(false));
    setSidebar(false);
  }

  const appearanceMenu = document.querySelector('.appearance-menu');
  const themeChoices = [...document.querySelectorAll('[data-theme-choice]')];
  const setTheme = preference => {
    root.dataset.themePreference = preference;
    if (preference === 'system') delete root.dataset.theme;
    else root.dataset.theme = preference;
    document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
      const scheme = preference === 'system' ? meta.dataset.scheme : preference;
      meta.content = scheme === 'dark' ? '#222226' : '#fafafb';
      if (preference === 'system') meta.media = `(prefers-color-scheme: ${scheme})`;
      else meta.removeAttribute('media');
    });
    themeChoices.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === preference)));
  };
  if (appearanceMenu) {
    setTheme(root.dataset.themePreference ?? 'system');
    appearanceMenu.hidden = false;
    const closeAppearance = () => {
      appearanceMenu.open = false;
      appearanceMenu.querySelector('summary').focus({ preventScroll: true });
    };
    themeChoices.forEach(button => {
      button.addEventListener('click', () => {
        const preference = button.dataset.themeChoice;
        setTheme(preference);
        try {
          if (preference === 'system') localStorage.removeItem('moose-theme');
          else localStorage.setItem('moose-theme', preference);
        } catch {}
        closeAppearance();
      });
    });
    document.addEventListener('click', event => {
      if (!appearanceMenu.contains(event.target)) appearanceMenu.open = false;
    });
    document.addEventListener('focusin', event => {
      if (!appearanceMenu.contains(event.target)) appearanceMenu.open = false;
    });
    appearanceMenu.addEventListener('keydown', event => {
      if (event.key === 'Escape' && appearanceMenu.open) {
        event.preventDefault();
        closeAppearance();
      }
    });
    appearanceMenu.addEventListener('click', event => {
      if (event.target.closest('a[href]')) appearanceMenu.open = false;
    });
    window.addEventListener('storage', event => {
      if (event.key !== 'moose-theme' && event.key !== null) return;
      setTheme(['light', 'dark'].includes(event.newValue) ? event.newValue : 'system');
    });
  }

  const toast = document.querySelector('.toast');
  let toastTimeout;
  const notify = message => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 3500);
  };
  const copyText = async text => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const activeElement = document.activeElement;
    const input = document.createElement('textarea');
    input.value = text;
    input.className = 'clipboard-fallback';
    input.setAttribute('readonly', '');
    document.body.append(input);
    try {
      input.select();
      if (!document.execCommand('copy')) throw new Error('Clipboard unavailable');
    } finally {
      input.remove();
      activeElement?.focus({ preventScroll: true });
    }
  };
  const copyTimeouts = new WeakMap();
  const showCopied = button => {
    const label = button.querySelector('.copy-label');
    if (label) label.textContent = 'Copied';
    button.dataset.copyLabel ??= button.getAttribute('aria-label') ?? 'Copy';
    button.setAttribute('aria-label', 'Copied to clipboard');
    button.classList.add('is-copied');
    clearTimeout(copyTimeouts.get(button));
    copyTimeouts.set(button, setTimeout(() => {
      if (label) label.textContent = 'Copy';
      button.setAttribute('aria-label', button.dataset.copyLabel);
      button.classList.remove('is-copied');
    }, 2500));
  };
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      try {
        await copyText(button.dataset.copy);
        showCopied(button);
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
    if (!screenshot || !screenshotLink || !caption) return;
    screenshot.src = tab.dataset.image;
    screenshot.alt = tab.dataset.alt;
    screenshotLink.href = tab.dataset.image;
    screenshotLink.setAttribute('aria-label', `Open full-size ${tab.dataset.label} screenshot`);
    caption.textContent = tab.dataset.caption;
    screenshotTabs.forEach(item => item.setAttribute('aria-pressed', String(item === tab)));
  };
  if (screenshot) document.querySelector('.preview-tabs')?.removeAttribute('hidden');
  screenshotTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectScreenshot(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? screenshotTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + screenshotTabs.length) % screenshotTabs.length;
      screenshotTabs[next].focus({ preventScroll: true });
      selectScreenshot(screenshotTabs[next]);
    });
  });

  document.querySelectorAll('.prose pre').forEach(pre => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-copy';
    const label = document.createElement('span');
    label.className = 'copy-label';
    label.textContent = 'Copy';
    button.append(label);
    button.setAttribute('aria-label', 'Copy code block');
    button.addEventListener('click', async () => {
      try {
        await copyText(pre.querySelector('code')?.textContent ?? '');
        showCopied(button);
        notify('Code copied to clipboard.');
      } catch {
        notify('Select the code and copy it manually.');
      }
    });
    pre.append(button);
  });
})();
