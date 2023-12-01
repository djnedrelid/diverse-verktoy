function moncalc_mscalc() {
	
	// Collect values.
	var ratingsize = document.getElementById('moncalc_ratingsize').value;
	
	// Sane check.
	if (ratingsize == '') {
		alert("Value needed.");
		return;
		
	} else if (isNaN(ratingsize)) {
		alert("Value must be numeric.");
		return;
	}
	
	// Regn ut ms denne Hz oppdateringsfrekvensen trenger.
	var msrate = 1000 / ratingsize;
	
	// Output.
	document.getElementById('moncalc_msresult').innerHTML = '<br>'+
	'The absolute minimum ms required for this frequency is '+
	'<b>'+ Math.floor(msrate) +' ms</b> (rounded down).<br> '+
	'The lower the better.';
}