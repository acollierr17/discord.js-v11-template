require('dotenv-flow').config();

module.exports = {
    token: process.env.TOKEN,
    owner: process.env.OWNER,
    prefix: process.env.PREFIX,
    embedColor: process.env.DEFAULT_COLOR,
    discord: process.env.DISCORD,
    invite: process.env.INVITE
};