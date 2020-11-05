#####server#####
FROM node:12.18.3 AS server
WORKDIR /opt/server
COPY server .
RUN npm install

#####client#####
FROM node:12.18.3 AS client
WORKDIR /opt/client
COPY client .
RUN npm install
RUN npm run build


#####App#####
#FROM nikolaik/python-nodejs:python3.6-nodejs12-alpine#
FROM node:12.18.3
WORKDIR /opt/app

COPY --from=server /opt/server ./server
COPY --from=client /opt/client/dist/ ./client/dist
COPY server/.env ./server

RUN apt-get update || : && apt-get install python3-pip -y
RUN pip3 install keras==2.2.4
WORKDIR /opt/app/server
CMD ["npm", "run", "dev"]
EXPOSE 7500
