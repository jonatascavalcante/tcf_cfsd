$(document).ready(function() {
	//Loads the inputs that dynamically changes the form
	var $genders = $('input[name="gender"]');
	var isFemale = false;

	//Initially loads the form for the male gender
	$("#pushUp").hide();
	$("#tfc_result").hide();

	//Changes the bars test based on the gender input change
	$genders.change(function() {
  		var $checked = $genders.filter(function() {
    		return $(this).prop('checked');
  		});
  		if ($checked.val() === 'female') {
  			$("#pushUp").show();
  			$("#bars").hide();
  			isFemale = true;
  		} else if ($checked.val() === 'male'){
  			$("#pushUp").hide();
  			$("#bars").show();
  			isFemale = false;
  		}
	});

	//Treates the calculate button
	$("#btnCalcular").click(function() {
		 if ($("#absQtd").val() && $("#shuttlerunTime").val()) {
		 	if (!isFemale && $("#barsQtd").val()) {
		 		$("#tfc_form").submit();
		 		return;
		 	}
		 	if (isFemale && $("#pushUpQtd").val()) {
		 		$("#tfc_form").submit();
		 		return;
		 	}
		 	window.alert("É necessário preencher todos os campos para realizar o cálculo");
		 } else {
		 	window.alert("É necessário preencher todos os campos para realizar o cálculo");
		 }
	});

	//Treates the TFC form submission
	$("#tfc_form").submit(function(event) {
		event.preventDefault();
		$("#tfc_form").hide();
		$("#tfc_result").show();

		var gender = 'male';
		var strength, tafScore;
		var strengthNote, absNote, shuttleRunNote, runningNote;
		
		var absQtd = $("#absQtd").val();
		var shuttlerunTime = $("#shuttlerunTime").val();
		var runningTime = $("#runningTime").val();

		if(isFemale) {
			gender = 'female';
			$("#strength_test").html("Flexão 6 apoios");
			strength = $("#pushUpQtd").val();
			strengthNote = calculate_pushUp_score(strength);
			$("#strength_note").html(strengthNote);
		} else {
			$("#strength_test").html("Barra Fixa");
			strength = $("#barsQtd").val();
			strengthNote = calculate_bars_score(strength);
			$("#strength_note").html(strengthNote);
		}
		
		$("#strength_exec").html(strength);
		$("#abs_exec").html(absQtd);
		$("#shuttle_run_exec").html(shuttlerunTime);
		$("#running_exec").html(runningTime);
		
		absNote = calculate_abdominal_score(gender, absQtd);
		$("#abs_note").html(absNote);
		shuttleRunNote = calculate_shuttle_run_score(convertTime(shuttlerunTime, 100));
		debugger;
		$("#shuttle_run_note").html(shuttleRunNote);
		runningNote = calculate_running_score(gender, convertTime(runningTime, 60));
		$("#running_note").html(runningNote);
		tfcScore = strengthNote + absNote + shuttleRunNote + runningNote;
		$("#tfc_score").html("Nota Final no TFC: " + tfcScore);
	});	

	$("#shuttlerunTime").keyup(function() {
		var shuttlerunTime = $(this).val();
		var input;
		if (shuttlerunTime.length == 4 && (shuttlerunTime[0] == '9' || shuttlerunTime[0] == '8')) {
			input = shuttlerunTime.split(':')[0] + shuttlerunTime.split(':')[1];
			$(this).val(input[0] + ':' + input[1] + input[2]);
		}
	});

	$("#btnAlterarDados").click(function() {
		$("#tfc_form").show();
		$("#tfc_result").hide();

	});

	$("#btnNovoCalculo").click(function() {
		location.reload();
	});

});

function convertTime(time, cons) 
{
	var firstPart, secondPart, convertedTime;
	firstPart = parseInt(time.split(':')[0]);
	secondPart = parseInt(time.split(':')[1]);
	convertedTime = firstPart * cons + secondPart;
	return convertedTime;
}

