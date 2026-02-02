I will implement the Data Binding Refactoring for `chat.html` as requested.

**Plan:**

1.  **Define JSON Data Contract**:
    *   Insert the `mockAgentResponse(userInput)` function in the `<script>` section.
    *   Implement logic to return structured JSON data for "1"/"取件", "2"/"关门", and error cases.

2.  **Refactor HTML Templates**:
    *   Update `<template id="template-normal">` and `<template id="template-closed">`:
        *   Replace static `href` with `data-slot="link"`.
        *   Add `data-slot="code"`, `data-slot="status"`, and `data-slot="map"` to the respective elements.
        *   Preserve all existing Tailwind CSS classes and static UI elements.

3.  **Implement Render Engine**:
    *   Create the `renderCard(response)` function.
    *   Implement logic to clone the correct template and inject data into the `data-slot` targets.
    *   Construct the dynamic URL with query parameters: `${response.data.detailUrl}?code=${response.data.pickupCode}&status=${encodeURIComponent(response.data.statusText)}`.

4.  **Add Loading State**:
    *   Add a new `<template id="template-loading">` with the "thinking" bubble animation (3 bouncing dots).
    *   Refactor `handleInput` to:
        *   Immediately show the user message.
        *   Display the loading bubble.
        *   Wait 1.5 seconds.
        *   Remove loading bubble, generate response, render card, and display the final result.

5.  **Update Helper Functions**:
    *   Refactor `addAssistantTemplate` to a more generic `addAssistantMessage` that accepts a DOM node, allowing it to handle the dynamically rendered cards.
    *   Update `loadStateFromQuery` to use the new rendering logic for state restoration.

I will perform these changes directly in `c:\Users\TheFatiFish\Desktop\MyAgent\templates\chat.html`.