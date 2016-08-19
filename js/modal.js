/* global window, document, jQuery */
'use strict';

(function( $ ) {

    $( function() {
        var $modalTrigger = $('.js-modal-trigger'),
            $modalClose = $('.js-modal-close'),
            $modalContent = $('.modal');
        
        // This function will need to be refactored. We will turn it into it's own object.
        $modalTrigger.on('click', '.js-product-image', displayModal);
        $modalClose.on('click', displayModal);

        function displayModal() {
            var $dataLarge = $(this).attr('data-large');

            $modalContent.toggleClass('is-zoomed');
            $modalContent.find('.modal-image').prop('src', $dataLarge);
        }
    });

})( jQuery );
