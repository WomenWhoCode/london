var peopleController = (function(jQuery) {
  const CLASS_ACTIVE = 'active';
  const CLASS_HIDDEN = 'd-none';

  var $cardBody = jQuery('.card');
  var $cardBodyItem = jQuery('.contributors .card-body');

  var showColaboratorDetails = function(index) {
    var item = jQuery('#colaborator-'+index);

    if (item.hasClass(CLASS_HIDDEN)) {
      item.addClass(CLASS_ACTIVE);
      item.removeClass(CLASS_HIDDEN);
    } else {
      item.removeClass(CLASS_ACTIVE);
      item.addClass(CLASS_HIDDEN);
    }
  }

  var initEvents = function() {
    $cardBody.on('mouseover', function() {
      showColaboratorDetails(jQuery(this).data('index'));
    });

    $cardBody.on('mouseout', function() {
      showColaboratorDetails(jQuery(this).data('index'));
    });
  };

  return {
      init: initEvents
  };

}(jQuery));

peopleController.init();
