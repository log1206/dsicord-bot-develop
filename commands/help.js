module.exports = {
    name:'help',
    description:"this is a help command! help you know what command you cn use",
    execute(message, args){
        message.channel.send("command:\n-clear <amount> clean the amount number of message(including this command).");
        message.channel.send("-nftowner <address> <amount> show the nft which address owned with assigned amount.");
        message.channel.send("-getchan show the message and youtube link for sena.");
        message.channel.send("-comchannel show sena stream with some description.");
        message.channel.send("-chigusa_sad show chigusa_sad image, only the member of chigusa can call this command.");
    }

}