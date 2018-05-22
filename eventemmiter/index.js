const ChatApp = require('./resourses/chat');

let webinarChat  = new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat       = new ChatApp('---------vk');

vkChat.on('close', () => console.log('Чат вконтакте закрылся :('));
vkChat.close();

let chatOnMessage = (message) => console.log(message);

let prepareToAnswer = () => console.log('Готовлюсь к ответу');

webinarChat.on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);
vkChat.on('message', chatOnMessage);

webinarChat.on('message', prepareToAnswer);
vkChat.on('message', prepareToAnswer);
vkChat.setMaxListeners(2);


// Закрыть вебинар
setTimeout( ()=> {
    console.log('Закрываю вебинар...');
    webinarChat.removeListener('message', chatOnMessage);
}, 30000 );

// Закрыть вконтакте
setTimeout( ()=> {
    console.log('Закрываю вконтакте...');
    vkChat.removeListener('message', chatOnMessage);
}, 10000 );


// Закрыть фейсбук
setTimeout( ()=> {
    console.log('Закрываю фейсбук, все внимание — вебинару!');
    facebookChat.removeListener('message', chatOnMessage);
}, 15000 );