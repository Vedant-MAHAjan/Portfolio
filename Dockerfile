# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install
RUN npx browserslist@latest --update-db

# Copy the entire project to the working directory
COPY . /app

# Build the React app for production
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define environment variable
ENV REACT_APP_API_URL=https://api.example.com

# Run the app
CMD ["npm", "start"]
