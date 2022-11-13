const  lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const {Tools} = require('autocode-discordjs');

const ID = context.params.event.data.options.length ? context.params.event.data.options[0].value : context.params.event.member.user.id

return await lib.discord.channels['@0.3.2'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Someone wants to get this message out:\n\n${context.params.event.data.options[0].value}`
});