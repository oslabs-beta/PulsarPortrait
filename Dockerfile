FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=3333

EXPOSE 3333

ENTRYPOINT ["node", "./server/server.js"]