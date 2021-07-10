  FROM node:16.4-alpine
  WORKDIR /Client
  ENV PATH='./node_modules/.bin:$PATH'
  COPY . .
  RUN npm run build
  CMD ["npm","start"]