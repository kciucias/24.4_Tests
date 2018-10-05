
const formatDate = (timeInSeconds) => {
	let s = `${timeInSeconds}`;
	let m = 0;
	let h = 0;

	//var minutes = Math.floor(s / 60);
	//var seconds = s - minutes * 60;
	//var hours = Math.floor(s / 3600);

	if (s < 60) {
		return s + 's';
	} else if (s < 3600) {
		m = Math.floor(s/60);
		seconds = s - m * 60;
		rest = s % 60;
		if (rest === 0) {
			return m + 'm';
		} else {
			return m + 'm ' + seconds + 's';
		}
	} else if (s >= 3600) {
		// eg. 3666 = 1h 1m 6s
		h = Math.floor(s/3600);
		m = Math.floor((s - 3600*h)/60);
		s = s - (h*3600 + m*60);
		
		if (s === 0 && m === 0) {
			return h +'h';
		} else if (s === 0) {
			return h + 'h ' + m + 'm';
		} else if (m === 0) {
			return h + 'h ' + s + 's';
		} else {
			return h + 'h ' + m + 'm ' + s + 's';
		}
	}
	else {
		return '0s';
	}
};

module.exports = formatDate;

