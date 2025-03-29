# KuberProj - Rock-Paper-Scissors Game with Kubernetes & Docker

## Overview
This is a simple Rock-Paper-Scissors web game deployed using **Kubernetes** and **Docker**. The project primarily demonstrates the deployment and scaling of a containerized web application using **Minikube** and **NodePort** services.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript (served from Express)
- **Backend**: Node.js with Express.js
- **Containerization**: Docker
- **Orchestration**: Kubernetes (Minikube)

## Project Structure
```
KuberProj/
│── k8s/                # Kubernetes manifests
│   ├── deployment.yaml  # Deployment configuration
│   ├── service.yaml     # Service definition (NodePort)
│   ├── hpa.yaml         # Horizontal Pod Autoscaler
│── public/             # Static files for frontend
│   ├── css/            # Stylesheets
│   ├── fonts/          # Fonts
│   ├── images/         # Game assets
│   ├── js/             # Frontend JavaScript
│   ├── index.html      # Main game UI
│── .dockerignore       # Files ignored during Docker build
│── Dockerfile          # Docker build instructions
│── package.json        # Project dependencies & scripts
│── package-lock.json   # Dependency lock file
│── server.js           # Express.js backend logic
```

## Setup Instructions

### 1. Prerequisites
Ensure you have the following installed:
- [Docker](https://www.docker.com/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Node.js](https://nodejs.org/) (for local testing)

### 2. Clone the Repository
```sh
git clone https://github.com/YOUR_USERNAME/KuberProj.git
cd KuberProj
```

### 3. Build and Run Locally (Optional)
To test the application locally before deploying:
```sh
npm install
node server.js
```
Then, open `http://localhost:3000` in your browser.

### 4. Build the Docker Image
```sh
docker build -t kuberproj-game .
```

### 5. Start Minikube
```sh
minikube start
```

### 6. Load Docker Image into Minikube
```sh
minikube image load kuberproj-game
```

### 7. Deploy to Kubernetes
```sh
minikube kubectl -- apply -f k8s/deployment.yaml
minikube kubectl -- apply -f k8s/service.yaml
```

### 8. Access the Application
Get the Minikube service URL:
```sh
minikube service kuberproj-service --url
```
Open the displayed URL in your browser.

## Scaling and Testing
### Horizontal Pod Autoscaler (HPA)
To enable auto-scaling:
```sh
minikube kubectl -- apply -f k8s/hpa.yaml
```
Check HPA status:
```sh
minikube kubectl -- get hpa
```

### Rolling Update
Update deployment with a new image version:
```sh
minikube kubectl -- set image deployment/kuberproj-deployment server=kuberproj-game:v2
```

### Pod Failure Recovery Test
Delete a pod and check auto-recreation:
```sh
minikube kubectl -- delete pod <pod-name>
minikube kubectl -- get pods
```


---
This project demonstrates Kubernetes & Docker implementation using Minikube for a simple web-based Rock-Paper-Scissors game.
