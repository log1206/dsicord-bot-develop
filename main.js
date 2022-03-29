const Discord = require('discord.js'); //package

const client = new Discord.Client();

const prefix = '-';

const fs =require('fs');
const { ClientRequest } = require('http');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('hello everyone!!!');
});

client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    client.commands.get(command).execute(message, args, Discord);
    /*
    if(command === 'ping'){

        client.commands.get('ping').execute(message, args);
        //message.channel.send('pong!'); the execution code
    }
    else if(command ==='chigusa_sad'){
        client.commands.get('chigusa_sad').execute(message, args);
    }
    */

});


client.login('ODYyMjQyMzkzODQ4MDIxMDE0.YOVfzg.ATAn2oiAWrX8UDXmPqN4nCNTR8E'); //use token to log into bot
