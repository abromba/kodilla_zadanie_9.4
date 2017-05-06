function drawTree (stages) {
    for ( var i = 0 ; i < stages ; i++) {
        var star = ' ';
    for (var j = 0; j < i; j++) {
        star += '*';	
    }
    console.log(star);
}
}
stages = prompt ('Podaj ilość pięter');
drawTree (stages);