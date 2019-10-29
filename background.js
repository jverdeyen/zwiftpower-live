
browser.browserAction.onClicked.addListener(function(tab) {
    browser.tabs.executeScript(null, {file:'src/jquery-3.4.1.min.js'}, function(result){
        browser.tabs.executeScript(null, {file:'src/zwiftpower-live.js'});
    });
});

browser.contextMenus.create({
    id: "zwiftpowerlive",
    title: "Zwift Power Live!"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "zwiftpowerlive") {
        browser.tabs.executeScript(null, {file:'src/jquery-3.4.1.min.js'}, function(result){
            browser.tabs.executeScript(null, {file:'src/zwiftpower-live.js'});
        });
    }
});
