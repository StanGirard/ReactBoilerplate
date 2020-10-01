# Pulls the official image
FROM node:13.12.0-alpine

# Sets the working dir
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install all the dependencies
COPY package.json ./
RUN npm install --silent

# Add the App Code
COPY . ./

# Script that starts the app
CMD ["npm", "start"]