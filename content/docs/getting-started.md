+++
title = "Getting started"
description = "Install Moose, choose local Ollama or a cloud provider, and start your first conversation."
weight = 1
+++
## Install from Flathub

Moose is available as a Flatpak. If you have not used Flatpak before, follow the [setup guide for your Linux distribution](https://flatpak.org/setup/).

Install it from your software center through [Flathub](https://flathub.org/apps/io.github.moooossee.Moose), or use the terminal:

```sh
flatpak install flathub io.github.moooossee.Moose
```

Launch Moose from your desktop's app menu, or run:

```sh
flatpak run io.github.moooossee.Moose
```

## Start with a local model

1. Open Moose and follow the setup steps.
2. Use Moose-managed Ollama for a local setup. The Flatpak app can install and manage it for you.
3. Open the model manager, choose a model that fits your machine, and download it.
4. Select the model and send your first message.

Model downloads need an internet connection and enough disk space. Larger models generally need more memory. Start small if you are unsure what your machine can handle.

Moose reports failed and incomplete downloads. Open download history to review an error or retry a download. Managed Ollama stops when you close Moose and starts again when you need it.

## Connect a cloud or custom provider

Choose **Connect a Provider** during setup to use your own provider account. Select a built-in provider, enter your API key, and choose how Moose should request permission to share messages.

NVIDIA NIM uses your NVIDIA API key. Cloudflare Workers AI also needs your Cloudflare account ID and an API token with Workers AI permission.

For a compatible service that is not listed, choose **Custom Provider** and enter its API base URL, API format and authentication settings. You can discover models automatically or add exact model IDs yourself.

See [Models and providers](@/docs/models-and-providers.md) for the full provider list and setup details. Read [Privacy and sharing](@/docs/privacy.md) before sending private content to a remote service.

## Bring a file

Use the attachment button, drop a file into the chat, or paste a screenshot. You can attach images, PDFs, text, Markdown, and code.

Images need a model with vision support. PDFs need selectable text; scanned pages are not read automatically. See [Files and documents](@/docs/files-and-documents.md) for details.

## Pick up where you left off

Chats and drafts save on your computer. You can return to a conversation, edit a message, retry an answer, or export a chat.

Answers display Markdown, highlighted code and mathematical formulas while they arrive. You can select text or scroll up to read earlier content while generation continues. Reasoning appears separately when the model provides it.

If saving a completed response fails, Moose keeps it visible in the current chat so you can still read and copy it.

## Update Moose

Your software center can update the Flatpak, or you can run:

```sh
flatpak update io.github.moooossee.Moose
```

## Need help?

Search the [existing GitHub issues](https://github.com/moooossee/moose/issues). For a new issue, include your Moose version, Linux distribution, installation method, and the steps that reproduce the problem. Remove private content from screenshots and logs.
