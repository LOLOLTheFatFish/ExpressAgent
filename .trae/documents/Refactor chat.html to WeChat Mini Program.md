I will convert the `chat.html` prototype into a Native WeChat Mini Program page bundle (`chat.wxml`, `chat.wxss`, `chat.js`, `chat.json`).

**Plan:**

1.  **Create Directory**:
    *   Create a folder `wechat_miniprogram/pages/chat/` to house the new files.

2.  **Logic Migration (`chat.js`)**:
    *   Implement the `Page()` structure.
    *   Define `data`: `inputValue`, `msgList` (array for chat history), `scrollTop`, `isLoading`.
    *   Port `mockAgentResponse` logic.
    *   Implement `onInput` and `onSend`.
    *   Implement `onLoad` to handle `options.state` for state restoration.
    *   Implement `handleInput` logic: Push user msg -> Push loading msg -> Wait 1.5s -> Replace loading with agent response.
    *   Implement `onTapCard` to handle navigation using `wx.navigateTo`.

3.  **Structure Migration (`chat.wxml`)**:
    *   Convert HTML tags to WXML (`view`, `text`, `image`, `input`, `button`).
    *   Use `wx:for="{{msgList}}"` to render the chat stream.
    *   Use `wx:if` / `wx:elif` to switch between User bubbles, Loading bubbles, Normal cards, Closed cards, and Error cards.
    *   Map the UI sections: Header (Search), Chat Area, Bottom Composer, Bottom TabBar (static view).

4.  **Style Migration (`chat.wxss`)**:
    *   Translate Tailwind CSS classes to standard CSS.
    *   Define Color Variables (`--primary: #3182ed`, etc.).
    *   Implement `@font-face` for Material Symbols (using the Google Fonts URL).
    *   Ensure layout fidelity (Flexbox, spacing, shadows, border-radius).

5.  **Configuration (`chat.json`)**:
    *   Set navigation bar title and style.

I will write these 4 files to the `wechat_miniprogram/pages/chat/` directory.