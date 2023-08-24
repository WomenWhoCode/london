var controllerMentors = (function (jQuery) {
    var skillsButton = jQuery(".skills");
    var presentationButton = jQuery(".presentation");
    var menteesButton = jQuery(".mentees");
    var tooltip = jQuery('[data-toggle="tooltip"]');
    var toggleContent = jQuery(".toggle-content");
    const REGISTER_BUTTON = jQuery("#register");

    const CLASS_ACTIVE = "active";
    const CLASS_HIDDEN = "d-none";
    const TOGGLE_CONTENT = "content-overflow";
    const CONTENT = {
        SHOW_MORE: "Show more",
        SHOW_LESS: "Show less",
    };
    const availabilityButton = () => {
        jQuery(".card-presentation").each((index, element) => {
            const availableDate = jQuery(element).data("availability");
            if (jQuery(element).data("availability") !== "") {
               
                const targetDate = new Date(availableDate);
                const currentDate = new Date();
    
                let timeDifference = targetDate.getTime() - currentDate.getTime();

                let daysDifference = timeDifference / (1000 * 3600 * 24);

                // Check if the difference is within 7 days
                if (daysDifference < 7 && daysDifference > 0) {
                   jQuery(element).find(REGISTER_BUTTON).removeClass(CLASS_HIDDEN);
                } else if (daysDifference === 0) {
                    jQuery(element).find(REGISTER_BUTTON).addClass(CLASS_HIDDEN);
                }
            }
        });
    };

    var showPresentation = function (index) {
        jQuery("#bt-p-" + index).addClass(CLASS_ACTIVE);
        jQuery("#bt-s-" + index).removeClass(CLASS_ACTIVE);
        jQuery("#bt-m-" + index).removeClass(CLASS_ACTIVE);

        jQuery("#presentation-" + index).removeClass(CLASS_HIDDEN);
        jQuery("#skills-" + index).addClass(CLASS_HIDDEN);
        jQuery("#mentees-" + index).addClass(CLASS_HIDDEN);

        jQuery(".card-presentation").each(function (index) {
            let cardHeight = jQuery("#card-text-" + index).prop("scrollHeight");
            let clientHeight = jQuery("#card-text-" + index).prop(
                "clientHeight"
            );

            if (cardHeight <= clientHeight) {
                jQuery("#btn-show-more-" + index).addClass(CLASS_HIDDEN);
            }
        });
    };

    var showSkills = function (index) {
        jQuery("#bt-s-" + index).addClass(CLASS_ACTIVE);
        jQuery("#bt-p-" + index).removeClass(CLASS_ACTIVE);
        jQuery("#bt-m-" + index).removeClass(CLASS_ACTIVE);

        jQuery("#presentation-" + index).addClass(CLASS_HIDDEN);
        jQuery("#mentees-" + index).addClass(CLASS_HIDDEN);
        jQuery("#skills-" + index).removeClass(CLASS_HIDDEN);
    };

    var showMenteesData = function (index) {
        jQuery("#bt-m-" + index).addClass(CLASS_ACTIVE);
        jQuery("#bt-p-" + index).removeClass(CLASS_ACTIVE);
        jQuery("#bt-s-" + index).removeClass(CLASS_ACTIVE);

        jQuery("#mentees-" + index).removeClass(CLASS_HIDDEN);
        jQuery("#presentation-" + index).addClass(CLASS_HIDDEN);
        jQuery("#skills-" + index).addClass(CLASS_HIDDEN);
    };

    var init = function () {
        initEvents();
        showPresentation();
        availabilityButton();
        tooltip.tooltip();
    };

    var initEvents = function () {
        skillsButton.click(function () {
            showSkills(jQuery(this).data("index"));
        });

        presentationButton.click(function () {
            showPresentation(jQuery(this).data("index"));
        });

        menteesButton.click(function () {
            showMenteesData(jQuery(this).data("index"));
        });

        toggleContent.click(function () {
            jQuery(this).prev().toggleClass(TOGGLE_CONTENT);

            if (jQuery(this).text() === CONTENT.SHOW_MORE) {
                jQuery(this).text(CONTENT.SHOW_LESS);
            } else {
                jQuery(this).text(CONTENT.SHOW_MORE);
            }
        });
    };

    return {
        init: init,
    };
})(jQuery);

controllerMentors.init();
