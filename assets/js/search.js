let controllerSearch = (function(jQuery) {
    const HIDE_CLASS = "d-none";
    const MENTOR_CARD = "#mentor-card-";
    const MENTOR_CARD_HIDDEN = ".card.d-none";
    const DEACTIVATED_MENTOR = ".inactive-mentor";
    const Filter = {
        KEYWORDS: "keywords",
        EXPERIENCE: "exp"
    }

    let filterInputMap = new Map([
        [Filter.KEYWORDS, " input[name='mentor-data']"],
        [Filter.EXPERIENCE, " input[name='exp']"],
      ]);

    let params = new URLSearchParams(window.location.search);
    let totalMentors;

    let $keywords = jQuery("#keywords");
    let $area = jQuery("#area");
    let $experience = jQuery("#experience");
    let $focus = jQuery("#focus");
    let $type = jQuery("#type");
    let $form = jQuery(".mentor-filter");
    let $emptyMsg = jQuery("#no-mentors-msg");
    let $descriptionMsg = jQuery(".description");
    let $searchBtn = jQuery("#search");
    let $clearBtn = jQuery("#clear-btn");
    let $toggleFilterBtn = jQuery('#toggle-filters');
    
    let showMentorCard = function(index) {
        jQuery(MENTOR_CARD+index).removeClass(HIDE_CLASS);

        if (!$emptyMsg.hasClass(HIDE_CLASS)) {
            applyMentorsMsg();
        }
    };

    let applyMentorsMsg = function() {
        $emptyMsg.addClass(HIDE_CLASS);
        $descriptionMsg.removeClass(HIDE_CLASS);
    };
    
    let hideMentorCard = function(index) {
        jQuery(MENTOR_CARD+index).addClass(HIDE_CLASS);

        if ((jQuery(MENTOR_CARD_HIDDEN).length + jQuery(DEACTIVATED_MENTOR).length) === totalMentors && $emptyMsg.hasClass(HIDE_CLASS)) {
            $emptyMsg.removeClass(HIDE_CLASS);
            $descriptionMsg.addClass(HIDE_CLASS);
        }
    };
    
    let paramToFilter = function(key, value) {
        return {
            'key': key,
            'value': value.toLowerCase()
        };
    };

    let experienceFilter = function(key, value, min, max) {
        return {
            'key': key,
            'value': value.toLowerCase(),
            'min': min,
            'max': max
        };
    };

    let applyKeywordsParam = function() {
        let keywords = params.get([Filter.KEYWORDS]);
        
        if (keywords) {
            let filter = paramToFilter(Filter.KEYWORDS, keywords);
            $keywords.val(keywords);
            filterMentors([filter]);
        }
    };

    let applyFilters = function() {
        let filters = [];

        if ($keywords.val()) {
            filters.push(paramToFilter(Filter.KEYWORDS, $keywords.val()));
        }

        if ($area.val()) {
            filters.push(paramToFilter(Filter.KEYWORDS, $area.val()));
        }

        if ($focus.val()) {
            filters.push(paramToFilter(Filter.KEYWORDS, $focus.val()));
        }

        if ($type.val()) {
            filters.push(paramToFilter(Filter.KEYWORDS, $type.val()));
        }

        if ($experience.val()) {
            let min = $experience.find(":selected").data("min");
            let max = $experience.find(":selected").data("max");
            filters.push(experienceFilter(Filter.EXPERIENCE, $experience.val(), min, max));
        }

        if (isDefined(filters)) {
            filterMentors(filters);
        } else {
            removeFilters();
        }
    };

    let removeFilters = function(){
        jQuery(MENTOR_CARD_HIDDEN).removeClass(HIDE_CLASS);
        applyMentorsMsg();

        $keywords.val("");
        $area.val("");
        $focus.val("");
        $type.val("");
        $experience.val("");
    };

    let filterMentors = function(filters) {
        if (isDefined(filters)) {
            for (let index = 1; index <= totalMentors; index++) {
                applyMentorFilters(index, filters);
            }
        }
    }

    let applyMentorFilters = function(index, filters) {
        let mentorCardId = MENTOR_CARD+index;
        let mentor = jQuery(mentorCardId);
        if (isDefined(mentor)) {
            if (hasFilters(mentorCardId, filters)) {
                showMentorCard(index);
            } else {
                hideMentorCard(index);
            } 
        }
    };

    let hasFilters = function(mentorCardId, filters) {
        let hasFilter = 0;
        for(let i = 0; i < filters.length; i++) {
            let filter = filters[i];
            // input id example: #mentor-card-9 input[name='bio'] 
            let inputHiddenId = mentorCardId + filterInputMap.get(filter.key);
            let inputHidden = jQuery(inputHiddenId);

            if (filter.key === Filter.EXPERIENCE) {
                let min = filter.min;
                let max = filter.max;
                if (isDefined(inputHidden) &&  parseInt(inputHidden.val()) >= min && parseInt(inputHidden.val()) <= max) {
                    hasFilter++;
                }

            } else {
                //keywords
                if (isDefined(inputHidden) && containsFilter(inputHidden, filter.value)) {
                    hasFilter++;
                }
            }

            
        }

        return hasFilter === filters.length;
    }

    let containsFilter = function(input, value){
        return input.val().indexOf(value) > -1
    };

    let isDefined = function(element) {
        return element.length > 0
    };

    let initEvents = function() {
        $keywords.change(function() {
            applyFilters();
        });

        $area.change(function() {
            applyFilters();
        });

        $focus.change(function() {
            applyFilters();
        });
        
        $experience.change(function() {
            applyFilters();
        });
        
        $type.change(function() {
            applyFilters();
        });

        $form.submit(function(e){
            return false;
        }); 

        $searchBtn.click(function() {
            applyFilters();
        }); 

        $clearBtn.click(function() {
            removeFilters();
        }); 

        $toggleFilterBtn.click(function() { 
            $clearBtn.toggleClass(HIDE_CLASS);
            jQuery('#toggle-container').toggleClass("mt-5");
            jQuery("#filters-container").toggleClass(HIDE_CLASS);
        });
    };

    let init = function() {
        totalMentors = jQuery(".card").length + jQuery(DEACTIVATED_MENTOR).length;
        initEvents();
        applyKeywordsParam();
    };

    return {
        init: init
    };

}(jQuery));

controllerSearch.init();
