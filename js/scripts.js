//CHOINKA SYMETRYCZNA - trochę wspierałam sie ksiażką
function drawTree(stages) {
    for ( var i = 1; i < stages; i++) {
        var empty = ' ';
		var star = '*';
        for (var j = 1; j < stages-i; j++) {
            empty += ' ';	
        }
		for (var j = 1; j < i*2-1; j++) {
            star += '*';
        }
    console.log(empty, star);
    }
}
stages = prompt('Podaj ilość pięter');
drawTree(stages);

/* MOJA CHOINKA NIESYMETRYCZNA

function drawTree(stages) {
    for (var i = 0 ; i < stages; i++) {
        var line = '';
        for (var j = 0; j < i; j++) {
            line += '*';	
        }
    console.log(line);
    }
}
stages = prompt('Podaj ilość pięter');
drawTree(stages);
*/