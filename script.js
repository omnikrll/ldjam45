//constants~~
const playfield = document.querySelector('#playfield');
const levelIndicator = document.querySelector('#level_indicator');
const debugOutput = document.querySelector('#debug_output');
const sidnoise = document.querySelector('#sidnoise');
const tolerance = 64;
const tMod = 2.65;
const hearts = ['💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💟','💌','💝','♥'];
const emojis = [
'😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','⬆','⬇','⬅','➡','🔠','🔡','🔤','↗','↖','↘','↙','↔','↕','🔄','◀','▶','🔼','🔽','↩','↪','ℹ','⏪','⏩','⏫','⏬','⤵','⤴','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈵','🈴','🈲','🉐','🈹','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮','🅿','♿','🚭','🈷','🈸','🈂','Ⓜ','🛂','🛄','🛅','🛃','🉑','㊙','㊗','🆑','🆘','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','⛔','✳','❇','❎','✅','✴','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧','💹','💲','💱','©','®','™','〽','〰','🔝','🔚','🔙','🔛','🔜','❌','⭕','❗','❓','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','✖','➕','➖','➗','♠','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱','🔲','🔳','◼','◻','◾','◽','▪','▫','🔺','⬜','⬛','⚫','⚪','🔴','🔵','🔻','🔶','🔷','🔸','🔹'
];

//globals which will be reset dynamically
var AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext,
	aContext = new AudioContext(),
	blackBg = true,
	clickable = true,
	level = 1,
	ratio = 0.5,
	voices = [],
	_x, _y;


//scale the x coordinate to a value between 40hz and 8khz
function convertRange(value) { 
    return value * 7960 / playfield.offsetWidth + 40;
}

//audio stuff~~
//each Voice will have a carrier, a modulator, an LFO, and a gainstage
//voices will be created dynamically when emojis are added to the dom
function Carrier(freq) {
	this.osc = aContext.createOscillator();
	this.gain = aContext.createGain();
	this.osc.type = 'sine';
	this.osc.frequency.setValueAtTime(convertRange(freq), aContext.currentTime);
	this.osc.connect(this.gain);
	this.gain.gain.setValueAtTime(0.3, aContext.currentTime);
	this.osc.start(0);
}

function Modulator(freq) {
	this.osc = aContext.createOscillator();
	this.gain = aContext.createGain();
	this.osc.type = 'sine';
	this.osc.frequency.setValueAtTime((convertRange(freq) * ratio), aContext.currentTime);
	this.osc.connect(this.gain);
	this.gain.gain.setValueAtTime(5000, aContext.currentTime);
	this.osc.start(0);
}

function Lfo() {
	this.osc = aContext.createOscillator();
	this.gain = aContext.createGain();
	this.osc.type = 'sine';
	this.osc.frequency.setValueAtTime((5/3), aContext.currentTime);
	this.osc.connect(this.gain);
	this.gain.gain.setValueAtTime(0.6, aContext.currentTime);
	this.osc.start(0);
}

function Voice(x,y) {
	this.carrier = new Carrier(x);
	this.modulator = new Modulator(y);
	this.lfo = new Lfo();
	this.gain = aContext.createGain();
	this.modulator.gain.connect(this.carrier.osc.frequency);
	this.carrier.gain.connect(this.gain);
	this.lfo.gain.connect(this.gain.gain);
	this.lfo.gain.connect(this.modulator.osc.frequency);
	this.lfo.gain.connect(this.carrier.osc.frequency);
	this.gain.gain.setValueAtTime(0.1, aContext.currentTime);
	this.gain.connect(aContext.destination);
}


//at the start of each level, we pick a new goal,
//set the playfield color, and update the level text
function initLevel() {
	clickable = true;

	_x = Math.floor(Math.random() * playfield.offsetWidth);
	_y = Math.floor(Math.random() * playfield.offsetHeight);

	playfield.style.background = blackBg ? 'black' : 'white';
	document.body.style.color = blackBg ? 'white' : 'black';
	levelIndicator.innerHTML = 'level ' + level;
}

//at the end of each level, we remove all child nodes from
//the playfield, flip the playfield bg color, 
//increment the level number, and start the next level
function endLevel() {
	var emojis = document.getElementsByClassName('emoji');

	while(emojis[0]) {
		emojis[0].parentNode.removeChild(emojis[0]);
	}

	var cod = document.getElementsByClassName('circle_of_death');

	while(cod[0]) {
		cod[0].parentNode.removeChild(cod[0]);
	}

	blackBg = !blackBg;
	ratio *= 1.5;
	level++;

	initLevel();
}

//the magic happens on each click
function clickHandler(event) {
	if (clickable) {
	//keep our clicks under control
		event.stopPropagation();

		//debug text
		var debugString = '_x: ' + _x + ' _y: ' + _y + '<br>' + event.clientX + ', ' + event.clientY;

		//if we clicked the goal
		if ((Math.abs(_x - event.clientX) <= tolerance) && (Math.abs(_y - event.clientY) <= tolerance)) {
			clickable = false;

			for (var i in voices) {
				voices[i].carrier.osc.stop(aContext.currentTime);
				voices[i].modulator.osc.stop(aContext.currentTime);
				voices[i].lfo.osc.stop(aContext.currentTime);

				delete voices[i];
			}

			voices = [];

			//we create the div, style and position it
			var newDiv = document.createElement('div');
			newDiv.className = 'circle_of_death';
			newDiv.style.left = event.clientX + 'px';
			newDiv.style.top = event.clientY + 'px';
			newDiv.style.background = blackBg ? 'white' : 'black';

			//when its css animation ends, advance levels
			newDiv.addEventListener('animationend', endLevel, false);

			//add it to the dom
			playfield.appendChild(newDiv);
			sidnoise.pause();
			sidnoise.currentTime = 0;
			sidnoise.play();

			//debug text
			debugString += '<br>advance level';
		} else { //if we didn't click the goal
			var voice = new Voice(event.clientX, event.clientY);
			voices.push(voice);

			//pick which set of emojis to use
			var _emojis = ((Math.abs(_x - event.clientX) <= (tolerance * tMod)) && (Math.abs(_y - event.clientY) <= (tolerance * tMod))) ? hearts : emojis,
				//create a div and a text node for the emoji
				newDiv = document.createElement('div'),
				emoji = _emojis[Math.floor(Math.random() * _emojis.length)],
				content = document.createTextNode(emoji);

			//put the emoji in the div, position it, add it to the dom
			newDiv.appendChild(content);
			newDiv.className = 'emoji';
			newDiv.style.left = event.clientX + 'px';
			newDiv.style.top = event.clientY + 'px';
			playfield.appendChild(newDiv);

			//debug text
			debugString += '<br>insert an emoji into the doc at these coordinates and play a sound';
		}

		//update debug text in document
		debugOutput.innerHTML = debugString;
	}
}

playfield.addEventListener('click', clickHandler);

initLevel();