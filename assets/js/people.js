var peopleController = (function(jQuery) {
  const CLASS_ACTIVE = 'active';
  const CLASS_HIDDEN = 'd-none';
  const CARD_BODY = jQuery('.card');

  var showColaboratorDetails = function(index) {
    let item = jQuery('#colaborator-'+index);

    if (item.hasClass(CLASS_HIDDEN)) {
      item.addClass(CLASS_ACTIVE);
      item.removeClass(CLASS_HIDDEN);
    } else {
      item.removeClass(CLASS_ACTIVE);
      item.addClass(CLASS_HIDDEN);
    }
  }

  var initEvents = function() {
    CARD_BODY.on('mouseover', function() {
      showColaboratorDetails(jQuery(this).data('index'));
    });

    CARD_BODY.on('mouseout', function() {
      showColaboratorDetails(jQuery(this).data('index'));
    });
  };

  return {
      init: initEvents
  };

}(jQuery));

peopleController.init();
