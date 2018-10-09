FROM node:latest

#Update container and install vim
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim-tiny", "apt-utils"]

#Create the directory
RUN mkdir -p /usr/src/discordjs-template
WORKDIR /usr/src/discordjs-template

#Copy and install the bot
COPY package.json /usr/src/discordjs-template
RUN npm install

#Now this is the bot
COPY . /usr/src/discordjs-template

#Start the bot!
CMD ["npm", "start"]
