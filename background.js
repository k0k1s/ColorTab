function updateTabColor(color) {
  browser.theme.update({
    colors: {
      frame: color,
      tab_background_text: "white",
      toolbar: color,
      tab_selected: color
    }
  });
}

browser.runtime.onMessage.addListener((message) => {
  if (message.color) {
    updateTabColor(message.color);
  }
});
