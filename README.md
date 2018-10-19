# discord.js-template 

[![Join the Discord](https://discordapp.com/api/guilds/480231440932667393/embed.png)](https://discord.gg/g7wr8xb)

A template for a Discord.js bot that includes command and event handlers as well as environment variables and ESLint.

A star is always appreciated if you find this template useful for you!

## Running Locally
Make sure you have [Node.js](http://nodejs.org/) installed as well as Git SCM [Windows](https://git-scm.com/download/win) | [Mac](https://git-scm.com/download/mac) | [Linux](https://git-scm.com/download/linux) if you're going to go this route. Otherwise, simply clone the repo or download it and unzip it to a folder on your desktop.
```bash
$ git clone git@github.com:acollierr17/discord.js-template.git # or fork
$ cd discord.js-template
$ npm install
```
Rename `.env.example` to `.env` and update the file with its respective details. Afterward, start the bot.
```bash
$ npm start
```
Your Discord.js bot should now be live! (Check the console if you need to double check anything).

## Deploying to Heroku
With the included `Procfile` you have the option of deploying the bot to Heroku.

Make sure you have [Heroku CLI](https://cli.heroku.com/) installed before proceeding. You will need to download the Heroku Node.js buildpack first before moving along.
```bash
$ heroku create --buildpack https://github.com/heroku/heroku-buildpack-nodejs.git
```
Once the buildpack is installed, you may proceed with deployment.
```bash
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

*Credits to [Joma](https://github.com/jomaoppa) for the README template*