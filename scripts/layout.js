class api {

    constructor() {

    }

    init() {
        const sidebarItems = document.getElementsByClassName('sidebar-item');
        const sideBarItemsArray = Array.from(sidebarItems);
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
