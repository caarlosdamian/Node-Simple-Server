  FROM node:16.4-alpine
  WORKDIR /app
  COPY package.json .
  RUN npm run build
  CMD ["npm","start"]