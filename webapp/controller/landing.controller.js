jQuery.sap.require("sap.ui.core.util.Export");

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/crave/contractmanager/controller/headerpannel",
	"sap/ui/export/Spreadsheet",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/m/MessageBox",
	"sap/m/Input",
	"sap/m/Label",
	"sap/ui/core/ListItem",
	"sap/m/MultiComboBox"
], function (Controller, headerpannel, Spreadsheet, JSONModel, Fragment, MessageBox, Input, Label, ListItem, MultiComboBox) {
	"use strict";

	return Controller.extend("com.crave.contractmanager.controller.landing", {

		onInit: function () {

			// new 

			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("landing").attachPatternMatched(this.onObjectMatched, this);
			// var oData = this.getOwnerComponent().getModel().getData();
			// var oModel = new JSONModel(oData);
			//         this.getView().setModel(oModel);
			var oNotificationModel = new JSONModel({
				Notifications: []
			});
			this.getView().setModel(oNotificationModel, "NotificationModel");
			this._originalValues = {};
			sap.load = 0;

		},

		onObjectMatched: function () {

			var NotifCount = this.getView().getModel("NotificationModel").getData().Notifications.filter(obj => obj.seen == false).length;
			this.byId("BellID").setText(NotifCount);

			// Store the original values

			console.log("obj");

			var key = this.getView().byId("role_id").getSelectedKey();

			if (this.getOwnerComponent().getModel("Filter_model") == undefined) {
				var data = this.getView().getModel().getData().Filter_data;

				var oModel = new JSONModel({
					Filter_data: data
				});
				this.getOwnerComponent().setModel(oModel, "Filter_model");
			}

			if (key == 'CA') {

				var data = this.getView().getModel().getData().Filter_data;

				var oModel = new JSONModel({
					Filter_data: data
				});
				this.getOwnerComponent().setModel(oModel, "Filter_model");

				this.getView().byId("tableid").setVisible(true);
				this.getView().byId("tableid_AC").setVisible(false);
				this.getView().byId("tableid_PM").setVisible(false);
				this.getView().byId("tableid_C").setVisible(false);

				if (sap.load == 0) {
					sap.load = 1;
				} else {
					this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].removeAllItems();
					this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].removeAllItems();
					this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].removeAllItems();
				}

			} else if (key == 'AC') {

				var data = this.getView().getModel().getData().Filter_data_AC;

				var oModel = new JSONModel({
					Filter_data: data
				});
				this.getOwnerComponent().setModel(oModel, "Filter_model");

				this.getView().byId("tableid").setVisible(false);
				this.getView().byId("tableid_AC").setVisible(true);
				this.getView().byId("tableid_PM").setVisible(false);
				this.getView().byId("tableid_C").setVisible(false);

				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].removeAllItems();

			} else if (key == 'PM') {

				var data = this.getView().getModel().getData().Filter_data_PM;

				var oModel = new JSONModel({
					Filter_data: data
				});
				this.getOwnerComponent().setModel(oModel, "Filter_model");

				this.getView().byId("tableid").setVisible(false);
				this.getView().byId("tableid_AC").setVisible(false);
				this.getView().byId("tableid_PM").setVisible(true);
				this.getView().byId("tableid_C").setVisible(false);

				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].removeAllItems();

			} else if (key == 'C') {

				var data = this.getView().getModel().getData().Filter_data_C;

				var oModel = new JSONModel({
					Filter_data: data
				});
				this.getOwnerComponent().setModel(oModel, "Filter_model");

				this.getView().byId("tableid").setVisible(false);
				this.getView().byId("tableid_AC").setVisible(false);
				this.getView().byId("tableid_PM").setVisible(false);
				this.getView().byId("tableid_C").setVisible(true);
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].removeAllItems();

			}

		},

		onRole_change: function (oEvent) {

			var key = oEvent.getSource().getSelectedKey();

			if (key == 'CA') {
				this.getView().byId("tableid").setVisible(true);
				this.getView().byId("tableid_AC").setVisible(false);
				this.getView().byId("tableid_PM").setVisible(false);
				this.getView().byId("tableid_C").setVisible(false);

				var data = this.getView().getModel().getData().Filter_data;

				var oModel = new JSONModel({
					Filter_data: data
				});
				this.getOwnerComponent().setModel(oModel, "Filter_model");

				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].removeAllItems();

			} else if (key == 'AC') {
				this.getView().byId("tableid").setVisible(false);
				this.getView().byId("tableid_AC").setVisible(true);
				this.getView().byId("tableid_PM").setVisible(false);
				this.getView().byId("tableid_C").setVisible(false);

				var data = this.getView().getModel().getData().Filter_data_AC;

				var oModel = new JSONModel({
					Filter_data: data
				});
				this.getOwnerComponent().setModel(oModel, "Filter_model");

				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].removeAllItems();

			} else if (key == 'PM') {
				this.getView().byId("tableid").setVisible(false);
				this.getView().byId("tableid_AC").setVisible(false);
				this.getView().byId("tableid_PM").setVisible(true);
				this.getView().byId("tableid_C").setVisible(false);

				var data = this.getView().getModel().getData().Filter_data_PM;

				var oModel = new JSONModel({
					Filter_data: data
				});
				this.getOwnerComponent().setModel(oModel, "Filter_model");

				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].removeAllItems();

			} else if (key == 'C') {
				this.getView().byId("tableid").setVisible(false);
				this.getView().byId("tableid_AC").setVisible(false);
				this.getView().byId("tableid_PM").setVisible(false);
				this.getView().byId("tableid_C").setVisible(true);

				var data = this.getView().getModel().getData().Filter_data_C;

				var oModel = new JSONModel({
					Filter_data: data
				});
				this.getOwnerComponent().setModel(oModel, "Filter_model");

				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].removeAllItems();
				this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].removeAllItems();

			}

		},
		on_Add_filter_btn: function () {

			var that = this;
			var oView = that.getView();
			if (!that.byId("add_filter_dialogId")) {
				Fragment.load({
					id: oView.getId(),
					name: "com.crave.contractmanager.fragment.Add_filter",
					controller: that
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				that.byId("add_filter_dialogId").open();
			}
		},

		onDialogClose_Add_filter: function () {
			var that = this;
			that.byId("add_filter_dialogId").close();
			that.onClear_Filter();
			that.byId("filter_list_id").removeSelections();
		},

		onAddBtn: function () {

			var that = this;
			var oView = that.getView();
			if (!that.byId("dialogId")) {
				Fragment.load({
					id: oView.getId(),
					name: "com.crave.contractmanager.fragment.profile",
					controller: that
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				that.byId("dialogId").open();
			}
		},

		onDialogCloseUpload: function () {
			var that = this;
			that.byId("dialogId").close();
		},

		onSearch_btn: function () {
			debugger;

			var items = 0;
			if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems().length != 0) {

				items += this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems().length;

			}
			if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems().length != 0) {

				items += this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems().length;

			}
			if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems().length != 0) {

				items += this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems().length;
			}
			console.log(items);

			if (this.getView().byId("tableid").getVisible()) {
				// Get the table
				var oTable = this.byId("tableid");
				var oBinding = oTable.getBinding("rows");

				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems().length > 0) {
					var oFilter = [];
					for (let i = 0; i < this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems().length; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				} else {

					var oTable = this.byId("tableid");
					var oBinding = oTable.getBinding("rows");
					oBinding.filter([]);

				}

				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems().length > 0) {
					i = 0;
					for (let i = 0; i < this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems().length; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				}
				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems().length > 0) {
					i = 0;
					for (let i = 0; i < this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems().length; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				}

			} else if (this.getView().byId("tableid_AC").getVisible()) {
				// Get the table
				var oTable = this.byId("tableid_AC");
				var oBinding = oTable.getBinding("rows");

				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems().length > 0) {
					var oFilter = [];
					for (let i = 0; i < 5; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				} else {

					var oTable = this.byId("tableid_AC");
					var oBinding = oTable.getBinding("rows");
					oBinding.filter([]);

				}

				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems() > 0) {
					i = 0;
					for (let i = 0; i < 8; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				}
				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems() > 0) {
					i = 0;
					for (let i = 0; i < 8; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				}

			} else if (this.getView().byId("tableid_PM").getVisible()) {
				// Get the table
				var oTable = this.byId("tableid_PM");
				var oBinding = oTable.getBinding("rows");

				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems().length > 0) {
					var oFilter = [];
					for (let i = 0; i < 5; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				} else {

					var oTable = this.byId("tableid_PM");
					var oBinding = oTable.getBinding("rows");
					oBinding.filter([]);

				}

				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems() > 0) {
					i = 0;
					for (let i = 0; i < 8; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				}
				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems() > 0) {
					i = 0;
					for (let i = 0; i < 8; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				}

			} else if (this.getView().byId("tableid_C").getVisible()) {
				// Get the table
				var oTable = this.byId("tableid_C");
				var oBinding = oTable.getBinding("rows");

				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems().length > 0) {
					var oFilter = [];
					for (let i = 0; i < 5; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				} else {

					var oTable = this.byId("tableid_C");
					var oBinding = oTable.getBinding("rows");
					oBinding.filter([]);

				}

				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems() > 0) {
					i = 0;
					for (let i = 0; i < 8; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				}
				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems() > 0) {
					i = 0;
					for (let i = 0; i < 8; i++) {

						var sel_value = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems()[i].getItems()[1].getSelectedItems();

						for (let j = 0; j < sel_value.length; j++) {
							var name = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems()[i].getItems()[0].getText();
							var value = sel_value[j].getText();
							var field = this.filter_name(name);
							oFilter.push(new sap.ui.model.Filter(field, sap.ui.model.FilterOperator.Contains, value));
						}

					}

					// Apply the filter to the binding
					oBinding.filter([oFilter]);

				}

			}

		},

		filter_name: function (name) {

			switch (name) {

			case "Consultant Name":
				return "consultant_name";

			case "Vendor Name":
				return "vendor_name";

			case "Client Name":
				return "client_name";

			case "Project Name":
				return "project_name";

			case "Project Manager":
				return "project_manager";

			case "Billability Type":
				return "billability_type";

			case "Billability Amt/Rate":
				return "billability_rate";

			case "Assessment Type":
				return "assessment_type";

			case "Requirement":
				return "requirment";

			case "SOW Status":
				return "sow_status";

			case "Onboarding Complete":
				return "onboarding_complete";

			case "Ready to Start":
				return "ready_to_start";

			case "Work Started":
				return "work_started";

			case "Delivery status":
				return "delivery_status";

			case "Estimated Hr":
				return "estimated_hr";

			case "Revised Hrs":
				return "revised_hrs";

			case "Consumed Hrs":
				return "consumed_hrs";

			case "Balanced Hrs":
				return "balanced_hrs";

			case "Timesheet status":
				return "timesheet_status";

			case "Tech.Delivery Approved by (If Req.)":
				return "tech_approval";

			case "Delivery Approval By PM":
				return "delivery_approval_by_pM";

			case "Invoice Creation By":
				return "invoice_creation_by";

			case "Inv. Status":
				return "inv_status";

			case "Payment Status":
				return "payment_status";

			default:

			}
		},

		onClear_Filter: function () {

			this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].removeAllItems();
			this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].removeAllItems();
			this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].removeAllItems();

			var data_length = this.getView().getModel().getData().Filter_data.length;

			for (let i = 0; i < data_length; i++) {

				this.getView().getModel().getData().Filter_data[i].isSelected = false;

			}
			this.getView().getModel().refresh();

			var oTable = this.byId("tableid");
			var oBinding = oTable.getBinding("rows");
			var oFilter = new sap.ui.model.Filter("consultant_name", sap.ui.model.FilterOperator.Contains, "Gunjan Dalvi");
			oBinding.filter([]);
			this.getView().byId("filter_list_id").removeSelections();

		},

		onRequestBtn: function () {

			var that = this;
			var oView = that.getView();
			if (!that.byId("request_dialogId")) {
				Fragment.load({
					id: oView.getId(),
					name: "com.crave.contractmanager.fragment.Request_Form",
					controller: that
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				that.byId("request_dialogId").open();
			}
		},

		onDialogCloserequest: function () {
			var that = this;
			that.byId("request_dialogId").close();
		},

		// onInfoPress: function () {

		// 	var that = this;
		// 	var oView = that.getView();
		// 	if (!that.byId("profileInfoDialog")) {
		// 		Fragment.load({
		// 			id: oView.getId(),
		// 			name: "com.crave.contractmanager.fragment.profileInfo",
		// 			controller: that
		// 		}).then(function (oDialog) {
		// 			oView.addDependent(oDialog);
		// 			oDialog.open();
		// 		});
		// 	} else {
		// 		that.byId("profileInfoDialog").open();
		// 	}

		// },

		onProfileInfoDialogClose: function () {
			var that = this;
			// var oModel = that.getView().getModel("Profile_DetailsModel");
			// oModel.setProperty("/isEditMode", false);
			// var updatedData = oModel.getProperty("/Data");
			// console.log("Updated Data: ", updatedData);

			// var newModel = new JSONModel(updatedData);
			// that.getView().setModel(newModel, "UpdatedProfileModel");
			that.getView().byId("TextVBOX").setVisible(false);
			that.getView().byId("InputVBOX").setVisible(true);
			// that.byId("profileInfoDialog").close();
		},

		// onSOW_addIcon: function () {

		// 	var that = this;
		// 	var oView = that.getView();
		// 	if (!that.byId("SWODetailDialog")) {
		// 		Fragment.load({
		// 			id: oView.getId(),
		// 			name: "com.crave.contractmanager.fragment.SOWDetails",
		// 			controller: that
		// 		}).then(function (oDialog) {
		// 			oView.addDependent(oDialog);
		// 			oDialog.open();
		// 		});
		// 	} else {
		// 		that.byId("SWODetailDialog").open();
		// 	}

		// },

		onSOWDialogClose: function () {
			var that = this;
			that.byId("SWODetailDialog").close();
		},

		onCellClick: function (oEvent) {
			console.log(oEvent);

			if (oEvent.getParameters().columnIndex == 0) {
				var obj = oEvent.mParameters.rowBindingContext.getObject().Profile_Detail[0];
				var oModel = new sap.ui.model.json.JSONModel({
					Data: obj
				});
				this.getOwnerComponent().setModel(oModel, "Profile_DetailsModel");

				var that = this;
				var oView = that.getView();
				if (!that.byId("profileInfoDialog")) {
					Fragment.load({
						id: oView.getId(),
						name: "com.crave.contractmanager.fragment.profileInfo",
						controller: that
					}).then(function (oDialog) {
						oView.addDependent(oDialog);
						oDialog.open();
					});
				} else {
					that.byId("profileInfoDialog").open();
				}

			} else if (oEvent.getParameters().columnIndex == 9) {

				var obj = oEvent.mParameters.rowBindingContext.getObject().SOW_Details[0];
				var oModel = new sap.ui.model.json.JSONModel({
					Data: obj
				});
				this.getOwnerComponent().setModel(oModel, "SOW_DetailsModel");

				var that = this;
				var oView = that.getView();
				if (!that.byId("SWODetailDialog")) {
					Fragment.load({
						id: oView.getId(),
						name: "com.crave.contractmanager.fragment.SOWDetails",
						controller: that
					}).then(function (oDialog) {
						oView.addDependent(oDialog);
						oDialog.open();
					});
				} else {
					that.byId("SWODetailDialog").open();
				}

			}
		},

		onTab_btn: function (oEvent) {
			console.log(oEvent);

			var items = oEvent.getSource().getParent().getItems();
			for (let i = 0; i < items.length; i++) {
				oEvent.getSource().getParent().getItems()[i].removeStyleClass("sapUiTinyMarginBegin Tab_btn Selected_Tab_btn");
				oEvent.getSource().getParent().getItems()[i].addStyleClass("sapUiTinyMarginBegin Tab_btn");
			}
			oEvent.getSource().addStyleClass("sapUiTinyMarginBegin Selected_Tab_btn");

			var text = oEvent.getSource().getText();

			if (text == 'Profile') {
				this.getView().byId("tableid").setVisible(true);
			} else if (text == 'Payment Status') {

				this.getView().byId("tableid").setVisible(false);

			} else if (text == 'Payment Status') {
				this.getView().byId("tableid").setVisible(false);

			} else if (text == 'Delivery') {
				this.getView().byId("tableid").setVisible(false);

			}
		},

		on_select_filter_btn: function (oEvent) {

			var items = this.getView().byId("filter_list_id").getSelectedItems();

			this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].removeAllItems();
			this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].removeAllItems();
			this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].removeAllItems();

			for (let i = 0; i < items.length; i++) {

				if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0].getItems().length < 4) {

					var hbox_item = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[0];
					var col_name = items[i].getTitle();
					var vbox = new sap.m.VBox();
					vbox.addStyleClass("padding_Class sapUiSmallMarginBegin sapUiSmallMarginEnd");

					var label = new sap.m.Label({
						text: col_name
					}).setVisible(false);

					if (col_name == 'Consultant Name') {

						// var oInput = new Input({
						// 	placeholder: "Enter " + col_name,
						// 	showSuggestion: true,
						// 	suggestionItems: {
						// 		path: "/data",
						// 		template: new ListItem({
						// 			text: "{consultant_name}"
						// 		})
						// 	}
						// });

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "consultant_name"
								},
								template: new ListItem({
									text: "{consultant_name}",
									key: "{consultant_name}"
								})
							}
						});

					} else if (col_name == 'Vendor Name') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "vendor_name"
								},
								template: new ListItem({
									text: "{vendor_name}",
									key: "{vendor_name}"
								})
							}
						});

					} else if (col_name == 'Client Name') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "client_name"
								},
								template: new ListItem({
									text: "{client_name}",
									key: "{client_name}"
								})
							}
						});
					} else if (col_name == 'Project Name') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "project_name"
								},
								template: new ListItem({
									text: "{project_name}",
									key: "{project_name}"
								})
							}
						});

					} else if (col_name == 'Project Manager') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "project_manager"
								},
								template: new ListItem({
									text: "{project_manager}",
									key: "{project_manager}"
								})
							}
						});

					} else if (col_name == 'Billability Type') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "billability_type"
								},
								template: new ListItem({
									text: "{billability_type}",
									key: "{billability_type}"
								})
							}
						});

					} else if (col_name == 'Billability Amt/Rate') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "billability_rate"
								},
								template: new ListItem({
									text: "{billability_rate}",
									key: "{billability_rate}"
								})
							}
						});

					} else if (col_name == 'Assessment Type') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "assessment_type"
								},
								template: new ListItem({
									text: "{assessment_type}",
									key: "{assessment_type}"
								})
							}
						});

					} else if (col_name == 'Requirement') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "requirment"
								},
								template: new ListItem({
									text: "{requirment}",
									key: "{requirment}"
								})
							}
						});

					} else if (col_name == 'SOW Status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "sow_status"
								},
								template: new ListItem({
									text: "{sow_status}",
									key: "{sow_status}"
								})
							}
						});

					} else if (col_name == 'Onboarding Complete') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "onboarding_complete"
								},
								template: new ListItem({
									text: "{onboarding_complete}",
									key: "{onboarding_complete}"
								})
							}
						});
					} else if (col_name == 'Ready to Start') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "ready_to_start"
								},
								template: new ListItem({
									text: "{ready_to_start}",
									key: "{ready_to_start}"
								})
							}
						});
					} else if (col_name == 'Work Started') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "work_started"
								},
								template: new ListItem({
									text: "{work_started}",
									key: "{work_started}"
								})
							}
						});
					} else if (col_name == 'Delivery status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "delivery_status"
								},
								template: new ListItem({
									text: "{delivery_status}",
									key: "{delivery_status}"
								})
							}
						});
					} else if (col_name == 'Estimated Hr') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "estimated_hr"
								},
								template: new ListItem({
									text: "{estimated_hr}",
									key: "{estimated_hr}"
								})
							}
						});

					} else if (col_name == 'Revised Hrs') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "revised_hrs"
								},
								template: new ListItem({
									text: "{revised_hrs}",
									key: "{revised_hrs}"
								})
							}
						});

					} else if (col_name == 'Consumed Hrs') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "consumed_hrs"
								},
								template: new ListItem({
									text: "{consumed_hrs}",
									key: "{consumed_hrs}"
								})
							}
						});

					} else if (col_name == 'Balanced Hrs') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "balanced_hrs"
								},
								template: new ListItem({
									text: "{balanced_hrs}",
									key: "{balanced_hrs}"
								})
							}
						});

					} else if (col_name == 'Timesheet status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "timesheet_status"
								},
								template: new ListItem({
									text: "{timesheet_status}",
									key: "{timesheet_status}"
								})
							}
						});

					} else if (col_name == 'Tech Approval') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "tech_approval"
								},
								template: new ListItem({
									text: "{tech_approval}",
									key: "{tech_approval}"
								})
							}
						});

					} else if (col_name == 'Delivery Approval By PM') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "delivery_approval_by_pM"
								},
								template: new ListItem({
									text: "{delivery_approval_by_pM}",
									key: "{delivery_approval_by_pM}"
								})
							}
						});

					} else if (col_name == 'Invoice Creation By') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "invoice_creation_by"
								},
								template: new ListItem({
									text: "{invoice_creation_by}",
									key: "{invoice_creation_by}"
								})
							}
						});

					} else if (col_name == 'Inv. Status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "inv_status"
								},
								template: new ListItem({
									text: "{inv_status}",
									key: "{inv_status}"
								})
							}
						});

					} else if (col_name == 'Payment Status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "payment_status"
								},
								template: new ListItem({
									text: "{payment_status}",
									key: "{payment_status}"
								})
							}
						});

					}

					oInput.addStyleClass("input_lenght_class pannel_input_class");
					vbox.addItem(label);
					vbox.addItem(oInput);
					hbox_item.addItem(vbox);
				} else if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1].getItems().length < 4) {

					var hbox_item = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[1];
					var col_name = items[i].getTitle();
					var vbox = new sap.m.VBox();
					vbox.addStyleClass("padding_Class sapUiSmallMarginBegin sapUiSmallMarginEnd");

					var label = new sap.m.Label({
						text: col_name
					}).setVisible(false);

					if (col_name == 'Consultant Name') {

						// var oInput = new Input({
						// 	placeholder: "Enter " + col_name,
						// 	showSuggestion: true,
						// 	suggestionItems: {
						// 		path: "/data",
						// 		template: new ListItem({
						// 			text: "{consultant_name}"
						// 		})
						// 	}
						// });

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "consultant_name"
								},
								template: new ListItem({
									text: "{consultant_name}",
									key: "{consultant_name}"
								})
							}
						});

					} else if (col_name == 'Vendor Name') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "vendor_name"
								},
								template: new ListItem({
									text: "{vendor_name}",
									key: "{vendor_name}"
								})
							}
						});

					} else if (col_name == 'Client Name') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "client_name"
								},
								template: new ListItem({
									text: "{client_name}",
									key: "{client_name}"
								})
							}
						});
					} else if (col_name == 'Project Name') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "project_name"
								},
								template: new ListItem({
									text: "{project_name}",
									key: "{project_name}"
								})
							}
						});

					} else if (col_name == 'Project Manager') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "project_manager"
								},
								template: new ListItem({
									text: "{project_manager}",
									key: "{project_manager}"
								})
							}
						});

					} else if (col_name == 'Billability Type') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "billability_type"
								},
								template: new ListItem({
									text: "{billability_type}",
									key: "{billability_type}"
								})
							}
						});

					} else if (col_name == 'Billability Amt/Rate') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "billability_rate"
								},
								template: new ListItem({
									text: "{billability_rate}",
									key: "{billability_rate}"
								})
							}
						});

					} else if (col_name == 'Assessment Type') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "assessment_type"
								},
								template: new ListItem({
									text: "{assessment_type}",
									key: "{assessment_type}"
								})
							}
						});

					} else if (col_name == 'Requirement') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "requirment"
								},
								template: new ListItem({
									text: "{requirment}",
									key: "{requirment}"
								})
							}
						});

					} else if (col_name == 'SOW Status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "sow_status"
								},
								template: new ListItem({
									text: "{sow_status}",
									key: "{sow_status}"
								})
							}
						});

					} else if (col_name == 'Onboarding Complete') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "onboarding_complete"
								},
								template: new ListItem({
									text: "{onboarding_complete}",
									key: "{onboarding_complete}"
								})
							}
						});
					} else if (col_name == 'Ready to Start') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "ready_to_start"
								},
								template: new ListItem({
									text: "{ready_to_start}",
									key: "{ready_to_start}"
								})
							}
						});
					} else if (col_name == 'Work Started') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "work_started"
								},
								template: new ListItem({
									text: "{work_started}",
									key: "{work_started}"
								})
							}
						});
					} else if (col_name == 'Delivery status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "delivery_status"
								},
								template: new ListItem({
									text: "{delivery_status}",
									key: "{delivery_status}"
								})
							}
						});
					} else if (col_name == 'Estimated Hr') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "estimated_hr"
								},
								template: new ListItem({
									text: "{estimated_hr}",
									key: "{estimated_hr}"
								})
							}
						});

					} else if (col_name == 'Revised Hrs') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "revised_hrs"
								},
								template: new ListItem({
									text: "{revised_hrs}",
									key: "{revised_hrs}"
								})
							}
						});

					} else if (col_name == 'Consumed Hrs') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "consumed_hrs"
								},
								template: new ListItem({
									text: "{consumed_hrs}",
									key: "{consumed_hrs}"
								})
							}
						});

					} else if (col_name == 'Balanced Hrs') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "balanced_hrs"
								},
								template: new ListItem({
									text: "{balanced_hrs}",
									key: "{balanced_hrs}"
								})
							}
						});

					} else if (col_name == 'Timesheet status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "timesheet_status"
								},
								template: new ListItem({
									text: "{timesheet_status}",
									key: "{timesheet_status}"
								})
							}
						});

					} else if (col_name == 'Tech Approval') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "tech_approval"
								},
								template: new ListItem({
									text: "{tech_approval}",
									key: "{tech_approval}"
								})
							}
						});

					} else if (col_name == 'Delivery Approval By PM') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "delivery_approval_by_pM"
								},
								template: new ListItem({
									text: "{delivery_approval_by_pM}",
									key: "{delivery_approval_by_pM}"
								})
							}
						});

					} else if (col_name == 'Invoice Creation By') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "invoice_creation_by"
								},
								template: new ListItem({
									text: "{invoice_creation_by}",
									key: "{invoice_creation_by}"
								})
							}
						});

					} else if (col_name == 'Inv. Status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "inv_status"
								},
								template: new ListItem({
									text: "{inv_status}",
									key: "{inv_status}"
								})
							}
						});

					} else if (col_name == 'Payment Status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "payment_status"
								},
								template: new ListItem({
									text: "{payment_status}",
									key: "{payment_status}"
								})
							}
						});

					}

					//	oInput.addStyleClass("input_lenght_class pannel_input_class");
					vbox.addItem(label);
					vbox.addItem(oInput);
					hbox_item.addItem(vbox);

				} else if (this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2].getItems().length < 4) {

					var hbox_item = this.getView().byId("dynamic_Fliter_pannel").getContent()[0].getItems()[2];
					var col_name = items[i].getTitle();
					var vbox = new sap.m.VBox();
					vbox.addStyleClass("padding_Class sapUiSmallMarginBegin sapUiSmallMarginEnd");

					var label = new sap.m.Label({
						text: col_name
					}).setVisible(false);

					if (col_name == 'Consultant Name') {

						// var oInput = new Input({
						// 	placeholder: "Enter " + col_name,
						// 	showSuggestion: true,
						// 	suggestionItems: {
						// 		path: "/data",
						// 		template: new ListItem({
						// 			text: "{consultant_name}"
						// 		})
						// 	}
						// });

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "consultant_name"
								},
								template: new ListItem({
									text: "{consultant_name}",
									key: "{consultant_name}"
								})
							}
						});

					} else if (col_name == 'Vendor Name') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "vendor_name"
								},
								template: new ListItem({
									text: "{vendor_name}",
									key: "{vendor_name}"
								})
							}
						});

					} else if (col_name == 'Client Name') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "client_name"
								},
								template: new ListItem({
									text: "{client_name}",
									key: "{client_name}"
								})
							}
						});
					} else if (col_name == 'Project Name') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "project_name"
								},
								template: new ListItem({
									text: "{project_name}",
									key: "{project_name}"
								})
							}
						});

					} else if (col_name == 'Project Manager') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "project_manager"
								},
								template: new ListItem({
									text: "{project_manager}",
									key: "{project_manager}"
								})
							}
						});

					} else if (col_name == 'Billability Type') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "billability_type"
								},
								template: new ListItem({
									text: "{billability_type}",
									key: "{billability_type}"
								})
							}
						});

					} else if (col_name == 'Billability Amt/Rate') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "billability_rate"
								},
								template: new ListItem({
									text: "{billability_rate}",
									key: "{billability_rate}"
								})
							}
						});

					} else if (col_name == 'Assessment Type') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "assessment_type"
								},
								template: new ListItem({
									text: "{assessment_type}",
									key: "{assessment_type}"
								})
							}
						});

					} else if (col_name == 'Requirement') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "requirment"
								},
								template: new ListItem({
									text: "{requirment}",
									key: "{requirment}"
								})
							}
						});

					} else if (col_name == 'SOW Status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "sow_status"
								},
								template: new ListItem({
									text: "{sow_status}",
									key: "{sow_status}"
								})
							}
						});

					} else if (col_name == 'Onboarding Complete') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "onboarding_complete"
								},
								template: new ListItem({
									text: "{onboarding_complete}",
									key: "{onboarding_complete}"
								})
							}
						});
					} else if (col_name == 'Ready to Start') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "ready_to_start"
								},
								template: new ListItem({
									text: "{ready_to_start}",
									key: "{ready_to_start}"
								})
							}
						});
					} else if (col_name == 'Work Started') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "work_started"
								},
								template: new ListItem({
									text: "{work_started}",
									key: "{work_started}"
								})
							}
						});
					} else if (col_name == 'Delivery status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "delivery_status"
								},
								template: new ListItem({
									text: "{delivery_status}",
									key: "{delivery_status}"
								})
							}
						});
					} else if (col_name == 'Estimated Hr') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "estimated_hr"
								},
								template: new ListItem({
									text: "{estimated_hr}",
									key: "{estimated_hr}"
								})
							}
						});

					} else if (col_name == 'Revised Hrs') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "revised_hrs"
								},
								template: new ListItem({
									text: "{revised_hrs}",
									key: "{revised_hrs}"
								})
							}
						});

					} else if (col_name == 'Consumed Hrs') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "consumed_hrs"
								},
								template: new ListItem({
									text: "{consumed_hrs}",
									key: "{consumed_hrs}"
								})
							}
						});

					} else if (col_name == 'Balanced Hrs') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "balanced_hrs"
								},
								template: new ListItem({
									text: "{balanced_hrs}",
									key: "{balanced_hrs}"
								})
							}
						});

					} else if (col_name == 'Timesheet status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "timesheet_status"
								},
								template: new ListItem({
									text: "{timesheet_status}",
									key: "{timesheet_status}"
								})
							}
						});

					} else if (col_name == 'Tech Approval') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "tech_approval"
								},
								template: new ListItem({
									text: "{tech_approval}",
									key: "{tech_approval}"
								})
							}
						});

					} else if (col_name == 'Delivery Approval By PM') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "delivery_approval_by_pM"
								},
								template: new ListItem({
									text: "{delivery_approval_by_pM}",
									key: "{delivery_approval_by_pM}"
								})
							}
						});

					} else if (col_name == 'Invoice Creation By') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "invoice_creation_by"
								},
								template: new ListItem({
									text: "{invoice_creation_by}",
									key: "{invoice_creation_by}"
								})
							}
						});

					} else if (col_name == 'Inv. Status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "inv_status"
								},
								template: new ListItem({
									text: "{inv_status}",
									key: "{inv_status}"
								})
							}
						});

					} else if (col_name == 'Payment Status') {

						var oInput = new MultiComboBox({
							width: "200px",
							placeholder: "Enter " + col_name,
							items: {
								path: "/data",
								sorter: {
									path: "payment_status"
								},
								template: new ListItem({
									text: "{payment_status}",
									key: "{payment_status}"
								})
							}
						});

					}

					//	oInput.addStyleClass("input_lenght_class pannel_input_class");
					vbox.addItem(label);
					vbox.addItem(oInput);
					hbox_item.addItem(vbox);

				} else {
					new MessageBox.show("Can not add more than 12 filter.");
					break;
				}

			}

			//	this.getView().byId("filter_list_id").removeSelections();

			var that = this;
			that.byId("add_filter_dialogId").close();
		},

		onExport_Excel: function (oEvent) {
			debugger;

			if (this.byId("tableid").getVisible()) {

				var oTable = this.getView().byId("tableid");
				var tableName = "Contract Admin.xlsx";
				var aCols = [];
				aCols.push({
					'label': 'Consultant Name',
					'property': 'consultant_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Vendor Name',
					'property': 'vendor_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Client Name',
					'property': 'client_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Project Name',
					'property': 'project_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Project Manager',
					'property': 'project_manager',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Billability Type',
					'property': 'billability_type',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Billability Amt/Rate',
					'property': 'billability_rate',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Assessment Type',
					'property': 'assessment_type',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Requirement',
					'property': 'requirment',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'SOW Status',
					'property': 'sow_status',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Onboarding Complete',
					'property': 'onboarding_complete',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Ready to Start',
					'property': 'ready_to_start',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Work Started',
					'property': 'work_started',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Delivery status',
					'property': 'delivery_status',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Estimated Hrs',
					'property': 'estimated_hr',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Revised Hrs',
					'property': 'revised_hrs',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Consumed Hrs',
					'property': 'consumed_hrs',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Balanced Hrs',
					'property': 'balanced_hrs',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Timesheet status',
					'property': 'timesheet_status',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Tech.Delivery Approved by (If Req.)',
					'property': 'tech_approval',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Delivery Approval By PM',
					'property': 'delivery_approval_by_pM',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Invoice Creation By',
					'property': 'invoice_creation_by',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Inv. Status',
					'property': 'inv_status',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Payment Status',
					'property': 'payment_status',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Remarks',
					'property': 'Remarks',
					'type': 'sap.ui.export.EdmType.String'
				});

				var oRowBinding = oTable.getBinding('rows');
				var oSettings = {
					workbook: {
						'columns': aCols,
						'hierarchyLevel': 'Level'
					},
					dataSource: oRowBinding.oList,
					fileName: tableName,
					worker: false
				};
				var oSheet = new Spreadsheet(oSettings);
				oSheet.build();

			} else if (this.byId("tableid_AC").getVisible()) {

				var oTable = this.getView().byId("tableid");
				var tableName = "Contract Accounts.xlsx";
				var aCols = [];
				aCols.push({
					'label': 'Consultant Name',
					'property': 'consultant_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'Vendor Name',
				// 	'property': 'vendor_name',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Client Name',
					'property': 'client_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Project Name',
					'property': 'project_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Project Manager',
					'property': 'project_manager',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Billability Type',
					'property': 'billability_type',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Billability Amt/Rate',
					'property': 'billability_rate',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'Assessment Type',
				// 	'property': 'assessment_type',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Requirement',
					'property': 'requirment',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'SOW Status',
				// 	'property': 'sow_status',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Onboarding Complete',
				// 	'property': 'onboarding_complete',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Ready to Start',
				// 	'property': 'ready_to_start',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Work Started',
				// 	'property': 'work_started',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Delivery status',
				// 	'property': 'delivery_status',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Estimated Hrs',
				// 	'property': 'estimated_hr',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Revised Hrs',
				// 	'property': 'revised_hrs',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Consumed Hrs',
					'property': 'consumed_hrs',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Balanced Hrs',
					'property': 'balanced_hrs',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Timesheet status',
					'property': 'timesheet_status',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'Tech.Delivery Approved by (If Req.)',
				// 	'property': 'tech_approval',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Delivery Approval By PM',
				// 	'property': 'delivery_approval_by_pM',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Invoice Creation By',
					'property': 'invoice_creation_by',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Inv. Status',
					'property': 'inv_status',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Payment Status',
					'property': 'payment_status',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Remarks',
					'property': 'Remarks',
					'type': 'sap.ui.export.EdmType.String'
				});

				var oRowBinding = oTable.getBinding('rows');
				var oSettings = {
					workbook: {
						'columns': aCols,
						'hierarchyLevel': 'Level'
					},
					dataSource: oRowBinding.oList,
					fileName: tableName,
					worker: false
				};
				var oSheet = new Spreadsheet(oSettings);
				oSheet.build();

			} else if (this.byId("tableid_PM").getVisible()) {

				var oTable = this.getView().byId("tableid");
				var tableName = "Contract PM.xlsx";
				var aCols = [];
				aCols.push({
					'label': 'Consultant Name',
					'property': 'consultant_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Vendor Name',
					'property': 'vendor_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Client Name',
					'property': 'client_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Project Name',
					'property': 'project_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Project Manager',
					'property': 'project_manager',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'Billability Type',
				// 	'property': 'billability_type',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Billability Amt/Rate',
				// 	'property': 'billability_rate',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Assessment Type',
					'property': 'assessment_type',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Requirement',
					'property': 'requirment',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'SOW Status',
				// 	'property': 'sow_status',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Onboarding Complete',
				// 	'property': 'onboarding_complete',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Ready to Start',
				// 	'property': 'ready_to_start',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Work Started',
					'property': 'work_started',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Delivery status',
					'property': 'delivery_status',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Estimated Hrs',
					'property': 'estimated_hr',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Revised Hrs',
					'property': 'revised_hrs',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Consumed Hrs',
					'property': 'consumed_hrs',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Balanced Hrs',
					'property': 'balanced_hrs',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Timesheet status',
					'property': 'timesheet_status',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Tech.Delivery Approved by (If Req.)',
					'property': 'tech_approval',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Delivery Approval By PM',
					'property': 'delivery_approval_by_pM',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'Invoice Creation By',
				// 	'property': 'invoice_creation_by',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Inv. Status',
				// 	'property': 'inv_status',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Payment Status',
				// 	'property': 'payment_status',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Remarks',
					'property': 'Remarks',
					'type': 'sap.ui.export.EdmType.String'
				});

				var oRowBinding = oTable.getBinding('rows');
				var oSettings = {
					workbook: {
						'columns': aCols,
						'hierarchyLevel': 'Level'
					},
					dataSource: oRowBinding.oList,
					fileName: tableName,
					worker: false
				};
				var oSheet = new Spreadsheet(oSettings);
				oSheet.build();

			} else if (this.byId("tableid_C").getVisible()) {

				var oTable = this.getView().byId("tableid");
				var tableName = "Contractor.xlsx";
				var aCols = [];
				aCols.push({
					'label': 'Consultant Name',
					'property': 'consultant_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'Vendor Name',
				// 	'property': 'vendor_name',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Client Name',
				// 	'property': 'client_name',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Project Name',
					'property': 'project_name',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Project Manager',
					'property': 'project_manager',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'Billability Type',
				// 	'property': 'billability_type',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Billability Amt/Rate',
				// 	'property': 'billability_rate',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Assessment Type',
				// 	'property': 'assessment_type',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Requirement',
					'property': 'requirment',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'SOW Status',
				// 	'property': 'sow_status',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Onboarding Complete',
				// 	'property': 'onboarding_complete',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Ready to Start',
					'property': 'ready_to_start',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'Work Started',
				// 	'property': 'work_started',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Delivery status',
				// 	'property': 'delivery_status',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Estimated Hrs',
				// 	'property': 'estimated_hr',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Revised Hrs',
				// 	'property': 'revised_hrs',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Consumed Hrs',
					'property': 'consumed_hrs',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Balanced Hrs',
					'property': 'balanced_hrs',
					'type': 'sap.ui.export.EdmType.String'
				});
				aCols.push({
					'label': 'Timesheet status',
					'property': 'timesheet_status',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'Tech.Delivery Approved by (If Req.)',
				// 	'property': 'tech_approval',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Delivery Approval By PM',
				// 	'property': 'delivery_approval_by_pM',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Invoice Creation By',
					'property': 'invoice_creation_by',
					'type': 'sap.ui.export.EdmType.String'
				});
				// aCols.push({
				// 	'label': 'Inv. Status',
				// 	'property': 'inv_status',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				// aCols.push({
				// 	'label': 'Payment Status',
				// 	'property': 'payment_status',
				// 	'type': 'sap.ui.export.EdmType.String'
				// });
				aCols.push({
					'label': 'Remarks',
					'property': 'Remarks',
					'type': 'sap.ui.export.EdmType.String'
				});

				var oRowBinding = oTable.getBinding('rows');
				var oSettings = {
					workbook: {
						'columns': aCols,
						'hierarchyLevel': 'Level'
					},
					dataSource: oRowBinding.oList,
					fileName: tableName,
					worker: false
				};
				var oSheet = new Spreadsheet(oSettings);
				oSheet.build();

			}

		},

		onBellPress: function (oEvent) {

			if (!this._oPopover1) {
				this._oPopover1 = sap.ui.xmlfragment("com.crave.contractmanager.fragment.NotifyPopover", this);
				this.getView().addDependent(this._oPopover1);
			}
			this._oPopover1.openBy(oEvent.getSource());
		},

		onCheckBox: function (oEvent) {

			console.log("msg");
		},

		onInputChange: function (oEvent) {
			var oInput = oEvent.getSource();
			var sPath = oEvent.getSource().mBindingInfos.value.parts[0].path;
			this.sValue = oInput.getValue();
			var labelMap = {
				"InputDomainExp": this.getView().byId("DomainExp").getValue(),
				"InputSkills": this.getView().byId("Skills").getValue(),
				"InputLocation": this.getView().byId("location").getValue(),
				"InputContact": this.getView().byId("Contact").getValue(),
				"InputEmail": this.getView().byId("Email").getValue(),
			};

			this.sLabel = oInput.getId().split('--')[1];
			// Get the original value if it hasn't been stored yet
			if (!this._originalValues[sPath]) {
				var sOriginalValue = oInput.getBinding("value").getValue();
				this._originalValues[sPath] = sOriginalValue;
			}

			// Store the change information
			this.oChange = {
				field: this.sLabel,
				oldValue: this._originalValues[sPath],
				newValue: this.sValue,
				seen: false
			};

		},
		onProfileInfoDialogEdit: function () {
			// var oModel = this.getView().getModel("Profile_DetailsModel");
			// oModel.setProperty("/isEditMode", true);
			var that = this;
			that.getView().byId("TextVBOX").setVisible(true);
			that.getView().byId("InputVBOX").setVisible(false);

			// Get the notification model
			var oNotificationModel = that.getView().getModel("NotificationModel");
			var aNotifications = oNotificationModel.getProperty("/Notifications");

			// Check if the field has already been modified, update the existing change if it has
			var oExistingChange = aNotifications.find(change => change.field === this.sLabel);
			if (oExistingChange) {
				oExistingChange.newValue = this.sValue;
			} else {
				aNotifications.push(this.oChange);
				var NotifCount = this.getView().getModel("NotificationModel").getData().Notifications.filter(obj => obj.seen == false).length;
				this.byId("BellID").setText(NotifCount);
			}

			oNotificationModel.setProperty("/Notifications", aNotifications);
			that.byId("profileInfoDialog").close();

		},
		onNotifyItemPress: function (oEvent) {
			debugger;
			oEvent.getSource().getBindingContext("NotificationModel").getObject().seen = true;
			var NotifCount = this.getView().getModel("NotificationModel").getData().Notifications.filter(obj => obj.seen == false).length;
			this.byId("BellID").setText(NotifCount);
			this.getView().getModel("NotificationModel").refresh();
		},

		formatSeen: function (bSeen) {
			return !bSeen;
		},

	});

});