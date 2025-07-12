# n8n + Express + PostgreSQL: Workflow Automation Starter Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org)
[![n8n](https://img.shields.io/badge/n8n-FF6A00?style=flat&logo=n8n&logoColor=white)](https://n8n.io)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com)

## 🔧 Project Overview

This repository offers a pre-configured Docker Compose setup integrating:

* **[n8n](https://n8n.io/)** – A powerful, open-source workflow automation tool that lets you connect APIs, databases, and services using a visual interface.
* **[Express.js](https://expressjs.com/)** – A lightweight Node.js server framework ideal for building RESTful APIs.
* **[PostgreSQL](https://www.postgresql.org/)** – A robust relational database used by both n8n and Express for storing structured data.

This boilerplate is ideal for building API-first applications, rapidly prototyping integrations, or automating business processes — all in a fully containerized development environment.


## 🧱 Architecture

The stack includes:

* **n8n (Port 5678)**

  * Visual workflow builder.
  * Connected to its own Postgres DB (`n8ndb`) to store workflows, credentials, and execution history.
  * Supports over 300+ native integrations (e.g., Slack, Gmail, Airtable, Notion, GitHub).

* **Express API (Port 3000)**

  * A REST API scaffold that connects to a dedicated Postgres DB (`expressdb`).
  * Acts as an integration point for n8n or external clients.
  * Easily extensible with new endpoints or business logic.

* **PostgreSQL**

  * Two separate logical databases for isolation:

    * `n8ndb`: Used exclusively by n8n.
    * `expressdb`: Used by the Express server.

## 📁 Project Structure

```
n8n-express/
├── docker/
│   └── postgres/
│       └── init.sql
├── docker-compose.yml
├── express/
│   ├── db.js
│   ├── Dockerfile
│   ├── index.js
│   ├── models/
│   │   └── itemModel.js
│   ├── package.json
│   ├── README.md
│   └── routes/
│       └── items.js
├── LICENSE
├── notes.md
├── README.md
```

## 🚀 Getting Started

1. **Clone the repository and configure `.env`**

   ```env
   POSTGRES_USER=youruser
   POSTGRES_PASSWORD=yourpassword
   POSTGRES_DATABASE_N8N=n8ndb
   POSTGRES_DATABASE_EXPRESS=expressdb
   ```

2. **Start the services**

   ```bash
   docker-compose up --build
   ```

3. **Open in browser**

   * n8n UI: [http://localhost:5678](http://localhost:5678)
   * Express API: [http://localhost:3000](http://localhost:3000)


## 🔄 What You Can Do with This Template

### ✅ Automate Any Workflow Visually (with n8n)

n8n allows you to drag and drop pre-built nodes to:

* Fetch data from external APIs (e.g., GitHub, Twitter, REST APIs).
* Trigger workflows from schedules, webhooks, or database events.
* Create multi-step workflows using conditional logic, loops, or data transformations.
* Notify users via Slack, Telegram, Discord, or email.
* Write results back to Postgres or trigger your custom Express API endpoints.

### 🧩 Integrate Custom APIs (with Express)

* Define routes for internal tools, dashboards, or third-party apps.
* Use Express endpoints as part of your n8n workflows for custom logic or secured operations.

### 📊 Store and Process Structured Data (with Postgres)

* Use Express or n8n to read/write to PostgreSQL.
* Schedule nightly jobs to sync or clean up data.
* Use n8n’s Postgres node to query and process records dynamically.

## 📌 Example Scenarios

* **Marketing Automation**: Fetch leads from Typeform, enrich via Clearbit, store in Postgres, and notify via Slack.
* **ETL Pipelines**: Pull data from external APIs and push to Express for processing and persistence.
* **Internal Tooling**: Build Express endpoints to trigger n8n workflows manually or based on events.
* **Ops Monitoring**: Use n8n to watch database changes and send alerts or create tickets automatically.

## 🧱 Why Use This Template?

* 🔄 **Zero-config orchestration**: Everything runs locally with Docker Compose.
* 🧠 **Low-code automation**: Non-developers can build and manage workflows using n8n’s UI.
* 🚀 **Extendable stack**: Easily build and scale the Express API or add new integrations to n8n.
* 📦 **Modular design**: Separate databases for n8n and your app prevent data conflicts.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Author:** [Siva Sai Krishna](https://github.com/ysskrishna)