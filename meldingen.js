var deleteknoppen = document.querySelectorAll('article button');
console.log('Button gevonden',deleteknoppen);

//var article = deleteknop.parentElement.parentElement;
//console.log('article gevonden', article);

deleteknoppen.forEach(function(deleteknop) {
    deleteknop.addEventListener("click",function(){
        var article = this.parentElement.parentElement;
        article.classList.add('deleted');
        console.log(this.parentElement.parentElement, 'functie doet het');
        setTimeout(function() {
            article.parentElement.removeChild(article);
        }, 2000)
    });
})

