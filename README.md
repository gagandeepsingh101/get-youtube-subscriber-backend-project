<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">GET-YOUTUBE-SUBSCRIBER-BACKEND-PROJECT</h1>
</p>
<p align="center">
  Simple Api for Apply CRUD operation on Youtube Subscribers Data
  </p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running get-youtube-subscriber-backend-project](#-running-get-youtube-subscriber-backend-project)
>   - [🌐 Deployment Link](#-deployment-link)
> - [📄 API Documentation](#-api-documentation)
> - [🤝 Contributing](#-contributing)

---

## 📍 Overview

Simple backend api which used mongodb as database for performing CRUD operation on youtube subscribers data

---

## 📦 Features

- /subscribers ➡️ GET request for fetch all youtube subscriber data from database
- /subscribers/names ➡️ GET request for fetch all youtube subscriber data from database with only two field (names and subscribedChannel)
- /subscribers/:id ➡️ GET request for fetch specified youtube subscriber data from database on the basis of id parameter pass in url
- /subscribers/addNew ➡️ POST request for add new youtube subscriber data into database from passing data into request body
- /subscribers/update/:id ➡️ UPDATE request for update specified youtube subscriber data into database on the basis of id parameter pass in url and accept modified data into request body
- /subscribers/delete/:id ➡️ Delete request for delete specified youtube subscriber data into database on the basis of id parameter pass in url

---

## 📂 Repository Structure

```sh
└── get-youtube-subscriber-backend-project/
    ├── package-lock.json
    ├── package.json
    └── src
        ├── app.js
        ├── constant.js
        ├── controller
        │   └── main.controller.js
        ├── createDatabase.js
        ├── index.js
        ├── model
        │   └── Subscriber.model.js
        └── routes
            └── main.routes.js
```

## 🚀 Getting Started

### ⚙️ Installation

1. Clone the get-youtube-subscriber-backend-project repository:

```sh
git clone https://github.com/gagandeepsingh101/get-youtube-subscriber-backend-project
```

2. Change to the project directory:

```sh
cd get-youtube-subscriber-backend-project
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running get-youtube-subscriber-backend-project

Use the following command to run get-youtube-subscriber-backend-project:

```sh
node app.js
```

### 🌐 Deployment-Link

  You can access live api from [here](https://get-youtube-subscriber-110.onrender.com/)

--- 

## 📄 API Documentation

You can visit API documentation from [here](https://documenter.getpostman.com/view/29682764/2s9YsRaTq9)

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github/gagandeepsingh101/get-youtube-subscriber-backend-project/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github/gagandeepsingh101/get-youtube-subscriber-backend-project/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github/gagandeepsingh101/get-youtube-subscriber-backend-project/issues)**: Submit bugs found or log feature requests for Get-youtube-subscriber-backend-project.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/gagandeepsingh101/get-youtube-subscriber-backend-project
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---
