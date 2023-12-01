function downloadcalc() {
	
	// Collect values.
	var ratingsize = document.getElementById('dcalc_ratingsize').value;
	var ratingtype = document.getElementById('dcalc_ratingtype').value;
	var downloadsize = document.getElementById('dcalc_downloadsize').value;
	var downloadtype = document.getElementById('dcalc_downloadtype').value;
	var ratestandard = document.getElementsByName('dcalc_ratestandard');
	
	// Bestem prefiks/SI standard.
	var rsNetwork = 0;
	var rs = 0;
	for (var n=0; n<ratestandard.length; n++) {
		if (ratestandard[n].checked) {
			rs = parseInt(ratestandard[n].value,10);
			
			if (rs == 1234) {
				rsNetwork = 1000;
				rs = 1024;
			} else {
				rsNetwork = rs;
			}
			break;
		}
	}
	
	// Bytt evt. komma med punktum som desimaltegn.
	ratingsize = parseFloat(ratingsize.replace(',','.'));
	downloadsize = parseFloat(downloadsize.replace(',','.'));
	
	// Sane check.
	if (ratingsize == '' || downloadsize == '') {
		alert("Values needed.");
		return;
		
	} else if (isNaN(ratingsize) || isNaN(downloadsize)) {
		alert("Values must be numeric.");
		return;
	}
	
	// Konverter rating til Bps.
	var RatingBps = 0;
	switch (ratingtype) {
		case 'bps':
			RatingBps = ratingsize / 8;
			break;
		
		case 'Bps':
			RatingBps = ratingsize;
			break;
		
		case 'kbps':
			RatingBps = (ratingsize * rsNetwork) / 8;
			break;
		
		case 'kBps':
			RatingBps = ratingsize * rsNetwork;
			break;
		
		case 'Mbps':
			RatingBps = (ratingsize * rsNetwork * rsNetwork) / 8;
			break;
		
		case 'MBps':
			RatingBps = ratingsize * rsNetwork * rsNetwork;
			break;
		
		case 'Gbps':
			RatingBps = (ratingsize * rsNetwork * rsNetwork * rsNetwork) / 8;
			break;
		
		case 'GBps':
			RatingBps = ratingsize * rsNetwork * rsNetwork * rsNetwork;
			break;
		
		case 'Tbps':
			RatingBps = (ratingsize * rsNetwork * rsNetwork * rsNetwork * rsNetwork) / 8;
			break;
		
		case 'TBps':
			RatingBps = ratingsize * rsNetwork * rsNetwork * rsNetwork * rsNetwork;
			break;
	}
	
	// Konverter downloadsize til bytes.
	var DownloadBytes = 0;
	switch (downloadtype) {
		case 'B':
			DownloadBytes = downloadsize;
			break;
		case 'kB':
			DownloadBytes = downloadsize * rs;
			break;
		case 'MB':
			DownloadBytes = downloadsize * rs * rs;
			break;
		case 'GB':
			DownloadBytes = downloadsize * rs * rs * rs;
			break;
		case 'TB':
			DownloadBytes = downloadsize * rs * rs * rs * rs;
			break;
	}
	
	// Regn ut antall sekunder det vil ta.
	var DownloadSecondCount = parseInt(DownloadBytes / RatingBps,10);
	var kBDownloadRate = parseFloat(RatingBps / rsNetwork);
	
	// Output.
	document.getElementById('dcalc_timeresult').innerHTML = '<br>'+
	'Time to completion:<br>'+
	'<b>'+ KonverterSekunderTilTid(DownloadSecondCount) +'.</b><br><br>'+
	'If transfer speed stays at <b>'+ kBDownloadRate.toFixed(2) +' kB/s</b>.';
}

function KonverterSekunderTilTid(secnum) {
	
	var seconds = parseInt(secnum,10);
	var hours = Math.floor(seconds / 3600);
	var minutes = Math.floor((seconds - (hours * 3600)) / 60);
	var seconds = seconds - ((hours * 3600) + (minutes * 60));
	
	return hours +' hours, '+ minutes +' minutes and '+ seconds +' seconds';
}