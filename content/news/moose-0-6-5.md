+++
title = "Moose 0.6.5"
description = "NVIDIA NIM and Cloudflare Workers AI are here, along with better text selection, live formatting and Ollama fixes."
date = 2026-10-20
+++
Moose 0.6.5 adds NVIDIA NIM and Cloudflare Workers AI. Bring your own API key to discover models and start chatting, with reasoning and images on supported models. For Cloudflare, enter your account ID and a token with Workers AI permission; Moose takes care of the server address.

If you are coming from 0.6.0, there are more connections to try. [Moose 0.6.1](@/changelog/0-6-1.md) added Mistral AI, DeepSeek and custom providers, including a choice of API format, authentication and manually saved models. Model IDs with spaces now work with compatible services too.

This update also makes the chat easier to read while an answer is coming in. Markdown, highlighted code and formulas render live, text selection is more reliable, and you can scroll up without being pulled back to the latest response. Completed answers stay visible in the current chat if saving fails, so you can still copy them.

Managed Ollama now stops when Moose closes, and conflicting instances get a clearer error. Model downloads also report provider errors and incomplete transfers.

Thanks to [@olumolu](https://github.com/olumolu) for contributing the new providers.

Read the [0.6.5 release notes](@/changelog/0-6-5.md), check the updated [provider setup](@/docs/models-and-providers.md), or [install Moose](@/docs/getting-started.md).
