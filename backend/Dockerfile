FROM node:15.12.0
WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm install
COPY . /code
CMD ["node", "src/index.js"]
