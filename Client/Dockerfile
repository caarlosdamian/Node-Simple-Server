  FROM node:16.4-alpine
  WORKDIR /Client
  ENV PATH='./node_modules/.bin:$PATH'
  COPY package.json yarn.lock ./
  RUN npm
  CMD ["npm","start"]