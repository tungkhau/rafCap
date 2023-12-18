# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Nuxt.js app for production
RUN npm run build

# Expose the port on which the Nuxt.js app will run (default is 3000)
EXPOSE 3000

# Start the Nuxt.js app in production mode with SSR
CMD ["npm", "start"]
