let activeTab;  // Keeps track of the active tab
let startTime;  // Stores the start time when the tab is activated
let currentTabId;  // Stores the ID of the currently active tab

// Listens for tab changes (when the user switches between tabs)
chrome.tabs.onActivated.addListener((activeInfo) => {
  // If there's already an active tab, log the time spent
  if (activeTab) {
    const timeSpent = Date.now() - startTime;
    logTime(activeTab, timeSpent);  // Send time data to backend
  }

  // Update the current active tab and reset the start time
  currentTabId = activeInfo.tabId;
  chrome.tabs.get(currentTabId, (tab) => {
    activeTab = tab.url;
    startTime = Date.now();  // Reset the start time when the tab is switched
  });
});

// Function to log time spent on a website
function logTime(url, timeSpent) {
  // Get the username from local storage
  chrome.storage.local.get(['username'], (data) => {
    const username = data.username;

    // Send the time data to the backend server
    fetch('http://localhost:5000/logTime', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        website: url,
        timeSpent,
        category: classifyWebsite(url),  // Classify the website as productive or unproductive
      }),
    });
  });
}

// Function to classify websites as 'productive' or 'unproductive'
function classifyWebsite(url) {
  const productiveSites = ['github.com', 'stackoverflow.com', 'gitlab.com'];
  const unproductiveSites = ['facebook.com', 'twitter.com', 'instagram.com'];
  
  // Check if the URL matches productive or unproductive sites
  if (productiveSites.some(site => url.includes(site))) {
    return 'productive';
  } else if (unproductiveSites.some(site => url.includes(site))) {
    return 'unproductive';
  } else {
    return 'neutral';  // Default category for unclassified websites
  }
}
