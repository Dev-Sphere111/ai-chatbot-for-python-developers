# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN npm install

# Copy the .env file
COPY .env .env

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.ts when the container launches
CMD ["npm", "start"]
