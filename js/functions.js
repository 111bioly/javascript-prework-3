function colorMessages(msg, color) {
	const idName = 'messages-' + color;
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById(idName).appendChild(div);
}
function clearMessagesAll() {
	document.getElementById('messages-win').innerHTML = '';
	document.getElementById('messages-green').innerHTML = '';
	document.getElementById('messages-red').innerHTML = '';
	document.getElementById('messages-blue').innerHTML = '';
}

