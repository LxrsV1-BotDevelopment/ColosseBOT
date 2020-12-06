const Discord = require("discord.js");
const Hashes = require("jshashes");
const MD5 = new Hashes.MD5;
const SHA1 = new Hashes.SHA1;
const SHA256 = new Hashes.SHA256;
const SHA512 = new Hashes.SHA512;
const { colorGreen } = require("../config.json");

module.exports = {
	name: "hash",
	description: "Encode text to MD5, SHA1, SHA256, SHA512 hashes.",
	usage: "//hash <text>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const input = args.join(" ");

    const hashEmbed = new Discord.MessageEmbed()
    .setAuthor("⋙ ColosseBOT || Hash ⋘", "", "https://colossebot.app")
    .setColor(colorGreen)
    .addField("MD5 Hash:", MD5.hex(input))
    .addField("SHA1 Hash:", SHA1.hex(input))
    .addField("SHA256 Hash:", SHA256.hex(input))
    .addField("SHA512 Hash:", SHA512.hex(input));

    return message.channel.send(hashEmbed);
	},
};
