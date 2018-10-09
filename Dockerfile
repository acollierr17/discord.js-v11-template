FROM node:latest

#Update container and install vim
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim-tiny", "apt-utils"]

#Create the directory
RUN mkdir -p /usr/src/template-bot
WORKDIR /usr/src/template-bot

#Copy and install the bot
COPY package.json /usr/src/template-bot
RUN npm install

#Now this is the bot
COPY . /usr/src/template-bot

#Start the bot!
CMD ["npm", "start"]
