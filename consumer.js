const amqp = require("amqplib");

connect();
async function connect(){
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");

        channel.consume("jobs" , message =>{
            console.log(message.content.toString());
            if(message.content.toString == "Eshaan Mangal"){
                channel.ack(message)
            }
        })

    }catch(ex){
        console.error(ex);
    }
}