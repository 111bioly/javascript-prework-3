function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function printMessageRed(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages-red').appendChild(div);
}

function clearMessagesRed(){
	document.getElementById('messages-red').innerHTML = '';
}

function printMessageGreen(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages-green').appendChild(div);
}

function clearMessagesGreen(){
	document.getElementById('messages-green').innerHTML = '';
}
function printMessageWin(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages-win').appendChild(div);
}

function clearMessagesWin(){
	document.getElementById('messages-win').innerHTML = '';
}