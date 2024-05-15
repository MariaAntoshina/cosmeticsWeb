# Use a Node.js base image
FROM node:latest as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight Node.js image for production
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy built files from the build stage
COPY --from=build /app/build ./build

# Expose port 80 (if necessary)
EXPOSE 80

# Start the server (if necessary)
CMD ["npx", "serve", "-s", "build"]