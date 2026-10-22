+++
title = "Getting started"
description = "Install Moose, choose a connection, keep Ollama up to date and find help when you need it."
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

1. Open Moose, choose **Start Guide**, then **Create Ollama Instance**.
2. Choose **Install Ollama**. Once it is ready, give the managed connection a name and use the suggested port.
3. Choose **Create Managed Instance**, then open the model manager and download a model that fits your machine.
4. Select your model and send your first message.

To add a local connection later, open the provider switcher and choose **Add Provider → Set Up for Me → Continue**. If Ollama is already installed, choose **Add Managed Connection**.

Model downloads need an internet connection and enough disk space. Larger models generally need more memory. Start small if you are unsure what your machine can handle.

Moose reports failed and incomplete model downloads. Open download history to review an error or retry a download. You can select error text or use **Copy Details** in the download panel when it is available. Managed Ollama stops when you close Moose and starts again when you need it.

## Connect a cloud or custom provider

Open the provider switcher and choose **Add Provider → Cloud Provider → Continue**. Select a built-in provider, enter your API key, choose how Moose should request permission to share messages, then choose **Save and Connect**.

NVIDIA NIM uses your NVIDIA API key. Cloudflare Workers AI also needs your Cloudflare account ID and an API token with Workers AI permission.

For a compatible service that is not listed, choose **Custom Provider** and enter its API base URL, API format and authentication settings. You can discover models automatically or add exact model IDs yourself.

To use an Ollama server you already run, choose **Add Provider → Connect Existing → Continue**, then enter its name and address. The first-run guide's **Connect a Provider** button also opens this connection screen.

See [Models and providers](@/docs/models-and-providers.md) for the full provider list and setup details. Read [Privacy and sharing](@/docs/privacy.md) before sending private content to a remote service.

## Bring a file

Use the attachment button, drop a file into the chat, or paste a screenshot. You can attach images, PDFs, text, Markdown, and code.

Images need a model with vision support. PDFs need selectable text; scanned pages are not read automatically. See [Files and documents](@/docs/files-and-documents.md) for details.

## Pick up where you left off

Chats and drafts save on your computer. You can return to a conversation, edit a message, retry an answer, or export a chat.

Answers display Markdown, highlighted code and mathematical formulas while they arrive. You can select text or scroll up to read earlier content while generation continues. Reasoning appears separately when the model provides it.

Use the copy button above a table to copy it as Markdown. When selecting a long passage, drag toward the top or bottom edge of the chat to scroll and keep selecting.

If saving a completed response fails, Moose keeps it visible in the current chat so you can still read and copy it.

## Update Moose

Your software center can update the Flatpak, or you can run:

```sh
flatpak update io.github.moooossee.Moose
```

## Update or repair Ollama

The app and its managed Ollama engine have separate updates. Open **Preferences → Ollama & Diagnostics → Manage Ollama** to see the installed and available engine versions.

Choose **Check for Updates**, then **Update Ollama** when a newer version is available. **Repair Installation** reinstalls the installed version when its release details are available. Your models, chats and connections are kept.

An interrupted engine download can resume when you retry. You can cancel before installation begins; Moose keeps the partial download. If an update fails while installing or checking the new engine, Moose restores the previous installation.

If a model download needs a newer engine, choose **Update Ollama and Retry** in the error dialog. For an external Ollama server, update Ollama on that server instead. See [Models and providers](@/docs/models-and-providers.md#update-or-repair-managed-ollama) for more details.

## Need help?

Open **Preferences → Ollama & Diagnostics** and choose **Moose Log** or **Ollama Log** to view recent entries. The copy button includes the app version and log location. Model download and deletion errors also have **Copy Details** actions.

Search the [existing GitHub issues](https://github.com/moooossee/moose/issues). For a new issue, include your Moose version, Linux distribution, installation method, steps to reproduce the problem and relevant error details. Review screenshots and logs before sharing them; remove private content, file paths or server details you do not want to publish. See [Privacy and sharing](@/docs/privacy.md#logs-and-diagnostics) for what the logs contain.
