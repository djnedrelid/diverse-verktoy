function calc_Spenningsfall() {
	// Collect values.
	var mm2 = document.getElementById('spenningsfall_mm2').value;
	var m = document.getElementById('spenningsfall_m').value;
	var A = document.getElementById('spenningsfall_A').value;
	var V = document.getElementById('spenningsfall_V').value;
	
	// Sane check.
	if (mm2 == '' || m == '' || A == '' || V == '') {
		alert("Du må sette inn verdier først.");
		return;
	} else if (isNaN(mm2) || isNaN(m) || isNaN(A) || isNaN(V)) {
		alert("Verdier må være numeriske (bruk punktum som desimal).");
		return;
	}
	
	var Motstand = 0.0175 * ((2 * m) / mm2);
	var Spenningsfall = Motstand * A;
	var TaptEffekt = Spenningsfall * A;
	var NyEffekt = (V - Spenningsfall) * A;
	
	var SpenningsfallProsent = Spenningsfall / (V / 100);
	
	// Output.
	document.getElementById('spenningsfall_ResultatSpenningsfall').innerHTML = ''+
	'Dette gir et spenningsfall på <b>'+ SpenningsfallProsent.toFixed(1) +'%</b><br>'+
	'Tapt effekt er '+ TaptEffekt.toFixed(2) +'W som etterlater '+ NyEffekt.toFixed(2) +'W (oppr. '+ (V * A) +'W).';
}