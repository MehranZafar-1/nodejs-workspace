import EventEmitter from "events";

//creating instance pf event
const customEmitter = new EventEmitter();

//1. on: listen/register for an event
//2. once: listen/register for an event only once
//3. emit: emit/call an event

// customEmitter.on("response", (name, id) => {
//     console.log(`data received for user ${name} with id: ${id}`);
// });

// customEmitter.emit("response", "mehran", 1);
// customEmitter.emit("response", "faizan", 2);
// customEmitter.emit("response", "usman", 3);

customEmitter.once("response", (name, id) => {
    console.log(`data received for user ${name} with id: ${id}`);
});

customEmitter.emit("response", "mehran", 1);
customEmitter.emit("response", "faizan", 2);
customEmitter.emit("response", "usman", 3);