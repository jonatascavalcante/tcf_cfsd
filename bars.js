function calculate_bars_score(qtd) {
	if (qtd >= 10) {
		return 2.5;
	} else if (qtd == 9) {
		return 2.4;
	} else if (qtd == 8) {
		return 2.3;
	} else if (qtd == 7) {
		return 2.2;
	} else if (qtd == 6) {
		return 2.1;
	} else if (qtd == 5) {
		return 2;
	} else if (qtd == 4) {
		return 1.9;
	} else if (qtd == 3) {
		return 1.7;
	} else if (qtd == 2) {
		return 1.5;
	} else if (qtd < 2) {
		return 0;
	}
}
