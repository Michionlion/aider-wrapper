const BUTTONS = [
  { id: "run-btn", label: "Run" },
  { id: "clear-btn", label: "Clear" },
  { id: "stop-btn", label: "Stop" }
] as const;

export function renderChatHtml(): string {
  const buttonMarkup = BUTTONS.map(
    (button) => `<button id="${button.id}" class="control-button">${button.label}</button>`
  ).join("");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aider Chat</title>
    <style>
      :root {
        color-scheme: light dark;
      }
      body {
        margin: 0;
        padding: 10px;
        font-family: var(--vscode-font-family);
        color: var(--vscode-editor-foreground);
        background: var(--vscode-editor-background);
      }
      #chat-root {
        display: grid;
        grid-template-rows: 1fr auto;
        gap: 8px;
        height: calc(100vh - 20px);
      }
      #chat-display {
        border: 1px solid var(--vscode-panel-border);
        border-radius: 6px;
        padding: 10px;
        overflow: auto;
        background: var(--vscode-chat-background, var(--vscode-editor-background));
      }
      #button-bar {
        display: flex;
        gap: 8px;
      }
      .control-button {
        border: 1px solid var(--vscode-button-border, transparent);
        border-radius: 4px;
        padding: 6px 10px;
        cursor: pointer;
        color: var(--vscode-button-foreground);
        background: var(--vscode-button-background);
      }
    </style>
  </head>
  <body>
    <div id="chat-root">
      <div id="chat-display">Chat output placeholder</div>
      <div id="button-bar">${buttonMarkup}</div>
    </div>
  </body>
</html>`;
}
