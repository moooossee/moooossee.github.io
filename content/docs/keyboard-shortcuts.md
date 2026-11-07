+++
title = "Keyboard shortcuts"
description = "Move around Moose, send messages and turn tools on or off from the keyboard."
weight = 5
+++
## Default shortcuts

| Action | Shortcut |
| --- | --- |
| New conversation | `Ctrl+N` |
| Focus the message composer | `Ctrl+L` |
| Search chats | `Ctrl+F` |
| Open the model manager | `Ctrl+M` |
| Refresh the active provider's models | `F5` |
| Open preferences | `Ctrl+,` |
| Toggle the conversation sidebar | `F9` |
| Stop the active response | `Esc` |

## Write a message

Press **Enter** to send and **Shift+Enter** for a new line. Type `/` at the start of the message box to open the tool menu. While it is open, use **Up** and **Down** to choose, **Enter** or **Tab** to apply the selected command, and **Esc** to dismiss the menu.

## Tool commands

| Command | What it does |
| --- | --- |
| `/web` or `/web on` | Enable Web for this chat. |
| `/web off` | Turn Web off for this chat. |
| `/calculator` or `/calculator on` | Enable Calculator for this chat. |
| `/calculator off` | Turn Calculator off for this chat. |
| `/calc` | A shorter name for `/calculator`; it also accepts `on` and `off`. |

You can use a command on its own or put it before your question, such as `/calculator What is 18% of 2450?`. Commands change the tool settings for the conversation; enabling a tool lets the model decide when to use it.

Tools require a compatible Ollama or Ollama Cloud model. Web asks for separate permission and is blocked by Local Only. You can also use **Chat Settings → Tools** or the active tool buttons above the message box. See [Web and Calculator](@/docs/models-and-providers.md#web-and-calculator).

## Customize shortcuts

Open **Preferences → Shortcuts** to change, clear, or reset a shortcut. Each action needs a distinct key combination. Printable keys need a modifier such as Ctrl, Alt, Shift, or Super.

Clear a binding to disable it, or reset shortcuts to restore the defaults.
