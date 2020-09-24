const { PythonShell } = require("python-shell");

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
    const options = {
      mode: 'text',
      args: args
    }

    PythonShell.run('./modules/python_scripts/chembalance.py', options,
      function(error, results) {
        if (error) {
          throw error;
        } else {
            const result = results.toString();
            const reaction = result.split(";");
            message.channel.send(reaction[0]);
      }
    });
  },
};
