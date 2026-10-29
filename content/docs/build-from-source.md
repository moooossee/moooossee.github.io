+++
title = "Build from source"
description = "Build the Linux app with Flatpak or native desktop dependencies."
weight = 6
+++
## Get the source

To build the 0.7.5 release:

```sh
git clone --branch v0.7.5 https://github.com/moooossee/moose.git
cd moose
```

Moose is written in Rust and uses GTK 4 and libadwaita for its interface. See the release's [Cargo.toml](https://github.com/moooossee/moose/blob/v0.7.5/Cargo.toml) and [Flatpak manifest](https://github.com/moooossee/moose/blob/v0.7.5/io.github.moooossee.Moose.yml) for its dependencies. For development work, clone the default branch instead or follow [Contributing](@/docs/contributing.md).

## Flatpak build

Install Flatpak Builder and add the Flathub remote first. From the project directory, run:

```sh
flatpak run org.flatpak.Builder --user --install --install-deps-from=flathub --force-clean builddir io.github.moooossee.Moose.yml
flatpak run io.github.moooossee.Moose
```

The Flatpak build provides the desktop dependencies used by the app. Once Moose is running, use its setup screen to install managed Ollama or connect an existing provider. Engine updates and repairs are available from **Preferences → Ollama & Diagnostics → Manage Ollama**; building Moose does not install an engine for you.

## Native build

You need Rust 1.92 or newer, Meson 1.4 or newer, GTK 4, libadwaita, GtkSourceView 5, SQLite with FTS5, and Poppler's `pdftotext` tool. Match the desktop library versions and features in `Cargo.toml`; the Flatpak build uses the GNOME 51 SDK.

```sh
meson setup builddir-native -Dgui=true
meson compile -C builddir-native
```

## Check Rust changes

The project's core checks run without enabling the GUI:

```sh
cargo fmt --check
cargo clippy --locked --all-targets -- -D warnings
cargo test --locked --all-targets
```

For interface changes, also build the Flatpak and try the affected flow in light and dark mode and in a narrow window.

See [Contributing](@/docs/contributing.md) for how to prepare a focused change.
