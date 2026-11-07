+++
title = "Moose 0.8.0"
description = "Web search and calculations join your chats, OpenRouter joins the provider list, and finding a model gets easier."
date = 2026-11-07
+++
Moose 0.8.0 gives your chats a way to look things up and check calculations. With a compatible Ollama or Ollama Cloud model, turn on **Web** or **Calculator** in Chat Settings, or type `/web` or `/calculator` before your question. You can see the tool results and read the web sources beside the answer, and they stay with the conversation when you come back or export it.

Web uses DuckDuckGo by default, so you can start without a search account. Brave Search, SearXNG and reading public links without search are also available. Web asks for its own permission before first use and stays off in Local Only mode. You can manage the search service and remembered permissions in **Preferences → Web**.

Choosing a model should be easier too. The new **Models** view lets you browse for everyday questions, coding, pictures or documents, then filter by download size and features. Compare versions, check estimated memory and storage needs, and start a chat with a model you already have. When Moose manages Ollama, suggestions also consider the memory available on your computer.

You can now connect to **OpenRouter** with your own key. Moose finds available models, including picture and reasoning options where supported. The provider switcher and Chat Settings are easier to navigate, and conversation titles better match your topic and language.

We've also improved how longer chats with Ollama leave space for answers. If an answer reaches its limit, you keep the text and can choose **Continue** to pick up where it stopped. Reasoning preferences are remembered, and message spacing is more consistent.

Thanks to [@olumolu](https://github.com/olumolu) for helping bring OpenRouter to Moose.

Read the [0.8.0 release notes](@/changelog/0-8-0.md), learn how to [use Web and Calculator](@/docs/models-and-providers.md#web-and-calculator), or [get started with Moose](@/docs/getting-started.md).
