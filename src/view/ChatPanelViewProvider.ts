import * as vscode from "vscode";
import { renderChatHtml } from "./renderChatHtml";

export const CHAT_PANEL_ID = "aiderWrapper.chatPanel";

export class ChatPanelViewProvider implements vscode.WebviewViewProvider {
  private view: vscode.WebviewView | undefined;

  constructor(private readonly extensionUri: vscode.Uri) {}

  reveal(): void {
    this.view?.show(true);
  }

  resolveWebviewView(webviewView: vscode.WebviewView): void {
    this.view = webviewView;
    webviewView.webview.options = {
      enableScripts: false,
      localResourceRoots: [this.extensionUri]
    };
    webviewView.webview.html = renderChatHtml();
  }
}
