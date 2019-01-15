var hartknoppen = document.querySelectorAll('article button:first-of-type');
console.log('Button gevonden',hartknoppen);

//var article = deleteknop.parentElement.parentElement;
//console.log('article gevonden', article);

hartknoppen.forEach(function(hartknop) {
    hartknop.addEventListener("click",function(){
        var article = this.parentElement.parentElement;
        article.classList.add('deleted');
        hartknop.classList.add('unlike');
        console.log(this.parentElement.parentElement, 'functie doet het');
        setTimeout(function() {
            article.parentElement.removeChild(article);
        }, 1500)
    });
})

