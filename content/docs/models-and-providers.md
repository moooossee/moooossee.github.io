+++
title = "Models and providers"
description = "Find models, connect to OpenRouter and other services, use Web and Calculator, and look after Ollama."
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

## Find a model

Open **Models** with **Ctrl+M**. The **Installed** list shows models on the selected connection; choose **Use** beside a chat model to start a new conversation. The **Available** list helps you discover models to download through Ollama.

Choose **All**, **Everyday**, **Coding**, **Images** or **Documents** to browse by task. Search by name or what you want help with, then open **Filters** to narrow the available choices:

- **Preference** offers Balanced, Lighter Downloads or Larger Models.
- **Download Size** limits how much you want to download.
- **Image Input**, **Tool Use** and **Multiple Languages** help you find the features you need.

Open a model family to compare its **Versions**. **Technical Details** shows estimated memory and storage needs, the selected model name and hardware guidance. When Moose manages Ollama, suggestions also consider the memory available on your computer. With an external server, check that server's hardware instead.

These estimates help you plan; they do not guarantee that a model will fit or predict how fast it will answer. Longer conversations, images, graphics memory and other running apps affect what you need. Model language quality varies too. Choose **Reset Filters** to clear the search and return to the default choices.

## Download a model

Select an Ollama connection, open **Models** with **Ctrl+M**, and choose **Add Model…**. The **Model Name or Link** field accepts:

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

Progress messages show the download, verification and finishing stages. The active panel clears after a download finishes, fails or is cancelled. Open **Models → More Options → Downloads** to see the saved jobs and error details for the selected connection.

Choose **Details** in a failure notification or open the failed job from **Downloads**. You can select or copy the error details and choose **Edit and Retry** to change the model reference or Hugging Face variant before starting again. Select the original connection before retrying.

For Hugging Face errors, check the repository, variant and Ollama compatibility. Access errors also require checking that the selected Ollama instance can access the repository. If the error says a newer Ollama version is required, use the update steps below.

## Update or repair managed Ollama

Moose 0.8.0 includes release details for Ollama 0.40.6. You can check for newer stable Ollama releases without waiting for a new Moose version:

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
- OpenRouter
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

### OpenRouter

Choose **OpenRouter** in the cloud provider list and enter your own OpenRouter API key. Moose checks the key before connecting and finds the available chat models. Model access, usage limits and any charges depend on your account.

Answers appear as they arrive. Pictures and reasoning controls are available where supported by the selected model. OpenRouter is a chat provider; Moose's Web and Calculator tools currently require compatible Ollama or Ollama Cloud models.

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

Open **Chat Settings** to choose a profile, preferred model, temperature and how much recent conversation to include. You can also open **Tools**, edit the **System Prompt**, or adjust **Ollama Options**. Choose **Save Changes** to apply your edits.

The menu includes **Save as Profile…**, **Delete Profile…** and **Reset to Defaults**. Profiles reuse a temperature and system prompt as a starting point; they do not automatically turn on tools or grant sharing permissions. Built-in profiles and reusable custom profiles stay on your device.

Reasoning controls depend on what the selected model supports, including compatible OpenRouter, Mistral AI and DeepSeek models. Moose displays reasoning separately from the final answer. When a model allows reasoning to be turned off, that is the starting choice; Moose remembers later changes for the conversation and model. A provider returning reasoning does not always offer a control to configure it.

## Longer chats and incomplete answers

With Ollama, Moose checks how much space a request needs and keeps questions and answers together when choosing recent history. It can leave out older exchanges or shorten web excerpts to make room for the next answer. The full saved conversation stays on your device.

Ollama's context window defaults to 16,384 tokens. You can change **Context Window** in **Chat Settings → Ollama Options**. A larger window can hold more, but needs more memory. A very large question, document or set of tool results may still need to be shortened.

If an answer reaches its length limit, Moose saves what arrived and marks it as incomplete. Choose **Continue** to ask the model to pick up where it stopped. You can also choose **Continue Response** from the options of another finished answer. Continuing uses the conversation so far and can include a shortened part of a long answer; it does not guarantee the model will avoid every repetition.

## Web and Calculator

Web and Calculator are optional tools for compatible **Ollama** and **Ollama Cloud** models. A model must support tools; other providers, including OpenRouter, do not currently use these tools in Moose.

Open **Chat Settings → Tools**, enable the tools you want, then choose **Save Changes**. You can also type `/web` or `/calculator` at the start of the message box, either on its own or before a question. `/calc` is a shorter name for Calculator. Use `/web off` or `/calculator off`, or the tool's button above the message box, to turn it off for that chat.

### Search and read the web

Web can search for information and read text from public pages. Open **Preferences → Web** to choose a search service, then choose **Save Web Settings**:

| Choice | What you need |
| --- | --- |
| DuckDuckGo | No search account or key. This is the default. Searches may be temporarily limited. |
| Links Only | A public page link. Searches are disabled, but the model can read links you provide. |
| Brave Search | A Brave Search API key. Use **Manage Key** to save it in your desktop key storage. Your Search API subscription may have charges. |
| SearXNG | A public HTTPS search address for an instance that allows JSON searches. |

Before first use, Moose asks permission for Web in that chat. You can remember it for all chats using the selected search service. Web must still be enabled in each chat, and **Local Only** blocks it. Search queries and page requests can be based on the conversation, including attachments. See [Web permissions](@/docs/privacy.md#web-permissions) before enabling it for private material.

Open **Web Sources** beside an answer to inspect links, search snippets and text from pages that were read. Search snippets are not the same as reading a full page. The sources and tool activity are saved with the conversation and included in exports and chats continued in a new conversation.

Web reads public HTML and plain-text pages. It cannot open private network addresses, pages that need a sign-in, PDFs or pages whose text requires JavaScript. Requests, source length and the number of tool actions are limited, so some pages may need another source or a more focused question.

### Check a calculation

Calculator evaluates expressions on your device, including arithmetic, percentages, powers, parentheses and common functions such as `sqrt` and `round`. The result goes back to the selected model so it can finish the answer. It does not run arbitrary code or read files, and calculations use rounded decimal results rather than exact symbolic math.

Tool activity shows what ran and whether it completed, failed or stopped. Enabling a tool lets the model use it when needed; it does not force a calculation or web search for every question.
