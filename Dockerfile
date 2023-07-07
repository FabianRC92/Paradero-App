FROM node:19-alpine3.15 AS build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

FROM nginx AS runtime
COPY --from=build /app/dist/paraderos /usr/share/nginx/html
