var options = {
    type: "basic",
    title: "Notification from Procrastinya",
    message: "Stop working so much",
    iconUrl: "images/icon128.png"
    };
    
    
    chrome.notifications.create(options, callback);
    
    function callback(){
        console.log('Popup done!')
    }
    