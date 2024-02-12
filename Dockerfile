# Use a Node.js base image with a specified version
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app (replace 'build' with your actual build script)
RUN yarn build

# Expose port 3000 to access the application
EXPOSE 3000

# Command to run the application
CMD ["yarn", "start"]