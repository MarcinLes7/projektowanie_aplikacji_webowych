window.onload = function () {
//    document.getElementById('element-one'). textContent = 'Nowa wartość';
  //  document.getElementById('element-two'). innerHTML = '<b>Pogrubiony tekst</b>';


    // czasowe opóźnienie pojawiana się

    setTimeout(function () {
        document.getElementById('element-one'). textContent = 'Nowa wartość';
        document.getElementById('element-two'). innerHTML = '<b>Pogrubiony tekst</b>';
    }, 5000)
}