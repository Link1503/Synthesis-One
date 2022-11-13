const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.commands['@0.0.0'].create({
  "guild_id": `${process.env.GUILD_ID}`,
  "name": "status",
  "description": "Set's your bot's status",
  "options": [
    {
      "type": 3,
      "name": "status",
      "description": "Set the bot's status on Discord",
      "choices": [
        {
          "name": "Online",
          "value": "ONLINE"
        },
        {
          "name": "Idle",
          "value": "IDLE"
        },
        {
          "name": "Do Not Disturb",
          "value": "DND"
        },
        {
          "name": "Offline",
          "value": "INVISIBLE"
        }
      ],
      "required": true
    },
    {
      "type": 3,
      "name": "type",
      "description": "Set the bot's activity type.",
      "choices": [
        {
          "name": "Playing",
          "value": "GAME"
        },
        {
          "name": "Watching",
          "value": "WATCHING"
        },
        {
          "name": "Listening to",
          "value": "LISTENING"
        },
        {
          "name": "Competing in",
          "value": "COMPETING"
        },
        {
          "name": "Streaming",
          "value": "STREAMING"
        }
      ],
      "required": true
    },
    {
      "type": 3,
      "name": "name",
      "description": "Set the name of your activity",
      "required": true
    },
    {
      "type": 3,
      "name": "url",
      "description": "The URL your streaming status will link to. (Only use when the Streaming Activity Type is selected)"
    }
  ]
});
