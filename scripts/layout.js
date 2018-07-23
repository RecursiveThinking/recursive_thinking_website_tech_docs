class api {

    constructor() {

    }

    init() {
        // const sidebarItems = document.getElementsByClassName('sidebar-category');
        const sidebarItems = document.querySelectorAll('.sidebar-category');
        // console.log(sidebarItems);
        const sideBarItemsArray = Array.from(sidebarItems);
        // console.log('Array');
        // console.log(sidebarItems);
        sideBarItemsArray.forEach((item) => {
            item.addEventListener('click', () => {
                const pageId = item.getAttribute('data-pageId');
                window.location.hash = pageId;
                window.scrollTo(0, 0);
            });
        });
    }

}
const recursiveApi = new api();
recursiveApi.init();

// Should refactor so one function handles all cases. I'm not sure how to refer to the clicked on element.
function topFocus1(){
    Array.from(document.getElementsByClassName("top-category")).forEach(function(item){
        item.classList.remove("top-focus");
        var item1 = document.getElementById("about-focus");
        item1.classList.add("top-focus");
    });
}

function topFocus2(){
    Array.from(document.getElementsByClassName("top-category")).forEach(function(item){
        item.classList.remove("top-focus");
        var item1 = document.getElementById("start-focus");
        item1.classList.add("top-focus");
    });
}

function topFocus3(){
    Array.from(document.getElementsByClassName("top-category")).forEach(function(item){
        item.classList.remove("top-focus");
        var item1 = document.getElementById("front-focus");
        item1.classList.add("top-focus");
    });
}

function topFocus4(){
    Array.from(document.getElementsByClassName("top-category")).forEach(function(item){
        item.classList.remove("top-focus");
        var item1 = document.getElementById("back-focus");
        item1.classList.add("top-focus");
    });
}

function showStart(){
    // toggles display property for sub headings on nav bar
    Array.from(document.getElementsByClassName("start-child")).forEach(function(item){
        item.classList.toggle("start-hide");
    });
    // toggles icon
    var startPlus = document.getElementById('start');
    startPlus.classList.toggle("fa-minus-square");
}

function showFront(){
    var item1 = document.getElementById('btnSidebarFrontEndTemplater');
    item1.classList.toggle("front-hide");
    var item2 = document.getElementById('front');
    item2.classList.toggle("fa-minus-square");
}

function showBack(){
    var item1 = document.getElementById('btnSidebarBackEndYAMLConfiguration');
    item1.classList.toggle("back-hide");
    var item2 = document.getElementById('back');
    item2.classList.toggle("fa-minus-square");
}

