const port = chrome.runtime.connectNative('com.moveon.desktop_aux_application');
port.onMessage.addListener(function (msg) {
    console.log('Received:' + JSON.stringify(msg));
});
port.onDisconnect.addListener(function () {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
    }
    console.log('Disconnected');
});


port.postMessage({text: 'Hello, my_application'});

// setInterval(() => {
//     console.log('sending message')
//     port.postMessage("ping")
// }, 5000)

chrome.runtime.onMessage.addListener(
    function(request) {
        if (request.msgFromPopup){
            port.postMessage(request.msgFromPopup)
        }
    }
);


