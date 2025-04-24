Mail Service

Mail Service is a self-hostable, reliable email service built for handling email sending in your web applications. It supports plain text, HTML, and file attachments. This service is designed to be deployed both on AWS and Vercel.
Getting Started

Prerequisites
Ensure that you have the following installed:
Node.js (>= 16.x)
npm (or yarn, pnpm, or bun)
Docker (if you prefer to run the app in a container)
Install Dependencies
Clone this repository and install the necessary dependencies:
git clone https://github.com/your-repo/mail-service.git
cd mail-service
npm install

# or

yarn install

# or

pnpm install
Running Locally
To run the development server locally:
npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev
Open http://localhost:3000 with your browser to see the result.
Editing the Application
You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.
Learn More

To learn more about Next.js, take a look at the following resources:
Next.js Documentation - Learn about Next.js features and APIs.
Learn Next.js - An interactive tutorial on Next.js.
Check out the Next.js GitHub repository. Your feedback and contributions are welcome!
Deploying the Service

1. Deploy on Vercel
   The easiest way to deploy your Next.js app is by using the Vercel Platform. Vercel provides seamless deployment for Next.js applications with minimal setup.
   Go to the Vercel Dashboard and log in.
   Click New Project and link your repository.
   Vercel will automatically detect your Next.js project, configure the deployment, and you can start the deployment with a click of a button.
   Check out the Next.js Deployment Documentation for more details.
2. Deploy on AWS (Elastic Beanstalk)
   Step 1: Set up AWS Elastic Beanstalk
   Install AWS CLI: Follow the AWS CLI installation instructions.
   Configure AWS CLI: Set up your AWS credentials with aws configure.
   Install Elastic Beanstalk CLI: Install the EB CLI to manage Elastic Beanstalk applications. Instructions can be found here.
   Step 2: Create an Elastic Beanstalk Environment
   Create a new Elastic Beanstalk application using the EB CLI:
   eb init -p node.js mail-service
   Set up your environment:
   eb create mail-service-env
   Deploy the application:
   eb deploy
   For more details, check out the AWS Elastic Beanstalk Documentation.
   Docker Deployment (Optional)

You can deploy the app in a Docker container.
Dockerfile
Here's a Dockerfile to containerize the application:

# Use Node.js official image from Docker Hub

FROM node:16

# Set the working directory

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)

COPY package\*.json ./

# Install dependencies

RUN npm install

# Copy the rest of the application

COPY . .

# Expose the port the app will run on

EXPOSE 3000

# Run the app

CMD ["npm", "run", "dev"]
Build and Run the Docker Container
Build the Docker image:
docker build -t mail-service .
Run the container:
docker run -p 3000:3000 mail-service
Visit http://localhost:3000 to see the application in the container.
