FROM node as build 

WORKDIR /app
COPY src /app/src/
COPY package.json tsconfig.json /app/
RUN npm install && npm run build

FROM node:alpine

COPY --from=build  /app/dist /dist/
COPY --from=build  /app/node_modules /node_modules/
COPY --from=build /app/package.json /
EXPOSE 8000
CMD [ "npm", "run", "start:prod" ]          