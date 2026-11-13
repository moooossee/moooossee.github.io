+++
title = "Files and documents"
description = "Bring files into a chat, create documents from your answers and find everything again in Files."
weight = 3
+++
## Add an attachment

Use the attachment button in the composer, drag a file into the conversation, or paste a screenshot. Moose accepts images, PDFs, text files, Markdown, and code.

Attachments appear as compact previews above the message box. Choose one to preview it or use its remove button before sending. Attachments and drafts can remain available between sessions, so you can come back to a conversation without starting again.

## Images

Select a model with vision support before asking about an image. A text-only model does not gain vision capabilities from an attachment.

Images are also available with compatible OpenRouter, NVIDIA NIM and Cloudflare Workers AI models. For a manually added custom model, enable **Images** in the provider's model settings only if the service accepts image input. The model browser's **Image Input** filter can help you find Ollama models that understand pictures. See [Models and providers](@/docs/models-and-providers.md#find-a-model).

Open an image in a sent message to see a larger preview. Choose **Fit Image to Window** or **100%** to view it at its original size. When the message has several images, use the previous and next buttons or the **Left** and **Right** arrow keys to browse them. The save action follows the image you're viewing.

## PDFs and text

PDFs need selectable text. Moose uses text extraction; scanned pages are not read automatically. Convert scanned material to searchable text with an OCR tool before importing it.

Text, Markdown, and code files can supply context for a conversation. Model context limits still apply, so the model may not receive an entire large document in one request.

With Ollama, Moose makes room for an answer by selecting relevant excerpts and fitting recent conversation history around them. Sources are selected passages, not a promise that the model has read the whole document. If the current question and attachments leave too little room, shorten the question or use fewer files. See [longer chats and incomplete answers](@/docs/models-and-providers.md#longer-chats-and-incomplete-answers).

Sent document attachments show their file type and size. PDFs also show their page count. Select a document to preview it.

## Create a document

Use **Create Document** beside the message box to ask for a file you can open and save:

1. Select a provider and model, then finish or stop any active response.
2. Choose **Create Document** and enter a **Document Name**, or leave the name for Moose to choose from the content.
3. Choose a **File Format** and describe what you need. **Report**, **Letter**, **Budget** and **Slides** fill in an example you can change.
4. Choose **Create**. When the answer and file are ready, a document card appears in the chat.

For example, choose **Excel Workbook** and ask for a monthly budget with planned costs, actual costs and totals. Your selected chat model writes the content, and Moose creates the file on your device. With a cloud model or remote Ollama server, the request follows the usual [sharing permissions](@/docs/privacy.md#created-documents-and-exports).

### Use an existing answer

Choose the document button beneath a completed answer, labelled **Create Document from Response**. Pick a name and format, then choose **Create**. Moose builds the file from that answer without asking the model to write it again.

You can also ask for a file in a message, such as "Create a PDF report about our project" or "Prepare an Excel budget". The **Create Document** dialog lets you choose the format directly.

### Choose a format

Moose can create these files:

| Kind | Formats |
| --- | --- |
| Documents | PDF (`.pdf`), Word (`.docx`), OpenDocument Text (`.odt`) |
| Spreadsheets | Excel (`.xlsx`), OpenDocument Spreadsheet (`.ods`), CSV (`.csv`) |
| Presentations | PowerPoint (`.pptx`), OpenDocument Presentation (`.odp`) |
| Text and data | Markdown (`.md`), plain text (`.txt`), HTML (`.html`), JSON (`.json`), XML (`.xml`) |

For spreadsheets, ask for clear column headings and tables. CSV keeps one table; Excel and OpenDocument Spreadsheet can keep multiple tables. For presentations, describe the audience and the slides you need.

### Preview, open and save

The finished document stays with the response. Choose **Preview** to read its contents in Moose, **Open** to use another application, or **Save As…** to save a copy to a location you choose.

The preview shows the content; open the file in an application that supports its format to see the final page, sheet or slide layout.

If an answer stops before the document is finished, choose **Continue** or retry the response. Moose creates the file once the response is complete. If file creation fails, the chat shows the reason and the action you can take next.

## The Files view

Open **Files** from the sidebar to browse your uploads, library documents and the files you've created in chats. **All** shows them together. Use **Library**, **Documents** or **Images** for uploaded files, or **Generated** for created documents.

Search by file name or contents. For generated documents, you can also search by the title of their chat. Their menu offers **Preview**, **Open**, **Save As…** and **Open Chat**. Opening a generated card shows its content preview; **Open Chat** returns to the response that created it, including an earlier answer version. Finish or stop an active response before switching to another answer version.

For uploaded files, you can preview a file, find its original folder, reopen related chats, or attach it to the current chat.

The document library is searchable locally. Source excerpts and page references help you inspect the material used alongside an answer.

## Export a conversation

Choose **Export** from a conversation's menu, then choose the format and save location:

| Format | Included files |
| --- | --- |
| JSON | Copies of attachments and created documents, with their details |
| Markdown | Attachment names and created document names and formats |
| Plain text | Attachment names and created document names and formats |

All three formats include document source excerpts, tool results and web sources. Use **Save As…** on a document card when you want that file on its own. Finish the active response before exporting its conversation.

## Sharing a file with a remote provider

Your document library is stored on your computer. Using a cloud provider or remote Ollama server can send relevant file content to that provider, after approval.

Message permission and file permission are separate. You can review context before sending and reset remembered permissions in Privacy settings. See [Privacy and sharing](@/docs/privacy.md).

## Files and web access

If you enable Web with a compatible Ollama or Ollama Cloud model, the model can form searches and page requests using the conversation, including attached content. Web asks for separate permission before first use. Search services and visited websites receive those requests, and web results go back to the chat model.

Local Only blocks web tools. You can turn Web off for the current conversation or clear its permissions in **Preferences → Web**. Read [Web permissions](@/docs/privacy.md#web-permissions) before using it with private documents.

Document references and **Web Sources** appear separately beside answers. Web sources show whether the model used a search snippet or read a page. Tool results and sources stay with saved chats, exports and chats continued in a new conversation.
