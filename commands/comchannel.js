module.exports = {
    name:'comchannel',
    description:"this is for showing the channel with embed method",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('channel')
        .setURL('https://www.youtube.com/watch?v=I7eZY-SBmf8&list=PLbbLC0BLaGjpyzN1rg-gK4dUqbn8eJQq4&index=5')
        .setDescription('This is sena streaming')
        .addFields(
            {name:'Rule 1', value:'cute'},
            {name:'Rule 2', value:'kawaii'}
        )
        .setImage('https://i.ytimg.com/vi/WSiIy9P3f3M/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5K7xtZZBLNC089xP9o34VD_emRg')  
        .setFooter('subscript her channel plz!');
        
        message.channel.send(newEmbed);
    }

}
