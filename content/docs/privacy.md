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

Local Only is an inference restriction. You still need a network connection to download models or install updates.

## Remote message permissions

Remote connections request permission to share messages and conversation context. You can allow messages in all chats with a provider or ask in each chat.

Remembered permissions apply to the selected provider and server. Before sending, you can review the context that will be shared.

## File permissions

File sharing needs its own permission. Allowing messages does not automatically approve files.

When approved, relevant file content can be sent with the conversation context. The remote provider's data policy applies to the content you share.

## Reset permissions

Open Privacy settings to review and reset remembered permissions. Resetting clears those permissions and the permissions in existing chats. Local Only blocks remote connections regardless of remembered permissions.

## This website

This website loads its fonts and assets directly, with no analytics scripts. A theme choice is saved in your browser's local storage. There are no chat uploads or provider credentials on this website.

External links, including Flathub and GitHub, take you to services with their own policies. GitHub Pages handles hosting requests according to [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
