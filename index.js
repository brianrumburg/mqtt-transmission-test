var mqtt = require('mqtt');
var decoder = require('./decoder');

var myAnalogsTopic = 'spBv1.0/Kansas City/DDATA/Cirrus Link Lab/PLC1';

const client = mqtt.connect('mqtt://localhost', {username: 'admin', password: 'admin'});

client.on('connect', function () {
  client.subscribe(myAnalogsTopic);
});

client.on('message', function (topic, message) {
  if(topic == myAnalogsTopic) {
    console.log(message);

    const decodedMessage = decoder.decode(message);
    console.log(decodedMessage);
  }
});