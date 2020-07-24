# ⚖ Thesys

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
