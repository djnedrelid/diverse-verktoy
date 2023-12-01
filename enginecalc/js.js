function enginecalc_calc_CC() {
	// Collect values.
	var bore = document.getElementById('enginecalc_bore').value;
	var stroke = document.getElementById('enginecalc_stroke').value;
	
	// Sane check.
	if (bore == '' || stroke == '') {
		alert("Values needed.");
		return;
	} else if (isNaN(bore) || isNaN(stroke)) {
		alert("Values must be numeric.");
		return;
	}
	
	// mm to cc conversion.
	bore = bore / 10;
	stroke = stroke / 10;
	
	// Sylinder volume formula (pi*r^2)*h.
	var cc = (Math.PI * Math.pow((bore/2),2)) * stroke;
	
	// Output.
	document.getElementById('enginecalc_CCresult').innerHTML = 'Engine size: <b>'+ cc.toFixed(1) +'cc</b>';
}

function enginecalc_calc_CCtoL() {
	// Collect values.
	var cc = document.getElementById('enginecalc_cc').value;
	
	// Sane check.
	if (cc == '') {
		alert("Value needed.");
		return;
	} else if (isNaN(cc)) {
		alert("Value must be numeric.");
		return;
	}
	
	var liters = cc * 0.001;
	
	// Output.
	document.getElementById('enginecalc_CCtoLresult').innerHTML = 'Liter: <b>'+ liters.toFixed(1) +'L</b>';
}

function enginecalc_calc_LtoCC() {
	// Collect values.
	var liters = document.getElementById('enginecalc_liters').value;
	
	// Sane check.
	if (liters == '') {
		alert("Value needed.");
		return;
	} else if (isNaN(liters)) {
		alert("Value must be numeric.");
		return;
	}
	
	var cc = liters / 0.001;
	
	// Output.
	document.getElementById('enginecalc_LtoCCresult').innerHTML = 'CC: <b>'+ cc.toFixed(1) +'cc</b>';
}

function enginecalc_calc_nm() {
	// Collect values.
	var nm = document.getElementById('enginecalc_nm').value;
	
	// Sane check.
	if (nm == '') {
		alert("Value needed.");
		return;
	} else if (isNaN(nm)) {
		alert("Value must be numeric.");
		return;
	}
	
	var lbft = nm * 0.73756215;
	
	// Output.
	document.getElementById('enginecalc_NMresult').innerHTML = 'lbf-ft: <b>'+ lbft.toFixed(1) +'</b>';
}

function enginecalc_calc_lbft() {
	// Collect values.
	var lbft = document.getElementById('enginecalc_lbft').value;
	
	// Sane check.
	if (lbft == '') {
		alert("Value needed.");
		return;
	} else if (isNaN(lbft)) {
		alert("Value must be numeric.");
		return;
	}
	
	var nm = lbft / 0.73756215;
	
	// Output.
	document.getElementById('enginecalc_LBFTresult').innerHTML = 'Nm: <b>'+ nm.toFixed(1) +'</b>';
}

function enginecalc_calc_kw() {
	// Collect values.
	var kw = document.getElementById('enginecalc_kw').value;
	
	// Sane check.
	if (kw == '') {
		alert("Value needed.");
		return;
	} else if (isNaN(kw)) {
		alert("Value must be numeric.");
		return;
	}
	
	var bhp = kw / 0.745699872;
	
	// Output.
	document.getElementById('enginecalc_KWresult').innerHTML = 'bhp: <b>'+ bhp.toFixed(1) +'</b>';
}

function enginecalc_calc_bhp() {
	// Collect values.
	var bhp = document.getElementById('enginecalc_bhp').value;
	
	// Sane check.
	if (bhp == '') {
		alert("Value needed.");
		return;
	} else if (isNaN(bhp)) {
		alert("Value must be numeric.");
		return;
	}
	
	var kw = bhp * 0.745699872;
	
	// Output.
	document.getElementById('enginecalc_BHPresult').innerHTML = 'kW: <b>'+ kw.toFixed(1) +'</b>';
}

function enginecalc_calc_rpm_torque_to_hp() {
	// collect values.
	var rpm1 = document.getElementById('enginecalc_rpm1').value;
	var torque1 = document.getElementById('enginecalc_torque1').value;
	
	// sane check.
	if (rpm1 == '' || torque1 == '') {
		alert("Value(s) needed.");
		return;
	} else if (isNaN(rpm1) || isNaN(torque1)) {
		alert("Value(s) must be numeric.");
		return;
	}
	
	var hp = (rpm1*torque1)/5252;
	
	// output.
	document.getElementById('enginecalc_HP1result').innerHTML = 'HP: <b>'+ hp.toFixed(1) +'</b>';;
}

function enginecalc_calc_hp_to_rpm() {
	// collect values.
	var hp1 = document.getElementById('enginecalc_hp2').value;
	var torque1 = document.getElementById('enginecalc_torque2').value;
	
	// sane check.
	if (hp1 == '' || torque1 == '') {
		alert("Value(s) needed.");
		return;
	} else if (isNaN(hp1) || isNaN(torque1)) {
		alert("Value(s) must be numeric.");
		return;
	}
	
	var rpm = (hp1*5252)/torque1;
	
	// output.
	document.getElementById('enginecalc_RPM1result').innerHTML = 'RPM: <b>'+ rpm.toFixed(1) +'</b>';;
}

function enginecalc_calc_hp_to_torque() {
	// collect values.
	var hp1 = document.getElementById('enginecalc_hp3').value;
	var rpm1 = document.getElementById('enginecalc_rpm3').value;
	
	// sane check.
	if (rpm1 == '' || hp1 == '') {
		alert("Value(s) needed.");
		return;
	} else if (isNaN(rpm1) || isNaN(hp1)) {
		alert("Value(s) must be numeric.");
		return;
	}
	
	var torque = (hp1*5252)/rpm1;
	
	// output.
	document.getElementById('enginecalc_TORQUE1result').innerHTML = 'Torque: <b>'+ torque.toFixed(1) +'</b>';;
}