// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        function onInit() {
            
        }

        function onShowAddress(oEvent) {

            this.getView().byId("COL5").setVisible(true);
            
        }

        function onHideAddress(oEvent) {

            this.getView().byId("COL5").setVisible(false);
            
        }


        const Main = Controller.extend("mcc.project2.controller.Main", {});
        Main.prototype.onInit = onInit;
        Main.prototype.onShowAddress = onShowAddress;
        Main.prototype.onHideAddress = onHideAddress;

        return Main


        //return Controller.extend("mcc.project2.controller.Main", {
        //    onInit: function () {

        //    }
        //});
    });
