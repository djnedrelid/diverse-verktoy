function HTMLTagCheck() {

    var source = document.getElementById('unclosed-tags-source');
	var line_number_div = document.getElementById('line_number_div');
	line_number_div.innerHTML = '';

    var DOMHolderArray = new Array();
    var tagsArray = new Array();
    var lines = source.value.split('\n');
    for (var x = 0; x < lines.length; x++) {
        var tagsArray = lines[x].match(/<(\/{1})?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)>/g);
        if (tagsArray) {
            for (var i = 0; i < tagsArray.length; i++) {
                if (tagsArray[i].indexOf('</') >= 0) {
                    elementToPop = tagsArray[i].substr(2, tagsArray[i].length - 3);
                    elementToPop = elementToPop.replace(/ /g, '');
                    for (var j = DOMHolderArray.length - 1; j >= 0; j--) {
                        if (DOMHolderArray[j].element == elementToPop) {
                            DOMHolderArray.splice(j, 1);
                            if (elementToPop != 'html') {
                                break;
                            }
                        }
                    }
                } else {
                    var tag = new Object();
                    tag.full = tagsArray[i];
                    tag.line = x + 1;
                    if (tag.full.indexOf(' ') > 0) {
                        tag.element = tag.full.substr(1, tag.full.indexOf(' ') - 1);
                    } else {
                        tag.element = tag.full.substr(1, tag.full.length - 2);
                    }
                    var selfClosingTags = new Array('area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr');
                    var isSelfClosing = false;
                    for (var y = 0; y < selfClosingTags.length; y++) {
                        if (selfClosingTags[y].localeCompare(tag.element) == 0) {
                            isSelfClosing = true;
                        }
                    }
                    if (isSelfClosing == false) {
                        DOMHolderArray.push(tag);
                    }
                }

            }
        }
		line_number_div.innerHTML += (x+1) +':<br>';
    }

    var message = '';
    if (DOMHolderArray.length == 0) {
        message += '<p class="no-errors">No unclosed tags.</p>';
    } else {
        if (DOMHolderArray.length == 1) {
            message += '<p>The following tag doesn\'t seem to be closed:</p>';
        } else {
            message += '<p>The following tags don\'t seem to be closed:</p>';
        }

        message += '<ul class="results">';
        for (var i = 0; i < DOMHolderArray.length; i++) {
            var zebraClass;
            if (i % 2 == 0) {
                zebraClass = ' class="even"';
            } else {
                zebraClass = ' class="odd"';
            }
            var tagSanitized = DOMHolderArray[i].full.replace(/>/g, '&gt;');
            tagSanitized = DOMHolderArray[i].full.replace(/</g, '&lt;');
            message += '<li' + zebraClass + '><span class="line-number">Line ' + DOMHolderArray[i].line + '</span>: ' + tagSanitized + '</li>';
        }

        message += '</ul>';
    }

    document.getElementById('HTMLTagCheck_results').innerHTML = message;
	UpdateLineScroll();
}

function UpdateLineScroll() {	
	var sourcedivtop = document.getElementById('unclosed-tags-source').scrollTop;
	document.getElementById('line_number_div').scrollTop = sourcedivtop;
}