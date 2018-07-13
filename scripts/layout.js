class api {

    constructor() {

    }

    init() {
        // const sidebarItems = document.getElementsByClassName('sidebar-category');
        const sidebarItems = document.querySelectorAll('.sidebar-category');
        console.log(sidebarItems);
        const sideBarItemsArray = Array.from(sidebarItems);
        console.log('Array');
        console.log(sidebarItems);
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

function showStart(){
    // Can't select all by class?
    // var iconList = document.getElementsByClassName("start-hide");

    var item1 = document.getElementById('btnSidebarGettingStartedGetConnected');
    item1.classList.toggle("start-hide");
    var item2 = document.getElementById('btnSidebarGettingStartedGetPreReqs');
    item2.classList.toggle("start-hide");
    var item3 = document.getElementById('btnSidebarGettingStartedGetTheProject');
    item3.classList.toggle("start-hide");
    var item4 = document.getElementById('btnSidebarGettingStartedGitItRight');
    item4.classList.toggle("start-hide");
}

function showFront(){
    var item1 = document.getElementById('btnSidebarFrontEndTemplater');
    item1.classList.toggle("start-hide");
}

function showBack(){
    var item1 = document.getElementById('btnSidebarBackEndPreRequisites');
    item1.classList.toggle("start-hide");
    var item2 = document.getElementById('btnSidebarBackEndYAMLConfiguration');
    item2.classList.toggle("start-hide");
}

