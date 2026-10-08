+++
title = "Build from source"
description = "Build the Linux app with Flatpak or native desktop dependencies."
weight = 6
+++
## Get the source

```sh
git clone https://github.com/moooossee/moose.git
cd moose
```

Moose is written in Rust and uses GTK 4 and libadwaita for its interface. See the repository's `Cargo.toml` and Flatpak manifest for the versions required by the current source.

## Flatpak build

Install Flatpak Builder and add the Flathub remote first. From the project directory, run:

```sh
flatpak run org.flatpak.Builder --user --install --install-deps-from=flathub --force-clean builddir io.github.moooossee.Moose.yml
flatpak run io.github.moooossee.Moose
```

The Flatpak build provides the desktop dependencies used by the app.

## Native build

You need Rust, Meson, GTK 4, libadwaita, GtkSourceView 5, SQLite with FTS5, and Poppler's `pdftotext` tool.

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
