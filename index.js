const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const date = require('date-and-time');
const keepAlive = require('./server');



keepAlive();
const client = new Client({
    checkUpdate: false,
    syncStatus: false,
});

client.on('ready', () => {
	setInterval(() => {
	    const timenow = date.format(new Date(), 'hh:mm:ss A');
	    const r = new Discord.RichPresence()
	        .setApplicationId('1089666122988650567')
	        .setType('STREAMING')
	        .setURL('https://youtube.com/watch?v=0k5LSHkUpyQ&si=WaCqe1g0VNeTOd7D')
	        .setState('HackMap Rov By.zxvxzv')
	        .setName('HackMap Rov By.zxvxzv')
	        .setDetails(`Active [ ${timenow} ]`)
	        .setAssetsLargeImage('https://media.discordapp.net/attachments/1151355927597957131/1159178807027183636/nakroth-nakroth-db.gif?ex=651ef0e4&is=651d9f64&hm=2c2228496621a8e73d8d7ce8398cd982184a3102274213950f5be442aaf6eebe&')
	        .setAssetsLargeText(`Ping Server.... : ${Math.round(client.ws.ping)} ms`)
	        //.setAssetsLargeText('สถานะล็อคอินโปร : Working ✅')
	        .setAssetsSmallImage('https://media.discordapp.net/attachments/1089572008473407588/1095021266525753504/20230410_232327.jpg')
	        .setAssetsSmallText('Bot')
	        //.setAssetsSmallText('Bot1')
	        .addButton('__  [ - Mod ViP Free - ]  __', 'https://t.me/zxvxzv_cracked_mod_vip')
	        //.addButton('__  [ - JOIN FOR TESTER - ] __', 'https://www.zxvc.xyz/discord');
	    client.user.setActivity(r);
		
		
		function generateRandomString(length) {
		  let result = '';
		  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		  const charactersLength = characters.length;
		  for (let i = 0; i < length; i++) {
		    result += characters.charAt(Math.floor(Math.random() * charactersLength));
		  }
		  return result;
		}


		
		client.settings.setCustomStatus({
		  status: null, // 'online' | 'idle' | 'dnd' | 'invisible' | null
		  text: generateRandomString(10) + " | " + generateRandomString(10) + " | " + generateRandomString(10), // String | null
		  emoji: null, // UnicodeEmoji | DiscordEmoji | null
		  expires: null, // Date.now() + 1 * 3600 * 1000 <= 1h to ms
		});
		
		client.user.setHypeSquad('HOUSE_BRAVERY');
		client.user.setHypeSquad('HOUSE_BRILLIANCE');
		client.user.setHypeSquad('HOUSE_BALANCE');
	}, 500);
});

client.login("NzEzNDEzNDYzODcwNzk5OTk0.G1RXc8.ajq-BwACq-oqwA7PY_qbGyDMuB6WKTi19Jmwak");
