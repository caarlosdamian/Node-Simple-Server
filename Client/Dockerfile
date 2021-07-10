  FROM node:16.4-alpine
  WORKDIR /Client
  ENV PATH='./node_modules/.bin:$PATH'
  COPY package.json yarn.lock ./
  RUN curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
  RUN sudo yum install nodejs
  RUN npm run build
  CMD ["npm","start"]