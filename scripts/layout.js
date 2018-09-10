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


// collapsible sidebar
let icon = document.getElementById("start");
icon.addEventListener("click", collapse);

function collapse(){
    let children = document.querySelectorAll(".hiddenChild");
    for (let i=0; i<children.length; i++) {
        children[i].classList.toggle("hidden");
    }
}