# Thesys

## 🚀 Getting started

1.  **Clone the repository**

    ```sh
    git clone https://github.com/GSTJ/ThesysBackend
    ```

2.  **Install the necessary packages.**

    Go to the main directory and run yarn

    ```sh
    cd ThesysBackend/
    yarn
    ```

3.  **Create a config file.**

    Create a .env file on your main directory in the following template

    ```sh
    PORT=<server_port>
    CONNECTION_STRING=<mongodb_connection_string>
    ```

4.  **Change CORS settings.**

    If you aren't developing for the official [Thesys website](https://www.thesys.com.br/), you will need to change the url's located in index.json to point to your domain

    ```js
    const whitelist = [
      "http://thesys.com.br",
      "https://thesys.com.br",
      "http://www.thesys.com.br",
      "https://www.thesys.com.br",
    ];
    ```

4)  **Start developing.**

    Initiate the project in development mode

    ```sh
    yarn dev
    ```

## 🚀 Building

Once you're done developing, you can simply start it on your production server

```sh
yarn start
```

_This repo is the backend of [Thesys!](https://github.com/GSTJ/Thesys)_

## What is Thesys?

Thesys is a digital platform for sharing legal knowledge. The platform in itself isn't ready yet, so we built this landing page to capture leads and start testing our idea!

## Why was it built?

We built Thesys for the GLH (Global Legal Hackathon) semi-finals.
We had the idea while realizing the time it takes to find a legal thesis on our country (Brazil), and how little we used one after writing it. With that in mind, we decided to give lawyers the ability to reach those looking for a thesis and provide it, either free (for recognition) or paid through our platform.

## What was it built on?

### Frontend

Next.js, React, Styled-components, Material-ui

### Backend

Node.js, Express, MongoDB
