var controllerMentors = (function(jQuery) {
    var skillsButton = jQuery(".skills");
    var presentationButton = jQuery(".presentation");
    var menteesButton = jQuery(".mentees");
    var tooltip = jQuery('[data-toggle="tooltip"]');
    const TOGGLE_BUTTON = jQuery('.toggle-content');

    var classActive = "active";
    var classHide = "d-none";
    const TOGGLE_CONTENT = "content-overflow"; 

    var classActive = "active";
    var classHide = "d-none";

    const CONTENT = {
        'SHOW_MORE': 'Show more',
        'SHOW_LESS': 'Show less'
    }

    var showPresentation = function(index) {
        jQuery("#bt-p-"+index).addClass(classActive);
        jQuery("#bt-s-"+index).removeClass(classActive);
        jQuery("#bt-m-"+index).removeClass(classActive);

        jQuery("#presentation-"+index).removeClass(classHide);
        jQuery("#skills-"+index).addClass(classHide);
        jQuery("#mentees-"+index).addClass(classHide);
    }

    var showSkills = function(index) {
        jQuery("#bt-s-"+index).addClass(classActive);
        jQuery("#bt-p-"+index).removeClass(classActive);
        jQuery("#bt-m-"+index).removeClass(classActive);
        
        jQuery("#presentation-"+index).addClass(classHide);
        jQuery("#mentees-"+index).addClass(classHide);
        jQuery("#skills-"+index).removeClass(classHide);
    }

    var showMenteesData = function(index) {
        jQuery("#bt-m-"+index).addClass(classActive);
        jQuery("#bt-p-"+index).removeClass(classActive);
        jQuery("#bt-s-"+index).removeClass(classActive);

        jQuery("#mentees-"+index).removeClass(classHide);
        jQuery("#presentation-"+index).addClass(classHide);
        jQuery("#skills-"+index).addClass(classHide);
    }
    const toggleBioSection = () => {
        TOGGLE_BUTTON.click(function(){
            $(this).prev().toggleClass(TOGGLE_CONTENT);
            $(this).text(CONTENT.SHOW_MORE ? CONTENT.SHOW_LESS : CONTENT.SHOW_MORE)
        })
    }


    var init = function() {
        initEvents();
        showPresentation();
        tooltip.tooltip();
        toggleBioSection();
    };

    var initEvents = function() {
        skillsButton.click(function() {
            showSkills(jQuery(this).data('index'));
        });

        presentationButton.click(function() {
            showPresentation(jQuery(this).data('index'));
        });

        menteesButton.click(function() {
            showMenteesData(jQuery(this).data('index'));
        });
    };

    return {
        init: init
    };

}(jQuery));

controllerMentors.init();
