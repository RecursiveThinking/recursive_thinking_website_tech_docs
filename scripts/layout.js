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
    // Try to loop through classList

    var item1 = document.getElementById('btnSidebarGettingStartedGetConnected');
    item1.classList.toggle("start-hide");
    var item2 = document.getElementById('btnSidebarGettingStartedGetPreReqs');
    item2.classList.toggle("start-hide");
    var item3 = document.getElementById('btnSidebarGettingStartedGetTheProject');
    item3.classList.toggle("start-hide");
    var item4 = document.getElementById('btnSidebarGettingStartedGetItRight');
    item4.classList.toggle("start-hide");
    var item5 = document.getElementById('btnSidebarGettingStartedGettingThroughConflicts');
    item5.classList.toggle("start-hide");
    var item6 = document.getElementById('btnSidebarGettingStartedBackEndPreRequisites');
    item6.classList.toggle("start-hide");
    var item7 = document.getElementById('btnSidebarGettingStartedBackEndDeployStack');
    item7.classList.toggle("start-hide");
    var item8 = document.getElementById('start');
    item8.classList.toggle("fa-minus-square");
}

function showFront(){
    var item1 = document.getElementById('btnSidebarFrontEndTemplater');
    item1.classList.toggle("start-hide");
    var item2 = document.getElementById('front');
    item2.classList.toggle("fa-minus-square");
}

function showBack(){
    // var item1 = document.getElementById('btnSidebarBackEndPreRequisites');
    // item1.classList.toggle("start-hide");
    // var item2 = document.getElementById('btnSidebarBackEndDeployBackEndStack');
    // item2.classList.toggle("start-hide");
    var item1 = document.getElementById('btnSidebarBackEndYAMLConfiguration');
    item1.classList.toggle("start-hide");
    var item2 = document.getElementById('back');
    item2.classList.toggle("fa-minus-square");
}

