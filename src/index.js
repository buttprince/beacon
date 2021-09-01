require("dotenv").config();

const { Client } = require("discord.js");
const { token } = require("./config.json");

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", (msg) => {
  const debateChannel = "858998284865765409";
  const possibleRoles = [
    "762098922201546752",
    "724873236424425562",
    "724873702734299156",
    "882672767818924032",
  ];
  const userRoles = Array.from(msg.member.roles.cache.keys());
  const canSpeak = possibleRoles.some((r) => userRoles.includes(r));

  if (msg.channel.id === debateChannel && canSpeak) {
    const probability = 0.95;
    if (Math.floor(Math.random()) < probability) {
      msg.delete();
      console.log(
        `${msg.author.username}#${msg.author.discriminator}: ${msg.content}`
      );
    }
  }
});

client.login(token);
