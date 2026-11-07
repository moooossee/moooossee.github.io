+++
title = "Getting started"
description = "Install Moose, find your first model, try Web and Calculator, and pick up a conversation where you left off."
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
3. Choose **Create Managed Instance**, then choose **Find a Model** or open **Models** with **Ctrl+M**. Browse Everyday, Coding, Images or Documents and download a model that suits your needs.
4. When the download finishes, choose **New Chat** in the notification, or choose **Use** beside an installed model and send your first message.

To add a local connection later, open the provider switcher and choose **Add Provider → Set Up for Me → Continue**. If Ollama is already installed, choose **Add Managed Connection**.

Model downloads need an internet connection and enough disk space. Open a model's details to compare versions and estimated memory and storage needs. When Moose manages Ollama, suggestions also consider your computer's available memory. The estimates are a guide; images and longer conversations can need more memory. Start small if you are unsure.

Managed Ollama stops when you close Moose and starts again when you need it.

## Download a model

With an Ollama connection selected, open **Models** and choose **Add Model…**. Enter an Ollama model name such as `llama3.2:1b`, paste an Ollama or Hugging Face repository link, or paste an `ollama run` or `ollama pull` command. Moose shows the source and download destination before you start.

For a Hugging Face model, choose a compatible GGUF repository. Expand **Variant** to enter a quantization such as `Q4_K_M` or an exact GGUF filename, or leave it on **Automatic**. You can also paste a model link into the model search field to open the download dialog.

Choose **Download** to begin. If that chat model is already installed, the button changes to **New Chat**. You can keep chatting while a download runs.

Progress messages show when a model is downloading, being checked or finishing up. When the active progress panel clears, you can still review saved jobs from **Models → More Options → Downloads**. For a failed download, use **Details** in the notification or open the failed job, then choose **Edit and Retry** to check the model reference and try again.

See [Models and providers](@/docs/models-and-providers.md#download-a-model) for supported inputs, Hugging Face variants and download troubleshooting.

## Connect a cloud or custom provider

During first-time setup, choose **Connect a Provider** to open the provider chooser, then select **Cloud Provider → Continue**. To add another connection later, use **Add Provider** in the provider switcher. Select a built-in provider, enter your API key, choose how Moose should request permission to share messages, then choose **Save and Connect**.

OpenRouter is available in the provider list and uses your own OpenRouter key. NVIDIA NIM uses your NVIDIA API key. Cloudflare Workers AI also needs your Cloudflare account ID and an API token with Workers AI permission.

For a compatible service that is not listed, choose **Custom Provider** and enter its API base URL, API format and authentication settings. You can discover models automatically or add exact model IDs yourself.

To use an Ollama server you already run, select **Connect Existing → Continue** in the same provider chooser, then enter its name and address.

See [Models and providers](@/docs/models-and-providers.md) for the full provider list and setup details. Read [Privacy and sharing](@/docs/privacy.md) before sending private content to a remote service.

## Try Web and Calculator

Select an Ollama or Ollama Cloud model that supports tools. Open **Chat Settings → Tools**, turn on **Web** or **Calculator**, then choose **Save Changes**. You can also type `/web` or `/calculator` at the start of the message box, select the command, and ask your question.

Web uses DuckDuckGo by default, without a search account. It asks for permission before first use and stays off in Local Only mode. Choose **Preferences → Web** to change the search service or manage remembered web permissions.

Calculator runs on your device and sends its results back to the selected model to help finish the answer. Tool activity and web sources appear with the response and stay with saved chats and exports. Turn a tool off from its button above the message box or with `/web off` or `/calculator off`.

Tools are currently available only with compatible Ollama and Ollama Cloud models. Connecting another service, including OpenRouter, does not enable Web or Calculator for that service. See [Web and Calculator](@/docs/models-and-providers.md#web-and-calculator) for details.

## Bring a file

Use the attachment button, drop a file into the chat, or paste a screenshot. You can attach images, PDFs, text, Markdown, and code.

Images need a model with vision support. PDFs need selectable text; scanned pages are not read automatically. See [Files and documents](@/docs/files-and-documents.md) for details.

## Pick up where you left off

Chats and drafts save on your computer. You can return to a conversation, edit a message, retry an answer, or export a chat.

If an answer reaches its length limit, Moose keeps the text and marks it as incomplete. Choose **Continue** to ask the model to pick up where it stopped. To extend another finished answer, open its message options and choose **Continue Response**.

Answers display Markdown, highlighted code and mathematical formulas while they arrive. You can select text or scroll up to read earlier content while generation continues. Reasoning appears separately when the model provides it.

Reasoning is off by default when the model supports turning it off. Moose remembers your choice for the conversation and model.

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

If Web or Calculator is unavailable, check that the selected Ollama or Ollama Cloud model supports tools. Local Only also blocks Web. If DuckDuckGo temporarily limits searches, try again later or choose another search service in **Preferences → Web**.

If a message or attachment leaves too little room for an answer, try a shorter question or fewer attachments. Ollama settings let you choose a larger context window, but that can use more memory. See [longer chats and incomplete answers](@/docs/models-and-providers.md#longer-chats-and-incomplete-answers).

Open **Preferences → Ollama & Diagnostics** and choose **Moose Log** or **Ollama Log** to view recent entries. The copy button includes the app version and log location. Model download and deletion errors also have **Copy Details** actions.

Search the [existing GitHub issues](https://github.com/moooossee/moose/issues). For a new issue, include your Moose version, Linux distribution, installation method, steps to reproduce the problem and relevant error details. Review screenshots and logs before sharing them; remove private content, file paths or server details you do not want to publish. See [Privacy and sharing](@/docs/privacy.md#logs-and-diagnostics) for what the logs contain.
