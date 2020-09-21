const fs = require("fs");
const { atom } = JSON.parse(fs.readFileSync("./wordbanks/atom.json", "utf8"));

module.exports = {
  name: 'molarmass',
  description: 'Calculate molar mass from chemical formula.',
  usage: '//molarmass <Chemical Formula>',
  args: true,
  argsCount: 1,
  guildOnly: false,
  directOnly: false,
  cooldown: 3,
  disabled: false,
  execute(client, message, args) {
    const formula = args[0];
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    lowercase = "abcdefghijklmnopqrstuvwxyz";
    number = "0123456789";

    function calculate(formula) {
      total = new Array();
      level = 0;
      total[0] = 0;
      i = 0;
      mass = 0;
      name = '';
      percision = 8;
      elmass = new Array();
      for (i = 0; i < elmass.length; i++) {
        elmass[i] = null;
      }
      elmass[0] = new Array();
      for (i = 0; i < elmass[0].length; i++) {
        elmass[0][i] = 0;
      }
      i = 0;
      while (formula.charAt(i) != "") {
        if ((uppercase + lowercase + number + "()").indexOf(formula.charAt(i)) == -1)
          i++;
        while (formula.charAt(i) == "(") {
          level++;
          i++;
          total[level] = 0;
          elmass[level] = new Array();
          for (h = 0; i < elmass[level].length; h++) {
            elmass[level][i] = 0;
          }
        }
        if (formula.charAt(i) == ")") {
          mass = total[level];
          name = '';
          level--;
        }
        else if (uppercase.indexOf(formula.charAt(i)) != -1) {
          name = formula.charAt(i);
          while (lowercase.indexOf(formula.charAt(i + 1)) != -1 && formula.charAt(i + 1) != "")
            name += formula.charAt(++i);
          mass = atom[name];
          massStr = mass + "";
          if (massStr.indexOf(".") != -1)
            masspercis = (massStr.substring(massStr.indexOf(".") + 1, massStr.length)).length;
          else
            masspercis = 0;
          percision = (percision == 8 || percision > masspercis) ? masspercis : percision;
        }
        var amount = "";
        while (number.indexOf(formula.charAt(i + 1)) != -1 && formula.charAt(i + 1) != "")
          amount += formula.charAt(++i);
        if (amount == "") amount = "1";
        total[level] += mass * parseInt(amount);
        if (name == "") {
          for (ele in elmass[level + 1]) {
            totalnumber = parseInt(elmass[level + 1][ele]) * amount
            if (elmass[level][ele] == null)
              elmass[level][ele] = totalnumber;
            else
              elmass[level][ele] = totalnumber + parseInt(elmass[level][ele]);
          }
        }
        else {
          if (elmass[level][name] == null)
            elmass[level][name] = amount;
          else
            elmass[level][name] = parseInt(elmass[level][name]) + parseInt(amount);
        }
        i++;
      }
      weight = rounded(total[0], percision);
      return weight;
    }

    function rounded(number, percision) {
      return Math.round(number * Math.pow(10, percision)) / Math.pow(10, percision);
    }
    calculate(formula);
    return message.channel.send(`Total: ${weight} g/mol`);
  },
};
