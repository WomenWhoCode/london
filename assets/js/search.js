var controllerSearch = (function(jQuery) {
    const HIDE_CLASS = "d-none";
    const MENTOR_CARD = "#mentor-card-";
    const Filter = {
        KEYWORDS: "keywords",
        TYPE: "type",
        EXPERIENCE: "exp",
        AREA: "area",
        FOCUS: "focus"
    }

    let filterInputMap = new Map([
        [Filter.KEYWORDS, " input[name='keywords']"],
        [Filter.TYPE, " input[name='type]'"],
        [Filter.EXPERIENCE, " input[name='exp]"],
        [Filter.AREA, " input[name='area]"],
        [Filter.FOCUS, " input[name='focus]]"]
      ]);

    var totalMentors;
    var params;
    
    let showMentorCard = function(index) {
        jQuery(MENTOR_CARD+index).removeClass(HIDE_CLASS);
    };
    
    let hideMentorCard = function(index) {
        jQuery(MENTOR_CARD+index).addClass(HIDE_CLASS);
    };
    
    let paramToFilter = function(key, value) {
        return {
            'key': key,
            'value': value.toLowerCase()
        };
    };

    let applyFilters = function() {
        var keywords = params[Filter.KEYWORDS];
        var type = params[Filter.KEYWORDS];
        var experience = params[Filter.EXPERIENCE];
        var area = params[Filter.AREA];
        var focus = params[Filter.FOCUS];

        var filters = []
        if (isDefined(keywords)) {
            let filter = paramToFilter(Filter.KEYWORDS, keywords);
            filters.push(filter);
        }

        //TODO ADD OTHER FILTERS

        filterMentors(filters);
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

            if (isDefined(inputHidden) && containsFilter(inputHidden, filter.value)) {
                hasFilter++;
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

    let getAllParams = function() {
        var vars = [], param;
        var values = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(let i = 0; i < values.length; i++) {
            param = values[i].split('=');
            vars.push(param[0]);
            vars[param[0]] = param[1];
        }
        return vars;
    };

    let init = function() {
        totalMentors = jQuery(".card").length;
        params = getAllParams();

        if (location.search !== '') {
            applyFilters();
        }
    };

    return {
        init: init
    };

}(jQuery));

controllerSearch.init();
