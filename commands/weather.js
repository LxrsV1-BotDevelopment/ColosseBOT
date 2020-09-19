const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorWhite, botThumbnail } = require("../config.json");

module.exports = {
	name: 'weather',
	description: 'Gets weather forecast for specified location.',
	usage: '//weather <location>',
	args: true,
	argsCount: 1,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const input = args.join(" ").toLowerCase();

		fetch(`https://community-open-weather-map.p.rapidapi.com/weather?lang=en&units=metric&mode=JSON&q=${input}`, {
			"method": "GET",
			"headers": {
					"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
					"x-rapidapi-key": process.env.RAPIDAPI_KEY
				}
			}).then(response => response.json()).then(body => {
				if(!body) return message.channel.send("Sorry, I couldn't get the weather information. Try again later.");
				
				var pressure = Math.floor(body.main.pressure / 1.3332239);
			
				const weatherEmbed = new Discord.MessageEmbed()
				.setColor(colorWhite)
				.setTitle("Weather | Success")
				.setThumbnail(botThumbnail)
				.addField("Location:", `\`\`\`${body.name}, ${body.sys.country}\`\`\``)
				.addField("Current Wind:", `\`\`\`Direction: ${body.wind.deg}°; Speed: ${body.wind.speed}m/s\`\`\``)
				.addField("Current Atmosphere:", `\`\`\`Humidity: ${body.main.humidity}%; Visibility: ${body.visibility}m;\nPressure: ${pressure}mmHg\`\`\``)
				.addField("Current Condition:", `\`\`\`Temperature: ${body.main.temp}°C; Weather: ${body.weather[0].main}\`\`\``)
				.setFooter("Weather data is relative and can differ from other sources.");

				message.channel.send({embed: weatherEmbed});
			}).catch(error => {
				console.log(error.stack);
				const weatherErrorEmbed = new Discord.MessageEmbed()
				.setColor(colorWhite)
				.setTitle("Weather | Error")
				.setDescription("\`\`\`An error occurred while running the command.\`\`\`")
				.setThumbnail(botThumbnail)
				.addField("Error", "\`\`\`Couldn't get weather data, did you type the city name correctly?\`\`\`")
				.setFooter("Error Code: 21");

				return message.channel.send({embed: weatherErrorEmbed});
			});
	},
};
