+++
title = "Models and providers"
description = "Set up Ollama, choose from nine built-in cloud providers, or connect a compatible API."
weight = 2
+++
## Moose-managed Ollama

The Flatpak app can install and manage Ollama for you. This is the local backend used by **Local Only** mode.

Browse models in Moose's model manager. You can download models, review download history, and retry interrupted downloads. You can keep chatting while a model downloads.

Failed or incomplete downloads show an error instead of being treated as finished. Managed Ollama shuts down when Moose closes. If another Moose instance is already using the same managed installation, close that instance before trying again.

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
- Mistral AI
- DeepSeek
- NVIDIA NIM
- Cloudflare Workers AI

Bring your own provider credentials. Moose stores API keys using your desktop's secret storage. Availability, model access, usage limits, and any charges depend on your provider account.

Moose requests permission before sharing conversation context with a remote provider. File sharing requires separate permission. Read [Privacy and sharing](@/docs/privacy.md) before sending private material.

### NVIDIA NIM

Choose **NVIDIA NIM** when connecting a provider and enter your NVIDIA API key. Moose discovers chat models and streams their answers. Reasoning and images are available on compatible models.

### Cloudflare Workers AI

Choose **Cloudflare Workers AI** and enter your **Cloudflare Account ID** from the Cloudflare dashboard. It must be a 32-character hexadecimal account ID. Enter an API token with Workers AI permission in the API key field.

Moose builds the account-specific server address for you, discovers supported chat models and checks their image capabilities. Reasoning is shown when the selected model provides it. If the connection is rejected, check the account ID, token and token permissions.

## Custom providers

Choose **Custom Provider** to connect a service that uses one of these API formats:

- OpenAI Chat Completions
- OpenAI Responses
- Anthropic Messages
- Google Gemini

Enter the service's API base URL, including its API version when needed, such as `https://example.com/v1`. Moose adds the endpoint for the selected format; do not append `/chat/completions` or another endpoint yourself. HTTPS is required for remote servers; HTTP is available only on this device.

Select the authentication method required by the service: a bearer token, an API key header, or no authentication. For a key header, enter the header name your service expects. Saved keys use your desktop's secret storage.

Leave **Discover Models Automatically** enabled if the service offers a model catalog. Otherwise, turn it off and use **Add Model** to save at least one exact model ID. Manual models remain available when discovery is unavailable. Enable **Images** only for a model that accepts image input.

Model IDs containing spaces work with compatible cloud providers and custom connections. Keep the exact ID supplied by the service. Ollama and Gemini still use their own model naming rules.

## Chat settings and profiles

Per-chat settings include a system prompt, preferred model, context limits, and supported Ollama generation options. Built-in profiles and reusable custom profiles stay on your device.

Reasoning controls depend on what the selected model supports, including supported Mistral AI and DeepSeek models. Moose can display model reasoning separately from the final answer; a provider returning reasoning does not necessarily offer a control to configure it.
