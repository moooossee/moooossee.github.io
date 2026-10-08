+++
title = "Moose 0.6.0"
description = "Cloud providers, separate sharing permissions and a Files view for attachments and library documents."
date = 2026-10-06
+++
Moose 0.6.0 adds optional cloud connections alongside its local Ollama setup. You can use Ollama Cloud, Groq, OpenAI, Anthropic Claude, or Google Gemini with your own credentials.

The new Privacy controls make that choice explicit. Local Only mode blocks remote inference. Remote connections request permission for messages, and sharing files needs separate permission. You can inspect the context before sending and reset remembered permissions later.

Files now has a home in the sidebar. Browse attachments and library documents, search and filter them, preview a file, or return to a conversation that uses it.

Read the [full release notes](@/changelog/0-6-0.md), or learn how [privacy and sharing](@/docs/privacy.md) work before setting up a provider.
