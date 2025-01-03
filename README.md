# Unhandled Server Errors in Node.js

This repository demonstrates a common error in Node.js applications: the lack of proper error handling in HTTP servers.  The provided `server.js` file showcases a basic server that's susceptible to crashing without any informative error messages.  `server-solution.js` offers a corrected version with robust error handling.

## Problem

The original `server.js` starts an HTTP server but fails to handle potential errors that might occur during its operation (e.g., network issues, invalid requests).  If an error happens, the server will crash silently, providing no information to the developer about the cause of the failure. This makes debugging and maintaining the application difficult.

## Solution

The improved `server-solution.js` addresses this issue by adding comprehensive error handling using the `error` event listener.  This listener captures any errors that occur within the server and logs them to the console. This provides valuable information for troubleshooting and preventing unexpected application crashes. The solution demonstrates best practices for handling server errors gracefully.