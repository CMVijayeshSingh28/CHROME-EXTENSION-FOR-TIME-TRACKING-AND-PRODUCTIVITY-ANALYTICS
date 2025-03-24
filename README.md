# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

"COMPANY": CODTECH IT SOLUTIONS

"NAME": CM Vijayesh Singh

"INTERN ID": CT08WSC

"DOMAIN": Full Stack Web Development

"DURATION: 4 WEEEKS

"MENTOR": NEELA SANTOSH

##Task Description:
This project involves the development of a Chrome extension for time tracking and productivity analytics, allowing users to monitor how much time they spend on various websites and providing insights into their overall productivity. The extension tracks time spent on different websites, categorizes them as productive or unproductive, and generates weekly productivity reports to help users assess their online habits. The system also includes a backend server to store user data and a dashboard for visualizing the analytics. This solution is built using a combination of JavaScript, HTML, CSS, Node.js, Express, and MongoDB to create a seamless experience for users.
Chrome Extension:
The Chrome extension serves as the primary tool for tracking time and displaying productivity reports. The extension is designed using HTML, CSS, and JavaScript. It works by monitoring the user’s activity across different websites. A background script (background.js) keeps track of the active tab, records the time spent on each website, and categorizes it as either productive (e.g., coding platforms like GitHub) or unproductive (e.g., social media websites like Facebook). When the user switches between tabs, the script logs the time spent on the current tab, sending this data to the backend server for storage and analysis.
The extension features a popup interface (popup.html) that allows users to view their real-time data. This popup displays the current time spent on websites and provides a summary of their weekly productivity based on the classification of visited websites. The options page (options.html) allows users to input and save their username for personalized tracking.
Backend and Database:
The backend is built using Node.js and Express, providing a RESTful API to handle requests from the Chrome extension. It exposes two main API endpoints: one to log time spent on websites and another to retrieve productivity analytics. The logTime endpoint collects data such as the username, website URL, time spent, and the website's category (productive or unproductive) and stores it in the database. The getAnalytics endpoint aggregates the logged data to generate a weekly productivity report.
The data is stored in a MongoDB database. MongoDB is a NoSQL database, ideal for handling time-tracking data, as it allows easy storage of documents containing information about time spent on different websites. Each document in the database includes the username, website URL, time spent, and category. The backend aggregates this data by category, calculating the total time spent on productive and unproductive websites over a given period.
Tools and Technologies:
Chrome Extension: Built using HTML, CSS, and JavaScript. The background script tracks website activity, while the popup displays time tracking and productivity data.
Node.js and Express: The backend is developed using Node.js, a JavaScript runtime, and Express, a lightweight web framework, to handle HTTP requests and interact with the database.
MongoDB: The database stores user activity and time data in a document-based format, allowing for flexible querying and aggregation of productivity data.
Fetch API: The extension communicates with the backend using the Fetch API to send time tracking data and retrieve analytics.
Conclusion:
The purpose of this project is to provide a tool that helps users understand their digital habits by tracking the time they spend on different websites and categorizing their activities as productive or unproductive. By offering a real-time productivity report and an aggregated weekly summary, the Chrome extension allows users to improve their online behavior, reduce time spent on unproductive sites, and increase their overall efficiency. With the integration of a backend server and MongoDB database, the extension offers a powerful, scalable solution for time tracking and productivity analytics.





