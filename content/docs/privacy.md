+++
title = "Privacy and sharing"
description = "Choose what to share with chat and search services, and understand what stays on your device."
weight = 4
+++
## Local storage

Moose stores your conversations, drafts, document library, tool activity and retrieved web sources on your device. Keys for cloud providers and Brave Search use your desktop's secure key storage.

Storage location and inference destination are different things: a locally saved conversation can still send approved context to a remote provider when you choose that connection.

## Local Only mode

Enable **Local Only** in Privacy settings to use only Ollama managed by Moose for chat. Cloud connections, external Ollama and all web tools are blocked while this mode is enabled. Calculator can still run on your device with a compatible model.

Local Only does not turn off every network feature. Downloading models from Ollama or Hugging Face, checking for Ollama updates and downloading engine packages still use the network. Checking for engine updates contacts GitHub for official Ollama release information; it does not send your conversation context.

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

## Web permissions

Web has its own permission, separate from sharing messages or files with a chat provider. Turn it on for a conversation with a compatible Ollama or Ollama Cloud model. Before first use, Moose explains which search service will be used and asks whether to allow Web.

Search queries and page addresses can be based on your conversation, including attached content. The search service receives the queries, visited websites receive page requests, and the results go to the model answering your chat. Their own data policies apply. Using Web with a model running on your computer still makes those web requests.

Permission is saved for that chat. **Allow Web in All Chats** remembers permission for the selected search service, but Web must still be enabled in each chat. Changing the search service clears saved chat permissions; when using SearXNG, changing its address also changes the destination.

Manage these choices in **Preferences → Web**. **Web in Saved Chats → Reset** turns off Web and clears its permissions in every conversation. Local Only blocks Web regardless of any remembered permission.

Brave Search keys are saved in your desktop's secure key storage and excluded from exports. DuckDuckGo needs no search account or key. **Links Only** disables searches but can still request public pages you ask the model to read.

## Calculator results and saved sources

Calculator runs on your device without making web requests. Its results are shared with the selected chat model so it can finish the answer; with Ollama Cloud, that means the results go to the remote provider.

Tool activity, search snippets and text from pages that were read stay with saved conversations. They are also included when you export a chat or continue it in a new chat. Review those sources and results along with your messages before sharing an export.

## Reset permissions

Open **Preferences → Privacy** to review and reset message and file sharing permissions, including those in saved chats. Reset web permissions separately from **Preferences → Web → Web in Saved Chats → Reset**. Local Only blocks remote connections and web tools regardless of remembered permissions.

## Logs and diagnostics

Moose keeps recent application and managed Ollama logs on your device. Open **Preferences → Ollama & Diagnostics** to view **Moose Log** or **Ollama Log**. Use the copy button to include the recent entries, Moose version and log location in a problem report.

The log viewer filters common credential patterns and removes credentials, query strings and fragments from URLs. Logs and copied error details can still contain server addresses, model names, file paths and other information about your setup. Review them before sharing. Copying a log does not submit it to GitHub or send it to a provider.

## This website

This website loads its fonts and assets directly, with no analytics scripts. A theme choice is saved in your browser's local storage. There are no chat uploads or provider credentials on this website.

External links, including Flathub and GitHub, take you to services with their own policies. GitHub Pages handles hosting requests according to [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
