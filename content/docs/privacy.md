+++
title = "Privacy and sharing"
description = "Know what stays on your device and what a remote connection receives."
weight = 4
+++
## Local storage

Moose stores your conversations, drafts, and document library on your device. Cloud provider credentials use your desktop's secret storage.

Storage location and inference destination are different things: a locally saved conversation can still send approved context to a remote provider when you choose that connection.

## Local Only mode

Enable **Local Only** in Privacy settings to restrict inference to Ollama managed by Moose. Cloud and external Ollama connections are blocked while this mode is enabled.

Local Only is an inference restriction. Downloading models from Ollama or Hugging Face, checking for Ollama updates and downloading engine packages still use the network. Checking for engine updates contacts GitHub for official Ollama release information; it does not send your conversation context.

## Model download destinations

Hugging Face models run through the Ollama connection you select. The download dialog shows whether the model will be downloaded by managed Ollama on your device or by an external Ollama server. Model downloads contact the model source through that Ollama instance.

The model source and inference destination are separate choices. A model from Hugging Face can run locally with managed Ollama, while one downloaded to a remote Ollama server runs on that server. Remote chat sharing permissions still apply.

**Browse Hugging Face Models** and **Open on Hugging Face** open that service in your browser, where its own privacy policy applies.

## Remote message permissions

Remote connections request permission to share messages and conversation context. You can allow messages in all chats with a provider or ask in each chat.

Remembered permissions apply to the selected provider and server. Custom connections also distinguish the API format and authentication settings. A different Cloudflare account uses a different destination. Before sending, you can review the context that will be shared.

## File permissions

File sharing needs its own permission. Allowing messages does not automatically approve files.

When approved, relevant file content can be sent with the conversation context. The remote provider's data policy applies to the content you share.

## Reset permissions

Open Privacy settings to review and reset remembered permissions. Resetting clears those permissions and the permissions in existing chats. Local Only blocks remote connections regardless of remembered permissions.

## Logs and diagnostics

Moose keeps recent application and managed Ollama logs on your device. Open **Preferences → Ollama & Diagnostics** to view **Moose Log** or **Ollama Log**. Use the copy button to include the recent entries, Moose version and log location in a problem report.

The log viewer filters common credential patterns and removes credentials, query strings and fragments from URLs. Logs and copied error details can still contain server addresses, model names, file paths and other information about your setup. Review them before sharing. Copying a log does not submit it to GitHub or send it to a provider.

## This website

This website loads its fonts and assets directly, with no analytics scripts. A theme choice is saved in your browser's local storage. There are no chat uploads or provider credentials on this website.

External links, including Flathub and GitHub, take you to services with their own policies. GitHub Pages handles hosting requests according to [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
