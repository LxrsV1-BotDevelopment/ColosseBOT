const Discord = require("discord.js");
const { PythonShell } = require("python-shell");
const { colorWhite, botThumbnail } = require("../config.json");

module.exports = {
  name: 'chembalance',
  description: 'Balances a chemical equation.',
  usage: '//chembalance <Equation>',
  args: true,
  argsCount: 1,
  guildOnly: false,
  directOnly: false,
  cooldown: 3,
  disabled: false,
  execute(client, message, args) {
    const formulaStr = args.join(" ");
    const formulaCheck = /=/.test(formulaStr);

    const formulaCheckEmbed = new Discord.MessageEmbed()
    .setColor(colorWhite)
    .setTitle("Chembalance | Error")
    .setThumbnail(botThumbnail)
    .setDescription("\`\`\`An error occurred while running the command.\`\`\`");
    .addField("Error: ", "\`\`\`Please use \"->\" instead of \"=\".\`\`\`")
    .setFooter("Error Code: 0");

    if (formulaCheck == true) {
      return message.channel.send({embed: formulaCheckEmbed});
    }

    const options = {
      mode: 'text',
      args: formulaStr
    }

    PythonShell.run('./modules/python_scripts/chembalance.py', options,
      function(error, results) {
        if (error) {
          const chembalanceErrorEmbed = new Discord.MessageEmbed()
          .setColor(colorWhite)
          .setTitle("Chembalance | Error")
          .setThumbnail(botThumbnail)
          .setDescription("\`\`\`An error occurred while running the command.\`\`\`")
          .addField("Error", "\`\`\`Couldn't get balanced equation from provided input.\`\`\`")
          .setFooter("Error Code: 0");

          message.channel.send({embed: chembalanceErrorEmbed});
        } else {
            const chembalanceEmbed = new Discord.MessageEmbed()
            .setColor(colorWhite)
            .setTitle("Chembalance | Success")
            .setThumbnail(botThumbnail)
            .addField("Input: ", `\`\`\`${formulaStr}\`\`\``)
            .addField("Balanced Equation: ", `\`\`\`${results}\`\`\``)
            .setFooter(`Requested by: ${message.author.username}`);

            message.channel.send({embed: chembalanceEmbed});
      }
    });
  },
};
