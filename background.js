// Change the periodInMinutes property to set time interval
var forumUrl = 'https://definetely-not-reddit.netlify.app/';
var alarm = chrome.alarms.create("myAlarm", { delayInMinutes: 0.05, periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener( function (alarm) {
  
  // Clear any notification with the same name
  chrome.notifications.clear('procrastinya-notification')
  
  var notification = chrome.notifications.create(
    'procrastinya-notification', {
      type: 'basic',
      iconUrl: "images/gmail.png", // Replace with your own image

      // Customize either the notification title or message
      title: 'Gmiaol!',
      message: 'New Emiaol from DefinitelyNotReddit...'
    },

    function () {}

  );
});

chrome.notifications.onClicked.addListener(function(notificationId) {
    chrome.tabs.create({url: forumUrl});
  });  