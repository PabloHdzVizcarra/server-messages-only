FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "run", "dev"]
