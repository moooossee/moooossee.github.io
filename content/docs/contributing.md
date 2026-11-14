+++
title = "Contributing"
description = "Translations, bug reports, code, documentation, and design feedback are welcome."
weight = 7
+++
## Help translate

Help more people use Moose in their own language. You can translate the app from your browser on [Weblate](https://hosted.weblate.org/projects/moose/moose/).

1. Sign in to Weblate and choose your language. If it is missing, select **Start new translation** to add it.
2. Select **Translate**, enter your translation, and save it. You can also help review existing translations.

Use clear, natural wording and the terminology used by GNOME applications in your language. Keep Moose and other product names unchanged, and preserve placeholders such as `{name}` and `{count}`, formatting markup, and URLs. If a string is unclear, leave a comment on Weblate.

A few strings are a good place to start. We add people who help translate or review Moose to the credits below and to the [project README](https://github.com/moooossee/moose#translation-credits). Leave a comment on Weblate if you would like us to use a particular name or profile.

Translations reach users in a future app release.

### Translation credits

| Contributor | Language |
| --- | --- |
| [Moose](https://github.com/moooossee) | English (original text) |

## Report a problem

Search the [existing issues](https://github.com/moooossee/moose/issues) before opening a new one. Include:

- Moose version, Linux distribution, and installation method.
- Steps to reproduce the problem, what you expected, and what happened.
- Provider, model ID and Ollama version when relevant. For a custom provider, include the API format and authentication method without sharing the key.
- A relevant screenshot or error message, if useful.

For model download problems, open **Details** in the failure notification or find the failed job in **Models → More Options → Downloads**, then use **Copy Details**. Include the model reference and Hugging Face variant when relevant. Recent logs are available under **Preferences → Ollama & Diagnostics → Moose Log** or **Ollama Log**; the copy button includes the Moose version and log location. Include the Moose log for setup or update errors and the Ollama log if the engine will not start or reports a runtime error.

For Web or Calculator problems, include the selected provider and model, which tool was enabled and the message shown in its activity. For Web, also name the search service and whether Local Only was enabled. For an incomplete answer, say whether **Continue** worked and include the selected Ollama context window if you changed it.

For document creation problems, include the file format, provider and model, whether you used a new request or an existing answer, and the error shown with the response. If a preview looks different from the saved file, say which application you used to open it.

Remove private conversations, documents, credentials, and server details before sharing screenshots or logs.

See [getting help](@/docs/getting-started.md#need-help) and [logs and privacy](@/docs/privacy.md#logs-and-diagnostics) for more details.

## Suggest an idea

Describe what you are trying to do and how a change would help. Discuss larger features or interface changes in an issue before starting. Small fixes can go straight to a pull request.

## Work on a change

Fork the repository, clone your fork, and create a branch from `main`. Follow the [build instructions](@/docs/build-from-source.md).

Keep a change focused on one problem and follow the surrounding code. Use English for original text and keep the interface simple and consistent with Moose.

For database changes, add a migration instead of editing an existing one. When dependencies change, keep `Cargo.lock` and `cargo-sources.json` in sync.

## Send a pull request

Send your pull request to `main`. Explain the problem, resulting behavior, and how you checked the change. Include screenshots for interface changes and link related issues.

Read the project's [full contribution guide](https://github.com/moooossee/moose/blob/main/CONTRIBUTING.md) for current checks and submission guidance. Documentation and thoughtful feedback are contributions too.
