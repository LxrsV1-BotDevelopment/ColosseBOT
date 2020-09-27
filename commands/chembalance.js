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
    const formulaStr = args.join(" ");
    const formulaCheck = /=/.test(formulaStr);
    if(formulaCheck == true) return message.channel.send("Please use \"->\" instead of \"=\".");
    
    const options = {
      mode: 'text',
      args: formulaStr
    }

    PythonShell.run('./modules/python_scripts/chembalance.py', options,
      function(error, results) {
        if (error) {
          message.channel.send("Something went wrong while getting the result.");
          //throw error;
        } else {
            message.channel.send(results);
      }
    });
  },
};
