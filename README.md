# Horizon - A notes app

This project is a notes application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a platform for users to create todos and notes to schedule whole day. Designed with simplicity and efficiency in mind, the app caters to individuals and groups.

## Features

- Completely Responsive
- Fullscreen mode
- Create Collections
- Create notes in collections

## Tech Stack

**Client:** React, NextJS, TailwindCSS

**Server:** Node, Express, MongoDB

### Preqrequisites

#### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

#### Install TypeScript

Refer to https://www.typescriptlang.org/ to install typescript

    ```bash
    npm install -g typescript
    ```

#### Install ts-node

Refer to https://www.typescriptlang.org/ to install ts-node

    ```bash
    npm install -g ts-node
    ```

#### Learn Tailwind CSS

This project uses Tailwind CSS if you don't have any hands-on experience with tailwind css then you can refer to their docs.

#### Learn React JS

If you are new to React JS then you can refer to their docs.

## Cloning and Running the Application in local

- Clone the project into local.
- Go to `backend folder` and type the following command to install all npm packages

  ```bash
  npm install
  ```

- In `backend folder`, Change the `.env.example` file to `.env` and add the required credentials.
  `bash
  PORT=
  MONGO_URI=

`  You can get the`MONGO_URI` from [MongoDB Cloud ](https://cloud.mongodb.com/) by creating an account.

- Run the application by typing following command in terminal

  ```bash
  npm run build
  npm run start
  ```

- The application will by default run on port `8080` if `PORT` variable is not provided in `.env`

- Go to `frontend folder` and type the following command to install all npm packages

  ```bash
  npm install
  ```

- In `frontend folder`, Change the `.env.example` file to `.env` and add the required credentials.

  ```bash

  NEXT_PUBLIC_BACKEND_URL=
  NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000

  ```

- Run the application by typing following command in terminal

  ```bash
  npm run dev
  ```

- The Frontend Runs on [http://localhost:3000/](http://localhost:3000/).
- The Backend Runs on [http://localhost:8080/](http://localhost:8080/).

`Contributions are welcome 🎉🎉`

## Contributing

If you would like to contribute to SpotiStat, please open an issue or pull request on GitHub

### Ways to contribute

1. Solve the issues which are listed.
2. Create your own issue and then send PR.

Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your own machine
3.  **Commit** changes to your own branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull request** so that we can review your changes
