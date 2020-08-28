const amqp = require("amqplib");

const testMessage = {"name":"Eshaan Mangal"}

connect();
async function connect(){
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");
        channel.sendToQueue("jobs",Buffer.from(JSON.stringify(testMessage)));
        console.log(`Job send succesfully ${testMessage.name}`)
    }catch(ex){
        console.error(ex);
    }
}