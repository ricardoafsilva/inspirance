var InvoiceItemModel = Backbone.Model.extend({

    // Set default values.
    defaults: {
        price: 0,
        quantity: 0
    },

    // Calculate amount.
    calculateAmount: function() {
        return this.get('price') * this.get('quantity');
    }
});

var invoiceItemModel = new InvoiceItemModel({
    price: 2,
    quantity: 3
});
