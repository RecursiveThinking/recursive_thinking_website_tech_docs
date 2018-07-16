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

        // Demonstrating that the template has loaded
        console.log(document.getElementById(pageId+'HTML'));
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
            case 'gettingStartedGitItRight':
                appendPage('gettingStartedGitItRight')
                setUpGettingStartedGetItRight()
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
            case 'backEndPreRequisites':
                // console.log('bePR');
                appendPage('backEndPreRequisites');
                setUpBackEndPreRequisites();
                break;
            case 'backEndDeployBackEndStack':
                appendPage('backEndDeployBackEndStack');
                setUpBackEndDeployBackEndStack();
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
