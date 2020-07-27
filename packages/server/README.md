#  <img src="https://d33wubrfki0l68.cloudfront.net/370ae4842ec728b588f44e0ecdd5b3939e2368b0/bb3a4/static/logo.svg" height="50"/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/17d64968-e9e7-4733-b46c-4dfb9a4b7eb0/deploy-status)](https://app.netlify.com/sites/optimistic-easley-e6332b/deploys)
[![Author](https://img.shields.io/badge/author-GSTJ-F2C702?style=flat-square)](https://github.com/GSTJ)
[![Languages](https://img.shields.io/github/languages/count/GSTJ/Thesys?color=%23F2C702&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/GSTJ/Thesys?color=F2C702&style=flat-square)](https://github.com/GSTJ/Thesys/stargazers)
[![Forks](https://img.shields.io/github/forks/GSTJ/Thesys?color=%23F2C702&style=flat-square)](https://github.com/GSTJ/Thesys/network/members)
[![Contributors](https://img.shields.io/github/contributors/GSTJ/Thesys?color=F2C702&style=flat-square)](https://github.com/GSTJ/Thesys/graphs/contributors)

>  A marketplace for sharing legal knowledge!

---

## 🚀 Getting started

1.  **Clone the repository**

    ```sh
    git clone https://github.com/GSTJ/Thesys
    cd thesys/server
    ```

2.  **Install the necessary packages.**

    ```sh
    yarn
    ```

3.  **Create a config file.**

    Create a .env file on your main directory within the following template

    ```sh
    PORT=<server_port>
    CONNECTION_STRING=<mongodb_connection_string>
    ```

4.  **Change CORS settings.**

    If you aren't developing for the official [Thesys website](https://www.thesys.com.br/), you will need to change the url's located in index.json to point to your domain

    ```js
    const whitelist = ['https://www.(YOURDOMAIN).com']
    ```

4)  **Start developing.**

    Initiate the project in development mode

    ```sh
    yarn dev
    ```

## 👷‍♂️ Building

Once you're done developing, you can simply start it on your production server

```sh
yarn start
```
