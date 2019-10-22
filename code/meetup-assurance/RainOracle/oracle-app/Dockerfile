FROM node:12-alpine

RUN mkdir /iexec_out

RUN npm i ethers node-fetch
COPY doesItRainInMajorque.js /app/doesItRainInMajorque.js

ENTRYPOINT node /app/doesItRainInMajorque.js
