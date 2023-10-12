FROM node:18.14.1-alpine

WORKDIR /app

RUN npm i -g @nestjs/cli

COPY package*.json /app/ 

RUN npm i
CMD [ "npm", "run", "start:dev"]