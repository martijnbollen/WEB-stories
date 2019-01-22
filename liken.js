var likeknoppen = document.querySelectorAll('article button:first-of-type');
console.log('Likes gevonden',likeknoppen);

var update = document.getElementById('update');
console.log(update);

likeknoppen.forEach(function(likeknop) {
    likeknop.addEventListener("click",function(){
       if (this.style.backgroundImage="url(images/hart.png)") {
           console.log('vullen');
           this.style.backgroundImage="url(images/hartgevuld.png)";
           update.innerHTML="1 verhaal toegevoegt aan geliefde verhalen";
           update.classList.add('actie');
           update.addEventListener("animationend", function(){
               update.classList.remove('actie');
           })
       }

        else {
           console.log('back'); this.style.backgroundImage="url(images/hart.png)";
        }

    });
})


var downloaden = document.querySelectorAll('article button:nth-of-type(2)');
console.log('download gevonden', downloaden);

downloaden.forEach(function(downloadknop) {
    downloadknop.addEventListener("click", function() {
       this.innerHTML="Gedownload"; this.style.backgroundImage="url(images/downloaddone.svg)";
        update.innerHTML="1 verhaal gedownloadt";
        update.classList.add('actie');
        update.addEventListener("animationend", function(){
            update.classList.remove('actie');
        })
    })
})
