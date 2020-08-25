window.onload = function() {
    var search = document.querySelector(".search");
    var width = document.documentElement.clientWidth;
    document.addEventListener("scroll", function(){
        if(scrollY>width*0.12){
            search.style.position = "fixed";
            search.style.top = 0;
            search.style.left = 0
        }
        if(scrollY<width*0.12){
            search.style.position = "static";
        }
    })
}
