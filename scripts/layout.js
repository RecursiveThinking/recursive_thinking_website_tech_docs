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

// Try replacing with querySelectorAll()

// Adds blue to visited parent category
function tabFocus(element){
    Array.from(document.getElementsByClassName("tab-category")).forEach(function(item){
        item.classList.remove("tab-focus");
        element.children[1].classList.add("tab-focus");
    });
}
// highlights current tab on sidebar if you click through a parent link
function tabVisitFocus(){
    // Needs to be fed an id and select child tab from that ID. 
    
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
