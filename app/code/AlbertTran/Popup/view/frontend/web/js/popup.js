define(
    [
        'jquery',
        'Magento_Ui/js/modal/modal'
    ],
    function($) {
        "use strict";

        $.widget('AlbertTran.ModalPopup', {
            options: {
                modalForm: '#simple-modal_popup',
                modalButton: '#open-modal_popup'
            },
            _create: function() {
                this.options.modalOption = this.getModalOptions();
                this._bind();
            },

            getModalOptions: function() {
                return {
                    type: 'popup',
                    responsive: true,
                    clickableOverlay: false,
                    title: $.mage.__('PopUp'),
                    modalClass: 'popup',
                    buttons: [{
                        text: $.mage.__('Close'),
                        class: '',
                        click: function () {
                            this.closeModal();
                        }
                    }],
                    autoOpen: true
                };
            },

            _bind: function(){
                var modalOption = this.options.modalOption;
                var modalForm = this.options.modalForm;
            }
        });

        $(document).ready(function() {
            var modalOption = $.AlbertTran.ModalPopup.prototype.getModalOptions();
            var modalForm = $.AlbertTran.ModalPopup.prototype.options.modalForm;
            $(modalForm).modal(modalOption);
        });

        return $.AlbertTran.ModalPopup;
    }
);



