+++
title = "Moose 0.7.5"
description = "Bring GGUF models from Hugging Face into Moose, with a new download dialog and fixes for setup and chat appearance."
date = 2026-10-29
+++
Moose 0.7.5 adds a way to download compatible GGUF models from Hugging Face through Ollama. Open **Download Model**, paste a repository link and choose a quantization or GGUF filename if you want a particular variant. You can also paste an Ollama model name or an `ollama run` or `ollama pull` command. The dialog shows where the model comes from and which Ollama connection will download it.

Once the model is ready, choose **New Chat** from the download notification to try it. If the model is already installed, the download dialog lets you open a chat straight away. Installed Hugging Face models also have a button to open their repository in your browser.

If a download fails, the error dialog offers **Edit and Retry**, with guidance about repository access, variants and Ollama compatibility. The progress panel now clears when a download finishes, fails or is cancelled, while its status and any error details stay available in **Download Jobs**.

This release also fixes **Connect a Provider** during first-time setup so it opens the provider chooser. Chat bubble backgrounds work correctly with custom GTK themes, and the model search field fits better in narrow windows.

Read the [0.7.5 release notes](@/changelog/0-7-5.md), learn how to [download a Hugging Face model](@/docs/models-and-providers.md#hugging-face-gguf-models), or [install Moose](@/docs/getting-started.md).
