// When document is ready create the Model and show
// the View.
$(document).ready(function() {

    // Create InvoiceItemModel instance and set
    // model attributes.
    var invoiceItemModel = new InvoiceItemModel({
        price: 2,
        quantity: 3
    });

    // Create PreviewInvoiceItemView instance.
    var previewInvoiceItemView = new PreviewInvoiceItemView({

        // Pass our model.
        model: invoiceItemModel,

        // Set element where to render HTML.
        el: 'body'
    });

    // Render view manually.
    previewInvoiceItemView.render();
});
