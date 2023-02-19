var controllerNavbar = (function (jQuery) {
  var init = function () {
    // Get the first element of the pathname and transform
    var pathSegments = jQuery(location).attr('pathname').split("/");
    //transform to get links with text corresponding to url
    // e.g /london/code-of-conduct => "code of conduct"
    var firstPathSegment = pathSegments[pathSegments.length - 1];
    var stringPathSegment = firstPathSegment.replaceAll("-", " ");

    // Looks up for the link to mark as current link
    var activeLink;
    var activeSubLink;
    if (!stringPathSegment) {
      activeLink = jQuery("a.nav-link:contains('Home')");
    } else {
      // Format the text as provided in data, e.g code of conduct => "Code of conduct"
      var searchLinkText = stringPathSegment[0].toUpperCase() + stringPathSegment.slice(1, stringPathSegment.length);
      activeLink = jQuery("a.nav-link:contains('" + searchLinkText + "')");
      activeSubLink = jQuery("a.nav-link[href='" + firstPathSegment + "']")
    }

    activeLink.addClass("active-nav");
    activeSubLink.addClass("active-nav");
  };

  return {
    init: init
  };

}(jQuery));

controllerNavbar.init();
