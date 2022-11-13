const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.commands['@0.0.0'].create({
  "name": "love",
  "description": "Show your Love! <3",
  "options": []
});

await lib.discord.commands['@0.0.0'].create({
  "name": "sendlove",
  "description": "Send Love to a set user!",
  "options": [
    {
      "type": 6,
      "name": "user",
      "description": "Choose a user you want to send love to!",
      "required": true
    }
  ]
});

await lib.discord.commands['@0.0.0'].create({
  "guild_id": "971360915138150430",
  "name": "test",
  "description": "test",
  "options": [
    {
      "type": 6,
      "name": "user",
      "description": "tag a user",
      "required": true
    },
    {
      "type": 3,
      "name": "message",
      "description": "the message you want to spread",
      "required": true
    }
  ]
});

await lib.discord.commands['@0.0.0'].create({
  "name": "say",
  "description": "Sends a anonnymous message in this channel.",
  "options": [
    {
      "type": 3,
      "name": "message",
      "description": "The message you want to send.",
      "required": true
    }
  ]
});

await lib.discord.commands['@0.0.0'].create({
  "name": "say-to",
  "description": "Sends a anonnymous message in this channel with a user tagged in it.",
  "options": [
    {
      "type": 6,
      "name": "user",
      "description": "the user you want to be tagged in this message.",
      "required": true
    },
    {
      "type": 3,
      "name": "message",
      "description": "The message you want to send.",
      "required": true
    }
  ]
});