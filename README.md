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

## Deplying to Heroku
With the included `Procfile` you have the option of deploying the bot to Heroku.
```bash
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)