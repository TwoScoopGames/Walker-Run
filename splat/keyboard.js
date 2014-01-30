var Splat = (function(splat, window) {

	function KeyboardInput(keyMap) {
		this.keys = {};

		var that = this;
		for (var kc in keyMap) {
			this.keys[keyMap[kc]] = 0;
		}
		window.addEventListener("keydown", function(event) {
			
			if (keyMap.hasOwnProperty(event.keyCode)) {
				if (that.keys[keyMap[event.keyCode]] === 0) {
					that.keys[keyMap[event.keyCode]] = 1;
				}
				return false;
			}
		});
		window.addEventListener("keyup", function(event) {
			if (keyMap.hasOwnProperty(event.keyCode)) {
				that.keys[keyMap[event.keyCode]] = 0;
				return false;
			}
		});
	}
	KeyboardInput.prototype.isPressed = function(name) {
		return this.keys[name] == 1;
	};
	KeyboardInput.prototype.consumePressed = function(name) {
		var p = this.isPressed(name);
		if (p) {
			this.keys[name] = -1;
		}
		return p;
	};

	splat.keyMap = {
		"US": {
			8: "backspace",
			9: "tab",
			13: "enter",
			16: "shift",
			17: "ctrl",
			18: "alt",
			19: "pause/break",
			20: "capslock",
			27: "escape",
			32: "space",
			33: "pageup",
			34: "pagedown",
			35: "end",
			36: "home",
			37: "left",
			38: "up",
			39: "right",
			40: "down",
			45: "insert",
			46: "delete",
			48: "0",
			49: "1",
			50: "2",
			51: "3",
			52: "4",
			53: "5",
			54: "6",
			55: "7",
			56: "8",
			57: "9",
			65: "a",
			66: "b",
			67: "c",
			68: "d",
			69: "e",
			70: "f",
			71: "g",
			72: "h",
			73: "i",
			74: "j",
			75: "k",
			76: "l",
			77: "m",
			78: "n",
			79: "o",
			80: "p",
			81: "q",
			82: "r",
			83: "s",
			84: "t",
			85: "u",
			86: "v",
			87: "w",
			88: "x",
			89: "y",
			90: "z",
			91: "leftwindow",
			92: "rightwindow",
			93: "select",
			96: "numpad-0",
			97: "numpad-1",
			98: "numpad-2",
			99: "numpad-3",
			100: "numpad-4",
			101: "numpad-5",
			102: "numpad-6",
			103: "numpad-7",
			104: "numpad-8",
			105: "numpad-9",
			106: "multiply",
			107: "add",
			109: "subtract",
			110: "decimalpoint",
			111: "divide",
			112: "f1",
			113: "f2",
			114: "f3",
			115: "f4",
			116: "f5",
			117: "f6",
			118: "f7",
			119: "f8",
			120: "f9",
			121: "f10",
			122: "f11",
			123: "f12",
			144: "numlock",
			145: "scrolllock",
			186: "semicolon",
			187: "equals",
			188: "comma",
			189: "dash",
			190: "period",
			191: "forwardslash",
			192: "graveaccent",
			219: "openbracket",
			220: "backslash",
			221: "closebraket",
			222: "singlequote"
		}
	};
	splat.KeyboardInput = KeyboardInput;
	return splat;

}(Splat || {}, window));
