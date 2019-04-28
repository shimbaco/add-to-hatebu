chrome.browserAction.onClicked.addListener(function(_activeTab) {
  chrome.tabs.getSelected(null, function(tab) {
    const hatebuUrl = 'http://b.hatena.ne.jp/shimbaco/add.confirm?url='
    const currentUrl = encodeURIComponent(tab.url)
    chrome.tabs.create({ url: hatebuUrl + currentUrl })
  })
})
