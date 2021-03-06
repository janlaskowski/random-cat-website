FROM node

# State the app directory
WORKDIR /app

#Install app dependencies
COPY package*.json ./

RUN npm install

RUN npm i --save express

RUN npm i --save cors

#for building code in produciton use:
# RUN npi ci --only=production

#Bundle app source
COPY . .

EXPOSE 8080

CMD ["node", "server.js"]

