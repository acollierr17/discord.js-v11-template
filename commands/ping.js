exports.run = async (client, message, args) => {
  const msg = await message.channel.send("🔔 Pinging..");
  msg.edit(`📶 Round Trip & Response: \`${Date.now() - message.createdTimestamp} Millisecond's\`. \n💻 Discord Application Programming Interface: \`${Math.round(client.ping)} Millisecond's\`.`);
};

exports.help = {
  name: "ping",
  aliases: ["pong", "pinga"],
  description: "View the latency of the client and API.",
  usage: "ping"
};
