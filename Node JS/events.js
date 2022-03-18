const EventEmmiter = require('events');
class MyEmitter extends EventEmmiter{}
const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', ()=>{
    console.log('Please turn off the motor!');
    setTimeout(()=>
    {
        console.log('Please turn off the motor!'); 
    },3000);
}
);

console.log("The Script is running")
myEmitter.emit('WaterFull')
console.log("The Script is still  running")