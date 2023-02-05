var controllerSearch = (function(jQuery) {
    const HIDE_CLASS = "d-none";
    const MENTOR_CARD = "#mentor-card-";
    const MENTOR_CARD_HIDDEN = ".card.d-none";
    const TYPE_CHECKED = "input[name='mentorship-type']:checked";
    const Filter = {
        KEYWORDS: "keywords",
        EXPERIENCE: "exp"
    }

    let filterInputMap = new Map([
        [Filter.KEYWORDS, " input[name='mentor-data']"],
        [Filter.EXPERIENCE, " input[name='exp']"],
      ]);

    let params = new URLSearchParams(window.location.search);
    var totalMentors;

    let $keywords = jQuery("#keywords");
    let $area = jQuery("#area");
    let $experience = jQuery("#experience");
    let $focus = jQuery("#focus");
    let $type = jQuery("input[name='mentorship-type']");
    let $form = jQuery(".mentor-filter");
    let $emptyMsg = jQuery("#no-mentors-msg");
    let $descriptionMsg = jQuery(".description");
    
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

        if (jQuery(MENTOR_CARD_HIDDEN).length === totalMentors && $emptyMsg.hasClass(HIDE_CLASS)) {
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

    let applyKeywordsParam = function() {
        var keywords = params.get([Filter.KEYWORDS]);
        
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

        let $typeSelected = jQuery(TYPE_CHECKED);
        if ($typeSelected.val()) {
            filters.push(paramToFilter(Filter.KEYWORDS, $typeSelected.val()));
        }

        if ($experience.val()) {
            filters.push(paramToFilter(Filter.EXPERIENCE, $experience.val()));
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
    };

    let filterMentors = function(filters) {
        if (isDefined(filters)) {
            for (let index = 0; index <= totalMentors; index++) {
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
        var hasFilter = 0;
        for(let i = 0; i < filters.length; i++) {
            let filter = filters[i];
            // input id example: #mentor-card-9 input[name='bio'] 
            let inputHiddenId = mentorCardId + filterInputMap.get(filter.key);
            let inputHidden = jQuery(inputHiddenId);

            if (filter.key === Filter.EXPERIENCE) {
                if (isDefined(inputHidden) &&  parseInt(inputHidden.val()) >= parseInt(filter.value)) {
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

    var initEvents = function() {
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
    };

    let init = function() {
        totalMentors = jQuery(".card").length;
        initEvents();
        applyKeywordsParam();
    };

    return {
        init: init
    };

}(jQuery));

controllerSearch.init();
