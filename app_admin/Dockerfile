FROM node:23

# Set the working directory inside the container
WORKDIR /app

# Copy the current directory contents into the container
COPY . .

# Install any dependencies if package.json exists
RUN if [ -f package.json ]; then npm install; fi

# Expose port 4200
EXPOSE 4200

# Start the container with npm start
CMD ["npm", "run", "start"]