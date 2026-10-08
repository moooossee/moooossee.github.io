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

## PDFs and text

PDFs need selectable text. Moose uses text extraction; scanned pages are not read automatically. Convert scanned material to searchable text with an OCR tool before importing it.

Text, Markdown, and code files can supply context for a conversation. Model context limits still apply, so the model may not receive an entire large document in one request.

## The Files view

Open **Files** from the sidebar to browse, search, and filter attachments and library documents. You can preview a file, find its original folder, reopen related chats, or attach it to the current chat.

The document library is searchable locally. Source excerpts and page references help you inspect the material used alongside an answer.

## Sharing a file with a remote provider

Your document library is stored on your computer. Using a cloud provider or remote Ollama server can send relevant file content to that provider, after approval.

Message permission and file permission are separate. You can review context before sending and reset remembered permissions in Privacy settings. See [Privacy and sharing](@/docs/privacy.md).
