\# Lab 12 Final Project



\*\*Academic Cooperation between\*\*

School of Computer Science and Engineering, North Minzu University \&

Software Engineering, College of Arts, Media and Technology, Chiang Mai University



\*\*Course:\*\* Basic Development and Operation

\*\*Academic Year:\*\* 2024



---



\## Student Information



| Field | Details |

|-------|---------|

| \*\*Name\*\* | Han bingda |

| \*\*Student ID\*\* | 20232078 |

| \*\*University\*\* | North Minzu University |



\### Photo



!\[My Photo](personal-website/photo.jpg)



---



\## Project Description



This project demonstrates the deployment of two web applications using Docker and Docker Compose:



1\. \*\*Personal Website\*\* - A static website built with HTML/CSS, served by Nginx

2\. \*\*Todo Application\*\* - A full-stack Todo app built with Node.js and Express



Both applications are deployed simultaneously on the same server using Docker Compose.



---



\## Application URLs



| Application | URL |

|-------------|-----|

| Personal Website | http://localhost:80 (or your deployed URL) |

| Todo Application | http://localhost:3001 (or your deployed URL) |



---



\## Project Structure



```

lab12-final-project/

├── .github/

│   └── workflows/

│       └── deploy.yml          # GitHub Actions CI/CD workflow

├── personal-website/

│   ├── index.html              # Personal website HTML

│   ├── style.css               # Personal website CSS

│   ├── photo.jpg               # Your photo (REPLACE THIS!)

│   └── Dockerfile              # Dockerfile for personal website (Nginx)

├── todo-app/

│   ├── server.js               # Express backend server

│   ├── package.json            # Node.js dependencies

│   ├── public/

│   │   └── index.html          # Todo app frontend

│   ├── Dockerfile              # Dockerfile for todo app (Node.js)

│   └── .dockerignore          # Docker ignore file

├── docker-compose.yml          # Docker Compose to deploy both apps

└── README.md                   # This file

```



---



\## How to Run



\### Prerequisites

\- Docker installed on your machine

\- Docker Compose installed



\### Steps



1\. \*\*Clone the repository\*\*

&nbsp;  ```bash

&nbsp;  git clone https://github.com/3133117822/lab12-final-project.git

&nbsp;  cd lab12-final-project

&nbsp;  ```



2\. \*\*Build and run with Docker Compose\*\*

&nbsp;  ```bash

&nbsp;  docker compose up --build -d

&nbsp;  ```



3\. \*\*Access the applications\*\*

&nbsp;  - Personal Website: http://localhost:80

&nbsp;  - Todo Application: http://localhost:3001



4\. \*\*Stop the applications\*\*

&nbsp;  ```bash

&nbsp;  docker compose down

&nbsp;  ```



---



\## Technologies Used



\- \*\*HTML / CSS\*\* - Personal website frontend

\- \*\*Nginx\*\* - Web server for personal website

\- \*\*Node.js / Express\*\* - Todo application backend

\- \*\*Docker\*\* - Containerization

\- \*\*Docker Compose\*\* - Multi-container orchestration

\- \*\*GitHub Actions\*\* - CI/CD pipeline



---



\## CI/CD Pipeline



This project uses GitHub Actions for automated building and testing. The workflow:



1\. Checks out the code

2\. Builds Docker images for both applications

3\. Pushes images to GitHub Container Registry (GHCR)

4\. Runs Docker Compose to verify both services start correctly

5\. Verifies both applications respond to HTTP requests



---



\&copy; 2026 Han bingda | Lab 12 Final Project



