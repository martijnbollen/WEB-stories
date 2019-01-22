var deleteknoppen = document.querySelectorAll('article button');
console.log('Button gevonden',deleteknoppen);

var update = document.getElementById('melding');

var melding = document.querySelector('body > p');
console.log('Melding gevonden', melding);

//var article = deleteknop.parentElement.parentElement;
//console.log('article gevonden', article);

deleteknoppen.forEach(function(deleteknop) {
    deleteknop.addEventListener("click",function(){
        var article = this.parentElement.parentElement;
        article.classList.add('deleted');
        console.log(this.parentElement.parentElement, 'functie doet het');

        setTimeout(function() {
            update.innerHTML="Melding verwijdert";
            update.classList.add('actie');
            article.parentElement.removeChild(article);

        }, 2000)
        update.addEventListener("animationend", function () {
            update.classList.remove('actie');
        })
    });
})


