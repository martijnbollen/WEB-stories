var hartknoppen = document.querySelectorAll('article button:first-of-type');
console.log('Button gevonden',hartknoppen);

var melding = document.getElementById('melding');

hartknoppen.forEach(function(hartknop) {
    hartknop.addEventListener("click",function(){
        melding.innerHTML="1 verhaal verwijdert uit geliefde verhalen";
        melding.classList.add('actie');
        this.style.backgroundImage="url(images/hart.png)";
        var article = this.parentElement.parentElement;
        article.classList.add('deleted');

        console.log(this.parentElement.parentElement, 'functie doet het');
        setTimeout(function() {
            article.parentElement.removeChild(article);
        }, 1500)
        melding.addEventListener("animationend", function() {
            melding.classList.remove('actie');
        })
    });
})

