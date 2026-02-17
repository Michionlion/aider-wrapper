import { describe, expect, it } from "vitest";
import { renderChatHtml } from "../src/view/renderChatHtml";

describe("renderChatHtml", () => {
  it("renders the root wrapper", () => {
    const html = renderChatHtml();
    expect(html).toContain('id="chat-root"');
  });

  it("renders the chat display area", () => {
    const html = renderChatHtml();
    expect(html).toContain('id="chat-display"');
  });

  it("renders the button bar and expected buttons", () => {
    const html = renderChatHtml();
    expect(html).toContain('id="button-bar"');
    expect(html).toContain('id="run-btn"');
    expect(html).toContain('id="clear-btn"');
    expect(html).toContain('id="stop-btn"');
    expect(html).toContain(">Run<");
    expect(html).toContain(">Clear<");
    expect(html).toContain(">Stop<");
  });
});
