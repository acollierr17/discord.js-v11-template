require('dotenv-flow').config();

module.exports = {
    prefix: process.env.PREFIX,
    embedColor: process.env.DEFAULT_COLOR,
    discord: process.env.DISCORD,
    invite: process.env.INVITE
};