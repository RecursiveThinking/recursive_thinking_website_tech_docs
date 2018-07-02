(function() {

    function appendPage(pageId) {
        const dashboardHTML = document.getElementById(pageId).import;
        const template = dashboardHTML.getElementById(pageId+'HTML').cloneNode(true);
        const main = document.getElementById('main-content');
        main.innerHTML = '';
        main.appendChild(template);

        // Demonstrating that the template has loaded
        console.log(document.getElementById(pageId+'HTML'));
    }

    // Appends HTML template, then runs associated setup scripts
    function hashRouting() {
        const location = window.location.hash.replace('#','');
        switch(location){
            case 'whoWeAre':
                appendPage('whoWeAre');
                setUpWhoWeAre();
                break;
            case 'gettingStarted':
                appendPage('gettingStarted');
                setUpGettingStarted();
                break;
            case 'frontEnd':
                appendPage('frontEnd');
                setUpFrontEnd();
                break;
            case 'backEnd':
                appendPage('backEnd');
                setUpBackEnd();
                break;
            default:
                break;
        }
    }

    window.addEventListener('hashchange', function(e) {
        e.preventDefault();
        hashRouting();
    });
    window.addEventListener('load', function(e) {
        e.preventDefault();
        hashRouting();
    });

})();
