FROM node:11.10.1
RUN mkdir -p /usr/src/egg-app
WORKDIR /usr/src/egg-app

COPY package.json /usr/src/egg-app/package.json
RUN npm i --production --registry=https://registry.npm.taobao.org
COPY . /usr/src/egg-app
EXPOSE 9000

CMD npm run start