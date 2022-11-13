const  lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

  return await lib.discord.channels['@0.3.2'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `To everyone who gets this message: You are perfect as you are, keep trying, you are worth it. There is alway someone who will help and love you <3`
  });