+++
title = "Files and documents"
description = "Bring context into a chat and keep a searchable local library."
weight = 3
+++
## Add an attachment

Use the attachment button in the composer, drag a file into the conversation, or paste a screenshot. Moose accepts images, PDFs, text files, Markdown, and code.

Attachments and drafts can remain available between sessions, so you can come back to a conversation without starting again.

## Images

Select a model with vision support before asking about an image. A text-only model does not gain vision capabilities from an attachment.

Images are also available with compatible OpenRouter, NVIDIA NIM and Cloudflare Workers AI models. For a manually added custom model, enable **Images** in the provider's model settings only if the service accepts image input. The model browser's **Image Input** filter can help you find Ollama models that understand pictures. See [Models and providers](@/docs/models-and-providers.md#find-a-model).

## PDFs and text

PDFs need selectable text. Moose uses text extraction; scanned pages are not read automatically. Convert scanned material to searchable text with an OCR tool before importing it.

Text, Markdown, and code files can supply context for a conversation. Model context limits still apply, so the model may not receive an entire large document in one request.

With Ollama, Moose makes room for an answer by selecting relevant excerpts and fitting recent conversation history around them. Sources are selected passages, not a promise that the model has read the whole document. If the current question and attachments leave too little room, shorten the question or use fewer files. See [longer chats and incomplete answers](@/docs/models-and-providers.md#longer-chats-and-incomplete-answers).

## The Files view

Open **Files** from the sidebar to browse, search, and filter attachments and library documents. You can preview a file, find its original folder, reopen related chats, or attach it to the current chat.

The document library is searchable locally. Source excerpts and page references help you inspect the material used alongside an answer.

## Sharing a file with a remote provider

Your document library is stored on your computer. Using a cloud provider or remote Ollama server can send relevant file content to that provider, after approval.

Message permission and file permission are separate. You can review context before sending and reset remembered permissions in Privacy settings. See [Privacy and sharing](@/docs/privacy.md).

## Files and web access

If you enable Web with a compatible Ollama or Ollama Cloud model, the model can form searches and page requests using the conversation, including attached content. Web asks for separate permission before first use. Search services and visited websites receive those requests, and web results go back to the chat model.

Local Only blocks web tools. You can turn Web off for the current conversation or clear its permissions in **Preferences → Web**. Read [Web permissions](@/docs/privacy.md#web-permissions) before using it with private documents.

Document references and **Web Sources** appear separately beside answers. Web sources show whether the model used a search snippet or read a page. Tool results and sources stay with saved chats, exports and chats continued in a new conversation.
