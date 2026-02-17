import * as vscode from "vscode";
import { CHAT_PANEL_ID, ChatPanelViewProvider } from "./view/ChatPanelViewProvider";

const AIDER_CONTAINER_ID = "aiderWrapper";
const FOCUS_VIEW_COMMAND_ID = "aiderWrapper.focusChatPanel";

export function activate(context: vscode.ExtensionContext): void {
  const provider = new ChatPanelViewProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(CHAT_PANEL_ID, provider),
    vscode.commands.registerCommand(FOCUS_VIEW_COMMAND_ID, async () => {
      await vscode.commands.executeCommand(`workbench.view.extension.${AIDER_CONTAINER_ID}`);
      provider.reveal();
    })
  );
}

export function deactivate(): void {}
