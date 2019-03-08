function calculate_pushUp_score(qtd) {
	if (qtd >= 31) {
		return 2.5;
	} else if (qtd >= 27) {
		return 2.4;
	} else if (qtd >= 24) {
		return 2.3;
	} else if (qtd >= 20) {
		return 2.2;
	} else if (qtd >= 17) {
		return 2.1;
	} else if (qtd >= 14) {
		return 2;
	} else if (qtd >= 10) {
		return 1.9;
	} else if (qtd >= 7) {
		return 1.7;
	} else if (qtd >= 4) {
		return 1.5;
	} else if (qtd < 4) {
		return 0;
	}
}
