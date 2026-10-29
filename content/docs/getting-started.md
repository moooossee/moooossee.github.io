+++
title = "Getting started"
description = "Install Moose, choose a connection, download an Ollama or Hugging Face model and start chatting."
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
3. Choose **Create Managed Instance**, then open the model manager with **Ctrl+M** and download a model that fits your machine.
4. When the download finishes, choose **New Chat** in the notification, or select the model and send your first message.

To add a local connection later, open the provider switcher and choose **Add Provider → Set Up for Me → Continue**. If Ollama is already installed, choose **Add Managed Connection**.

Model downloads need an internet connection and enough disk space. Larger models generally need more memory. Start small if you are unsure what your machine can handle.

Managed Ollama stops when you close Moose and starts again when you need it.

## Download a model

With an Ollama connection selected, open the model manager and choose **Download Model…**. Enter an Ollama model name such as `llama3.2:1b`, paste an Ollama or Hugging Face repository link, or paste an `ollama run` or `ollama pull` command. Moose shows the source and download destination before you start.

For a Hugging Face model, choose a compatible GGUF repository. Expand **Variant** to enter a quantization such as `Q4_K_M` or an exact GGUF filename, or leave it on **Automatic**. You can also paste a model link into the model search field to open the download dialog.

Choose **Download** to begin. If that chat model is already installed, the button changes to **New Chat**. You can keep chatting while a download runs.

The progress panel clears when a download finishes, fails or is cancelled. Open **Download Jobs** to review its saved status. For a failed download, use **Details** in the notification or open the failed job, then choose **Edit and Retry** to check the model reference and try again.

See [Models and providers](@/docs/models-and-providers.md#download-a-model) for supported inputs, Hugging Face variants and download troubleshooting.

## Connect a cloud or custom provider

During first-time setup, choose **Connect a Provider** to open the provider chooser, then select **Cloud Provider → Continue**. To add another connection later, use **Add Provider** in the provider switcher. Select a built-in provider, enter your API key, choose how Moose should request permission to share messages, then choose **Save and Connect**.

NVIDIA NIM uses your NVIDIA API key. Cloudflare Workers AI also needs your Cloudflare account ID and an API token with Workers AI permission.

For a compatible service that is not listed, choose **Custom Provider** and enter its API base URL, API format and authentication settings. You can discover models automatically or add exact model IDs yourself.

To use an Ollama server you already run, select **Connect Existing → Continue** in the same provider chooser, then enter its name and address.

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
