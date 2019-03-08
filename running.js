function calculate_running_score(gender, runningTime) {
	switch(gender) {
		case 'male':
			return get_running_score_masc(runningTime);
			break;
		case 'female':
			return get_running_score_fem(runningTime);
			break;
	}
}

function get_running_score_masc(runningTime) {
	if (runningTime <= 517) {
		return 2.5;
	} else if (runningTime <= 569) {
		return 2.4;
	} else if (runningTime <= 620) {
		return 2.3;
	} else if (runningTime <= 672) {
		return 2.2;
	} else if (runningTime <= 724) {
		return 2.1;
	} else if (runningTime <= 776) {
		return 2;
	} else if (runningTime <= 827) {
		return 1.9;
	} else if (runningTime <= 879) {
		return 1.7;
	} else if (runningTime <= 931) {
		return 1.5;
	} else if (runningTime > 931) {
		return 0;
	}
}

function get_running_score_fem(runningTime) {
	if (runningTime <= 710) {
		return 2.5;
	} else if (runningTime <= 781) {
		return 2.4;
	} else if (runningTime <= 852) {
		return 2.3;
	} else if (runningTime <= 923) {
		return 2.2;
	} else if (runningTime <= 994) {
		return 2.1;
	} else if (runningTime <= 1030) {
		return 2;
	} else if (runningTime <= 1101) {
		return 1.9;
	} else if (runningTime <= 1172) {
		return 1.7;
	} else if (runningTime <= 1243) {
		return 1.5;
	} else if (runningTime > 1243) {
		return 0;
	}
}
