import '../styles/popup.scss';

document.getElementById('post-msg-button').addEventListener('click', () => {
  chrome.runtime.sendMessage({'msgFromPopup': document.getElementById('msg').value})
});

