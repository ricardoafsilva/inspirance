var PreviewInvoiceItemView = Backbone.View.extend({

    // Define template using templating engine from
    // Underscore.js.
    template: _.template('\
      Price: <%= price %>.\
      Quantity: <%= quantity %>.\
      Amount: <%= amount %>.\
    '),

    // Render view.
    render: function() {

        // Generate HTML by rendering the template.
        var html = this.template({

            // Pass model properties to the template.
            price: this.model.get('price'),
            quantity: this.model.get('quantity'),

            // Calculate amount and pass it to the template.
            amount: this.model.calculateAmount()
        });

        // Set html for the view element using jQuery.
        $(this.el).html(html);
    }
});

var previewInvoiceItemView = new PreviewInvoiceItemView({
    model: invoiceItemModel,
    el: 'body'
});
