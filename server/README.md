# React Express Starter Pack

## First Steps

``` bash
# Separate the main folder in 2: client and server
# Go to package.json(server-side) and change the following:
    "client-install": "cd ../client && npm install"
    "client": "cd ../client && npm start"
```

 

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```