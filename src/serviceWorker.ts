import Tab = chrome.tabs.Tab;

let tabCollections: Tab[]
const processCurrentTabShouldBeActive = async (tab: Tab) => {
    const targetUrl: string = tab.url == ""? tab.pendingUrl : tab.url
    if (targetUrl.includes('walmart')){
        tabCollections.forEach((prevTab: Tab) => {
            if (prevTab.active && prevTab.id){
                chrome.tabs.update(prevTab.id, {
                    active: true
                })
            }
        })
    }
    tabCollections = await chrome.tabs.query({})
}
chrome.tabs.onActivated.addListener(async () => {
    tabCollections = await chrome.tabs.query({})
})

chrome.tabs.onCreated.addListener(async(tab) => {
    processCurrentTabShouldBeActive(tab)
})

chrome.tabs.onRemoved.addListener(async() => {
    tabCollections = await chrome.tabs.query({})
})

const port = chrome.runtime.connectNative('com.my_company.my_application');
port.onMessage.addListener(function (msg) {
    console.log('Received' + msg);
});
port.onDisconnect.addListener(function () {
    console.log('Disconnected');
});
port.postMessage({text: 'Hello, my_application'});

// chrome.runtime.sendNativeMessage(
//     'com.my_company.my_application',
//     {text: 'Hello'},
//     function (response) {
//         console.log('Received ' + response);
//     }
// );

