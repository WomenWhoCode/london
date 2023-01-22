var controllerNavbar = (function (jQuery) {
  var init = function () {
    // Get the first element of the pathname and transform
    // e.g /london/code-of-conduct => "code of conduct"
    var pathSegments = jQuery(location).attr('pathname').split("/");
    var firstPathSegment = pathSegments[pathSegments.length - 1].replaceAll("-", " ");

    // Looks up for the link to mark as current link
    var activeLink;
    if (!firstPathSegment) {
      activeLink = jQuery("a.nav-link:contains('Home')");
    } else {
      // Format the text as provided in data, e.g code of conduct => "Code of conduct"
      var searchLinkText = firstPathSegment[0].toUpperCase() + firstPathSegment.slice(1, firstPathSegment.length);
      activeLink = jQuery("a.nav-link:contains('" + searchLinkText + "')");
    }

    activeLink.addClass("active-nav");
  };

  return {
    init: init
  };

}(jQuery));

controllerNavbar.init();
