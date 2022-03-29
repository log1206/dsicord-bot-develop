module.exports = {
    name:'chigusa_sad',
    description:"this is a chigusa_sad command!",
    execute(message, args){
        if(message.member.roles.cache.has('864080441576914954')){
            message.channel.send('https://cdn.discordapp.com/attachments/853878338157936680/858948419959390298/EvEFS46WQAQAMCl.png');
        } else{
            message.channel.send('you are not in the chigusa membership');
        }
        
    }

}