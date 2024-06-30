document.getElementById('changeColor').addEventListener('click', function() {
  browser.runtime.sendMessage({color: "#FF0000"}); // Change '#FF0000' to any color you prefer
});
