+++
title = "Models and providers"
description = "Download Ollama and Hugging Face GGUF models, manage Ollama, or connect a cloud provider and compatible API."
weight = 2
+++
## Add a connection

Open the provider switcher and choose **Add Provider**, or choose **Connect a Provider** during first-time setup. Pick the setup you want, then choose **Continue**:

- **Set Up for Me** lets Moose install and manage Ollama on your device.
- **Connect Existing** connects to an Ollama server you already run.
- **Cloud Provider** opens the setup screen for built-in cloud services and custom providers.

Give each connection a name and switch between them from the provider switcher. Remote connections also have their own sharing permissions.

## Moose-managed Ollama

The Flatpak app can install and manage Ollama for you. This is the local backend used by **Local Only** mode.

Choose **Install Ollama** in the managed setup screen. After installation, give the connection a name and use the suggested managed port, then choose **Create Managed Instance**. If the engine is already installed, choose **Add Managed Connection**. Moose suggests a port starting at 11435 and skips ports assigned to its other managed connections; port 11434 is reserved for external Ollama.

Browse models in Moose's model manager. You can download models from Ollama and compatible GGUF repositories on Hugging Face, review download history, and retry failed or interrupted downloads. You can keep chatting while a model downloads.

Managed Ollama shuts down when Moose closes. If another Moose instance is already using the same managed installation, close that instance before trying again.

Choose a model for the task: general conversation, coding, reasoning, or vision. Available features depend on the selected model. A text-only model cannot interpret an image.

Managed Ollama supports GPU acceleration through Vulkan when available. You can enable or disable GPU acceleration in the managed hardware preferences and check the active backend in the provider status.

## Download a model

Select an Ollama connection, open the model manager with **Ctrl+M**, and choose **Download Model…**. The **Model Name or Link** field accepts:

- An Ollama model name, such as `llama3.2:1b`.
- An Ollama model link, such as `https://ollama.com/library/llama3.2:1b`.
- An `ollama run` or `ollama pull` command, such as `ollama pull llama3.2:1b`, without extra command arguments.
- A Hugging Face repository link or a reference in the form `hf.co/owner/model-GGUF`, using the actual repository owner and name.

The dialog previews the model reference, its source and the download destination. With a managed connection, the download goes to Ollama on your device. With an external Ollama connection, it goes to that server. Cloud services manage their own models.

You can also paste a model link, a tagged model name or an Ollama command into model search. If it is not already installed and there are no matching catalog entries, choose the download result to open the dialog with the reference filled in.

### Hugging Face GGUF models

Paste the link to the repository itself, using `huggingface.co` or `hf.co`. Use the repository root rather than a branch page or an individual file link.

Moose shows a **Variant** option for Hugging Face models. Leave it on **Automatic**, or expand it and enter a quantization such as `Q4_K_M` or an exact GGUF filename in **Quantization or Filename**. This field overrides a variant already included after `:` in the model reference.

The selected Ollama instance downloads and runs the model. Choose a GGUF supported by that Ollama version, with a size that fits the memory available on the device or server. Images and reasoning still depend on the capabilities Ollama reports for the model.

Use **Browse Hugging Face Models** to open the GGUF model catalog in your browser. Installed Hugging Face models have an **Open on Hugging Face** button that returns to their repository. Searching for `Hugging Face` also finds installed models from that source.

### Start a chat after a download

When a chat model finishes downloading, choose **New Chat** in the completion notification to open a conversation with that model selected. Keep the original Ollama connection selected for this action.

If you enter a model that is already installed and supports chat, the download dialog offers **New Chat** immediately. Moose recognizes equivalent Hugging Face hostnames and model names with or without the `:latest` tag.

### Failed or cancelled downloads

The progress panel clears after a download finishes, fails or is cancelled. **Download Jobs** keeps the saved status and error details for the selected connection.

Choose **Details** in a failure notification or open the failed job in **Download Jobs**. You can select or copy the error details and choose **Edit and Retry** to change the model reference or Hugging Face variant before starting again. Select the original connection before retrying.

For Hugging Face errors, check the repository, variant and Ollama compatibility. Access errors also require checking that the selected Ollama instance can access the repository. If the error says a newer Ollama version is required, use the update steps below.

## Update or repair managed Ollama

Moose 0.7.5 includes release details for Ollama 0.40.6. You can check for newer stable Ollama releases without waiting for a new Moose version:

1. Open **Preferences → Ollama & Diagnostics → Manage Ollama**.
2. Compare **Installed Version** and **Available Version**, then choose **Check for Updates** to refresh the available release from GitHub.
3. Choose **Update Ollama** when a newer version is available.

Updates are downloaded from official Ollama releases and verified before installation. Your models, chats and saved connections are kept. Moose starts and checks the new engine before completing the update; if that fails, it restores the previous installation.

You can cancel before installation begins. Partial engine downloads are kept so a retry can resume them. Downloads need an internet connection and enough free disk space to prepare the new installation.

Choose **Repair Installation** to reinstall the saved engine release when its details are available. If those details are missing, Moose uses the available release. Repair keeps your models and chats too.

If a model download reports that it needs a newer Ollama version, choose **Update Ollama and Retry**. After a successful engine update, Moose retries that model download for the same active managed connection.

Updating Moose through Flatpak and updating its managed Ollama engine are separate operations. These controls manage only the installation owned by Moose. For an external server, update Ollama on that server and restart it before retrying.

## Logs and download errors

Open **Preferences → Ollama & Diagnostics** to view **Moose Log** or **Ollama Log**. You can copy recent log entries, including the Moose version and log location, when reporting a problem.

Model download and deletion failures also show details you can select or copy. If an update check fails, you can keep using the installed engine and try checking again later.

Review copied details before sharing them. See [Privacy and sharing](@/docs/privacy.md#logs-and-diagnostics) and [getting help](@/docs/getting-started.md#need-help).

## An existing Ollama instance

Choose **Add Provider → Connect Existing → Continue**, enter an instance name and **Ollama URL**, choose your message sharing preference, then select **Connect**. During first-time setup, **Connect a Provider** opens the provider chooser; select **Connect Existing → Continue** there.

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

Choose **Add Provider → Cloud Provider → Continue**, select your provider, enter its credentials and sharing preference, then choose **Save and Connect**. Moose stores API keys using your desktop's secret storage. Availability, model access, usage limits, and any charges depend on your provider account.

Moose requests permission before sharing conversation context with a remote provider. File sharing requires separate permission. Read [Privacy and sharing](@/docs/privacy.md) before sending private material.

### NVIDIA NIM

Choose **NVIDIA NIM** when connecting a provider and enter your NVIDIA API key. Moose discovers chat models and streams their answers. Reasoning and images are available on compatible models.

### Cloudflare Workers AI

Choose **Cloudflare Workers AI** and enter your **Cloudflare Account ID** from the Cloudflare dashboard. It must be a 32-character hexadecimal account ID. Enter an API token with Workers AI permission in the API key field.

Moose builds the account-specific server address for you, discovers supported chat models and checks their image capabilities. Reasoning is shown when the selected model provides it. If the connection is rejected, check the account ID, token and token permissions.

## Custom providers

In the cloud connection screen, choose **Custom Provider** to connect a service that uses one of these API formats:

- OpenAI Chat Completions
- OpenAI Responses
- Anthropic Messages
- Google Gemini

Enter the service's API base URL, including its API version when needed, such as `https://example.com/v1`. Moose adds the endpoint for the selected format; do not append `/chat/completions` or another endpoint yourself. HTTPS is required for remote servers; HTTP is available only on this device.

Select the authentication method required by the service: a bearer token, an API key header, or no authentication. For a key header, enter the header name your service expects. Saved keys use your desktop's secret storage.

Leave **Discover Models Automatically** enabled if the service offers a model catalog. Otherwise, turn it off and use **Add Model** to save at least one exact model ID. Manual models remain available when discovery is unavailable. Enable **Images** only for a model that accepts image input.

Model IDs containing spaces work with compatible cloud providers and custom connections. Keep the exact ID supplied by the service. Ollama and Gemini still use their own model naming rules.

When editing a custom connection, changing the server, API format or authentication settings resets sharing permissions and requires a new API key. If those settings stay the same, leave the key blank to keep the saved key.

## Chat settings and profiles

Per-chat settings include a system prompt, preferred model, context limits, and supported Ollama generation options. Built-in profiles and reusable custom profiles stay on your device.

Reasoning controls depend on what the selected model supports, including supported Mistral AI and DeepSeek models. Moose can display model reasoning separately from the final answer; a provider returning reasoning does not necessarily offer a control to configure it.
