FROM node:12 as build
# build the app

WORKDIR /app

COPY package.json package-lock.json rollup.config.js ./
COPY src ./src
COPY static ./static

RUN npm install

ENV NODE_ENV production

RUN npm run build

FROM node:12 as prep
# install dependencies

WORKDIR /app

COPY package.json package-lock.json ./
RUN ls
RUN npm install
RUN npm uninstall prettier eslint eslint-plugin-svelte3

ENV NODE_ENV production

COPY --from=build ./app/dist ./dist
COPY static ./static

FROM mhart/alpine-node:12
# run routify

ENV NODE_ENV production

WORKDIR /app

COPY --from=prep /app .

RUN export PATH=/app

EXPOSE 5005 5000
CMD ["npm", "run", "serve"]
