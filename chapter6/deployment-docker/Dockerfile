FROM node:16.18.0

# Create app directory
WORKDIR /usr/src/app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm install

COPY . ./

CMD ["node", "app.js"]