function setUpGettingStartedGetConnected()
{

}

function highlight(){
    console.log("loaded");
    Array.from(document.getElementsByClassName("tab-category")).forEach(function(item){
        item.classList.remove("tab-focus");
        var highlight = document.getElementById("btnSidebarGettingStartedGetConnected");
        highlight.children[1].classList.add("tab-focus");
    });
}