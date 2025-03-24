// Runs when the popup is opened
document.addEventListener('DOMContentLoaded', () => {
  // Get the username from local storage
  chrome.storage.local.get(['username'], (data) => {
    // Fetch productivity analytics from the backend server
    fetch(`http://localhost:5000/getAnalytics?username=${data.username}`)
      .then(response => response.json())  // Parse the server response (analytics data)
      .then(analytics => {
        // Display the weekly report in the popup
        document.getElementById('productivityReport').innerHTML = `
          <h3>Weekly Report</h3>
          ${analytics.map(item => `<p>${item._id}: ${item.totalTime} minutes</p>`).join('')}
        `;
      });
  });
});
