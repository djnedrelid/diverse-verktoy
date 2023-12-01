/*	
http://www.potomacltd.com/calculate_muzzle_energy.htm
1300 fps * 1300 fps * 115 grain / 450240 = ~431 ft-lb

https://en.wikipedia.org/wiki/Kinetic_energy
Kinetisk energi-formel (K.E. = 1/2 m v2): 
KE = 0,5 * masse(kg) * hastighet(mps) ^ 2 

metrisk versjon av imperialsk eksempel ovenfor:
0,5 * ((115 * 0,06479891)/1000) * ((1300*0,3048) ^ 2) = 585 J = 431,47 ft

ENHETER:
0.3048 feet = 1 meter
1 grain     = 0,06479891 gram
1 ft-lb     = 1,3558179483 Joule

*/

function ke_calc() {
	
	// Hent verdier.
	var weight_unit = document.getElementById('weight_unit').value;
	var velocity_unit = document.getElementById('velocity_unit').value;
	var weight_val = document.getElementById('weight_val').value;
	var velocity_val = document.getElementById('velocity_val').value;
	
	if (weight_val == '' || isNaN(weight_val)) {
		alert('Not a valid weight/mass value.');
		return;
	}
	
	if (velocity_val == '' || isNaN(velocity_val)) {
		alert('Not a valid velocity value.');
		return;
	}
	
	// Masse.
	var mass = 0;
	if (weight_unit == 'gram')
		mass = weight_val / 1000;
	else if (weight_unit == 'grain')
		mass = weight_val * 0.06479891 / 1000;
	
	// Hastighet.
	var velocity = 0;
	if (velocity_unit == 'fps')
		velocity = velocity_val * 0.3048;
	else if (velocity_unit == 'mps')
		velocity = velocity_val;
	
	// Joule.
	var ke_joule = 0.5 * (mass * (velocity ** 2));

	// ft-lb.
	var ke_foot_pound = ke_joule / 1.3558179483;
	
	// Vis resultat.
	document.getElementById('ke_calc_result').innerHTML = ''+
	'Joules of energy: <span style="color:green; font-weight:bold">'+ ke_joule.toFixed(2) +'</span><br>'+
	'ft-lb of energy: <span style="color:green; font-weight:bold">'+ ke_foot_pound.toFixed(2) +'</span>';
}

// Konverterer mellom gram og grain umiddelbart, som "kjekt å ha" funksjon hvis man kun trenger dette.
function gg_insta_convert() {
	var curval = document.getElementById('weight_val').value;
	var unit = document.getElementById('weight_unit').value;
	var convinfo = document.getElementById('gg_instant_convert');
	
	// Er verdi et gyldig nummer?
	if (isNaN(curval))
		return;
		
	if (unit == 'gram') {
		
		// Konverter fra Gram(g) til Grain(gr).
		var gr_val = curval / 0.06479891;
		convinfo.innerHTML = ' Gram(g) is '+ gr_val.toFixed(2) +' Grain(gr).';
		
	} else if (unit == 'grain') {
		
		// Konverter fra Grain(gr) til Gram(g).
		var g_val = curval * 0.06479891;
		convinfo.innerHTML = ' Grain(gr) is '+ g_val.toFixed(2) +' Gram(g).';
	}
}

// Konverterer mellom gram og grain umiddelbart, som "kjekt å ha" funksjon hvis man kun trenger dette.
function mf_insta_convert() {
	var curval = document.getElementById('velocity_val').value;
	var unit = document.getElementById('velocity_unit').value;
	var convinfo = document.getElementById('mf_instant_convert');
	
	// Er verdi et gyldig nummer?
	if (isNaN(curval))
		return;
		
	if (unit == 'mps') {
		
		// Konverter fra mps til fps.
		var fps_val = curval / 0.3048;
		convinfo.innerHTML = ' MPS is '+ fps_val.toFixed(2) +' FPS.';
		
	} else if (unit == 'fps') {
		
		// Konverter fra fps til mps.
		var mps_val = curval * 0.3048;
		convinfo.innerHTML = ' FPS is '+ mps_val.toFixed(2) +' MPS.';
	}
}
