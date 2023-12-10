FROM node:lts

RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app
WORKDIR /var/www/dockerize-nuxt/nuxt-app

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3333

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3333

CMD [ "npm", "start" ]
