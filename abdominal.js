function calculate_abdominal_score(gender, absQtd) {
	switch(gender) {
		case 'male':
			return get_abdominal_masc(absQtd);
			break;
		case 'female':
			return get_abdominal_fem(absQtd);
			break;
	}
}

function get_abdominal_masc(absQtd) {
	if (absQtd >= 46) {
		return 2.5;
	} else if (absQtd >= 39) {
		return 2.4;
	} else if (absQtd >= 35) {
		return 2.3;
	} else if (absQtd >= 30) {
		return 2.2;
	} else if (absQtd >= 25) {
		return 2.1;
	} else if (absQtd >= 20) {
		return 2;
	} else if (absQtd >= 15) {
		return 1.9;
	} else if (absQtd >= 11) {
		return 1.7;
	} else if (absQtd >= 6) {
		return 1.5;
	} else if (absQtd < 6) {
		return 0;
	}
}

function get_abdominal_fem(absQtd) {
	if (absQtd >= 42) {
		return 2.5;
	} else if (absQtd >= 37) {
		return 2.4;
	} else if (absQtd >= 33) {
		return 2.3;
	} else if (absQtd >= 28) {
		return 2.2;
	} else if (absQtd >= 24) {
		return 2.1;
	} else if (absQtd >= 19) {
		return 2;
	} else if (absQtd >= 15) {
		return 1.9;
	} else if (absQtd >= 10) {
		return 1.7;
	} else if (absQtd >= 6) {
		return 1.5;
	} else if (absQtd < 6) {
		return 0;
	}
}
