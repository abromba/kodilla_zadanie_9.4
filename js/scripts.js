function drawTree(stages) {
    for (var i = 0; i < stages; i++) {
        var line = '';
        for (var j = 0; j < stages-i; j++) {
            line += ' ';
        }
        for (var k = 0; k < i * 2 + 1; k++) {
            line += '*';
        }
    console.log(line);
    }
}
var stages = prompt('Podaj ilość pięter');
drawTree(stages);