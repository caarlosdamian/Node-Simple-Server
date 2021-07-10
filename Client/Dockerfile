  FROM node:16.4-alpine
  WORKDIR /Client
  ENV PATH='./node_modules/.bin:$PATH'
  COPY package.json yarn.lock ./
  RUN yum update && yum install -y curl
  RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
  RUN yum update && yum install -y nodejs
  RUN npm run build
  CMD ["npm","start"]