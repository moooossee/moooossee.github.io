+++
title = "Models and providers"
description = "Run locally with Ollama or connect a provider of your choice."
weight = 2
+++
## Moose-managed Ollama

The Flatpak app can install and manage Ollama for you. This is the local backend used by **Local Only** mode.

Browse models in Moose's model manager. You can download models, review download history, and retry interrupted downloads. You can keep chatting while a model downloads.

Choose a model for the task: general conversation, coding, reasoning, or vision. Available features depend on the selected model. A text-only model cannot interpret an image.

Managed Ollama supports GPU acceleration through Vulkan when available. You can enable or disable GPU acceleration in the managed hardware preferences and check the active backend in the provider status.

## An existing Ollama instance

You can connect Moose to an Ollama instance you already run. Open the provider preferences and configure its address.

External Ollama connections require HTTPS. HTTP is available only for connections on the same device. When you use a remote server, approved messages and relevant file content are sent to that server.

Local Only mode blocks external Ollama connections, including a separately configured instance on your computer. It restricts inference to Ollama managed by Moose.

## Cloud providers

Moose supports these optional connections:

- Ollama Cloud
- Groq
- OpenAI
- Anthropic Claude
- Google Gemini

Bring your own provider credentials. Moose stores API keys using your desktop's secret storage. Availability, model access, usage limits, and any charges depend on your provider account.

Moose requests permission before sharing conversation context with a remote provider. File sharing requires separate permission. Read [Privacy and sharing](@/docs/privacy.md) before sending private material.

## Chat settings and profiles

Per-chat settings include a system prompt, preferred model, context limits, and supported Ollama generation options. Built-in profiles and reusable custom profiles stay on your device.

Reasoning controls depend on what the selected model supports. Moose can display model reasoning separately from the final answer.
