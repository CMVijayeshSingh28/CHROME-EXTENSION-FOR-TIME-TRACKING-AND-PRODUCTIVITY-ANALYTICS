// When the save button is clicked, store the username in local storage
document.getElementById('saveUsername').addEventListener('click', () => {
  const username = document.getElementById('username').value;

  // Store the username in Chrome's local storage
  chrome.storage.local.set({ 'username': username }, () => {
    alert('Username saved!');
  });
});
