FROM node:14-alpine
ENV NODE_ENV production
WORKDIR /cicloIV
COPY . .
RUN yarn install --production
CMD ["node","/cicloIV/src/app.js"]

