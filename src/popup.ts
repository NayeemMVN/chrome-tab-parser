import '../styles/popup.scss';

document.getElementById('go-to-options').addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});



const app = async () => {
  // const tabs = await chrome.tabs.query({
  //   url: [
  //     "https://developer.chrome.com/*",
  //   ],
  // });
  //
  // console.log(tabs)
}

app()
