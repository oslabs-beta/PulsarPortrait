FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=3333

EXPOSE 3333

CMD ["node", "server/server.js"]