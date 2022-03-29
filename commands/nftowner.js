function runPyScript(input, message, args){
    console.log(typeof input)
    myjson = JSON.stringify(input)
    result = JSON.parse(myjson)
    for (let i = 0; i < args[1]; i++) {
        message.channel.send(result["assets"][i]['image_url']);
        message.channel.send("address: " + result["assets"][i]['asset_contract']['address']);
      }
}
module.exports = {
    name:'nftowner',
    description:"this is a sena command!",
    execute(message, args){
        const sdk = require('api')('@opensea/v1.0#1j3wv35kyd6wqwc');
        sdk['retrieving-assets-rinkeby']({
        owner: args[0],
        order_direction: 'desc',
        offset: '0',
        limit: '5'
        })
        .then(res => runPyScript(res, message, args))
        .catch(err => console.error(err));
    }
}

  // console.log(typeof result["assets"][0]['name'])
    // console.log(result["assets"])

    // message.channel.send(result["assets"]['name']);//
    // message.channel.send(result["assets"][0]['image_url']);


