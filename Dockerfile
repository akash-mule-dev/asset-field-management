FROM node:20.2.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

VOLUME [ "/app/node_modules" ]

CMD ["npm", "run", "start"]