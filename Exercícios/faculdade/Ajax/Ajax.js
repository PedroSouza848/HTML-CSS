function ajax(nome, camada){
    var url = 'https://httpbin.org/get?text=' + nome;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var resp = xmlhttp.responseText;
            document.getElementById(camada).innerHTML = resp;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}