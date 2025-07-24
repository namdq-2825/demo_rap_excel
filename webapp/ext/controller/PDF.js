sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        exportPDF: function(oEvent) {
            // const oSalesOrderData = this.getView().getBindingContext().getObject();

            // var element = document.getElementById('projectso::SOImportedList--fe::ListReport-content');
            // window.html2pdf(element);

            const table = sap.ui.getCore().byId("projectso::SOImportedList--fe::table::SOImported::LineItem-innerTable")

            if (!table) {
                return MessageToast.show("Table not found");;
            }

            const selectedContexts = table.getSelectedContexts();
            const selectedRowsData = selectedContexts.map(context => context.getObject());

            
        }
    };
});
