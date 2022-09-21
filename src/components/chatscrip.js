
// import {io} from 'socket.io-client';

let header = document.querySelector("h1");
const messageInput = document.getElementById("mess");
const messageContainer = document.getElementById("message-container");
const btnSendMess = document.getElementById("send-mess");
const socket = io("http://localhost:4000")

const name = prompt("Enter your name: ")
displayMessage("You joined")

socket.emit('new-user', name);

socket.on('user-connected', name =>{
    console.log(socket.id)
    displayMessage(name +" is now connected")
})

btnSendMess.addEventListener('submit', e=>{
    e.preventDefault();
    const message = messageInput.value;
    displayMyMessage("You: "+message)
    socket.emit('send-mess',message)
    messageInput.value=''
})

socket.on('recive-mess-client', data => {
    // console.log(mess)
    displayMessage(data.name+": "+data.message)
    console.log(data.name+": "+data.message)
})

// socket.on('connect', ()=> {
//     // console.log('hello')
//     // console.log('You connected with id:' + socket.id)
//     // header.innerText = 'You connected with id:' + socket.id;
//     // displayMessage(socket.id)
//     // const room = "haha";
//     // socket.emit('send-mess', mess)
// })

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}
function displayMyMessage(message) {
    const messageElement = document.createElement('li');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}
