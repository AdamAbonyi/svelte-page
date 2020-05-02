FROM node:12 as build
# build the app

WORKDIR /app

COPY package.json package-lock.json rollup.config.js ./
COPY src ./src
COPY static ./static

RUN npm install

RUN npm run build

FROM node:12 as prep
# install dependencies

WORKDIR /app

COPY package.json package-lock.json static ./
COPY --from=build ./app/dist ./dist

RUN npm install --production

FROM mhart/alpine-node:slim-12
# run routify

ENV NODE_ENV production

WORKDIR /app

COPY index.js server.js ./
COPY --from=prep /app ./

EXPOSE 5005
CMD ["node", "index.js"]
