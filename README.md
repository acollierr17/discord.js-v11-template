# discord.js-template
A template for a Discord.js bot that includes command and event handlers as well as environment variables and ESLint.

## Running Locally
Make sure you have [Node.js](http://nodejs.org/) installed.
```bash
$ git clone git@github.com:acollierr17/discord.js-template.git # or clone your own fork
$ cd discord.js-template
$ npm install
```
Update `.env.example` with your respective details then remove `.example` from the file. Afterward, start the bot.
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

*Credits to [Joma Tech](https://github.com/jomaoppa) for the README template*