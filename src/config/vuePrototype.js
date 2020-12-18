import Vue from "vue"

//后端返回的富文本里px单位转rem
Vue.prototype.$changeToRem = function(content, size = 50) {
	if (!content) return
	let reg = /(:)(\s*)(\d*)(px)/g
	let str = content.replace(reg, (content, $1, space, $2) => {
		return space + $1 + (parseInt($2) / size) + 'rem'
	})
	return str
}

// 16进制转数字
Vue.prototype.$utf8to16 = function(str) {
	str = unescape(str)
	var out, i, len, c;
	var char2, char3;
	out = "";
	len = str.length;
	i = 0;
	while (i < len) {
		c = str.charCodeAt(i++);
		switch (c >> 4) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				out += str.charAt(i - 1);
				break;
			case 12:
			case 13:
				char2 = str.charCodeAt(i++);
				out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
				break;
			case 14:
				char2 = str.charCodeAt(i++);
				char3 = str.charCodeAt(i++);
				out += String.fromCharCode(((c & 0x0F) << 12) |
					((char2 & 0x3F) << 6) |
					((char3 & 0x3F) << 0));
				break;
		}
	}

	return out;
}
