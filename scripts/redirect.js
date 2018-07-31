(function() {

    function appendPage(pageId) {
        console.log('pageId: ', pageId);
        // \/-- if the logs error here - you need to add a link to layout
        const mainHTML = document.getElementById(pageId).import;
        console.log(mainHTML);
        const template = mainHTML.getElementById(pageId+'HTML').cloneNode(true);
        console.log(template);
        const main = document.getElementById('main-content');
        main.innerHTML = '';
        main.appendChild(template);
        sideHighlight(pageId);
        // Demonstrating that the template has loaded
        console.log(document.getElementById(pageId+'HTML'));
    }
    
    //Highlights tabs based on the relationship between pageId and sidebar article id. Can highlight each sidebar heading on load.  
    function sideHighlight(pageId) {
        Array.from(document.getElementsByClassName("sidebarTitle")).forEach(function(item){
            // removes any highlighted item
            item.classList.remove("tab-focus");
            // corrects for camel casing
            const formatID = pageId[0].toUpperCase() + pageId.slice(1, pageId.length);
            // constructs the article id from the sidebar 
            const articleID = "btnSidebar"+formatID;
            // console.log(articleID);
            // selects parent article
            const parentArticle = document.getElementById(articleID);
            // adds highlighted class to the corresponding sidebar heading
            parentArticle.children[1].classList.add("tab-focus");
        });
    }

    // Appends HTML template, then runs associated setup scripts
    function hashRouting() {
        const location = window.location.hash.replace('#','');
        console.log('LOCATION', location);
        switch(location){
            case 'whoWeAre':
                appendPage('whoWeAre');
                setUpWhoWeAre();
                break;
            case 'gettingStarted':
                appendPage('gettingStarted');
                setUpGettingStarted();
                break;
            case 'gettingStartedGetConnected':
                appendPage('gettingStartedGetConnected')
                setUpGettingStartedGetConnected()
                break;
            case 'gettingStartedGetPreReqs':
                appendPage('gettingStartedGetPreReqs')
                setUpGettingStartedGetPreReqs()
                break;
            case 'gettingStartedGetTheProject':
                appendPage('gettingStartedGetTheProject')
                setUpGettingStartedGetTheProject()
                break;
            case 'gettingStartedGetItRight':
                appendPage('gettingStartedGetItRight')
                setUpGettingStartedGetItRight()
                break;
            case 'gettingStartedGettingThroughConflicts':
                appendPage('gettingStartedGettingThroughConflicts');
                setUpGettingStartedGettingThroughConflicts();
                break;
            case 'gettingStartedBackEndPreRequisites':
                appendPage('gettingStartedBackEndPreRequisites');
                setUpGettingStartedBackEndPreRequisites();
                break;
            case 'gettingStartedBackEndDeployStack':
                appendPage('gettingStartedBackEndDeployStack');
                setUpGettingStartedBackEndDeployStack();
                break;
            case 'frontEnd':
                appendPage('frontEnd');
                setUpFrontEnd();
                break;
            case 'frontEndTemplater':
                appendPage('frontEndTemplater');
                setUpFrontEndTemplater();
                break;
            case 'backEnd':
                appendPage('backEnd');
                setUpBackEnd();
                break;
            case 'backEndYamlConfiguration':
                appendPage('backEndYamlConfiguration');
                setUpBackEndYamlConfiguration();
                break;
            default:
                appendPage('whoWeAre');
                setUpWhoWeAre();
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
