var checkbox = document.getElementById("humor");

function filter() {
    if (checkbox.checked) {
        document.getElementById("romanverhaal").style.display = 'none';
        document.getElementById("detectiveverhaal").style.display = 'none';
    } else {
        document.getElementById("romanverhaal").style.display = 'block';
        document.getElementById("detectiveverhaal").style.display = 'block';
    }

    filter();

}
