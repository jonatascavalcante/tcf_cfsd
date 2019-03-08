function calculate_shuttle_run_score(time) {
	if (time <= 900) {
		return 2.5;
	} else if (time <= 950) {
		return 2.4;
	} else if (time <= 1000) {
		return 2.3;
	} else if (time <= 1050) {
		return 2.2;
	} else if (time <= 1100) {
		return 2.1;
	} else if (time <= 1150) {
		return 2;
	} else if (time <= 1200) {
		return 1.9;
	} else if (time <= 1250) {
		return 1.7;
	} else if (time <= 1300) {
		return 1.5;
	} else if (time > 1300) {
		return 0;
	}
}
