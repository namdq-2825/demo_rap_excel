sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        importFormExcel: async function(oEvent) {
            // MessageToast.show("Custom handler invoked.");
            this.editFlow.getView().setBusyIndicatorDelay(0);
            this.editFlow.getView().setBusy(true);
            this.spreadsheetUpload = await this.editFlow.getView()
                .getController()
                .getAppComponent()
                .createComponent({
                usage: "spreadsheetImporter",
                async: true,
                componentData: {
                    context: this,
                    tableId: "projectso::SOImportedList--fe::table::SOImported::LineItem-innerTable",
                    excludeColumns: ['so_id']
                },
                });
            this.spreadsheetUpload.openSpreadsheetUploadDialog();
            this.editFlow.getView().setBusy(false);
        },
    };
});
