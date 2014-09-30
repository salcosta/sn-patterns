/*
	 ___________________________________________________
	|                                                   |
	|  Fruition App Accelerator - V1.0 - 09/03/13 	    |
	|  http://www.fruitionpartners.com                  |
	|                                                   |
	|  Copyright (c) 2013 Fruition Partners             |
	|  Licensed under the MIT license.           	    |
	|___________________________________________________|

	File: AjaxApp

	Description: This file is a template for the Script Include portion of an AJAX
				 Application

	Usage: 

	To get started copy this template to a new Script Include and set Client Callable to true


*/

// __fileURL = https://fruition18.service-now.com/sys_script_include.do?sys_id=130f7810507b0d0084e98e6f816b9d5f
// __fieldName = script
 
gs.include("JSON");

var AjaxApp = Class.create();

AjaxApp.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	// DO NOT INCLUDE AN INITIALIZE FUNCTION

	json : new JSON(),  // Create a local JSON object

	_getRecords : function(){
		gs.log("AjaxApp: _getRecords");

		var incidentRec = new GlideRecord("incident");
		incidentRec.setLimit(10);
		incidentRec.addQuery("active=true");
		incidentRec.query();

		var returnObject = [];

		while( incidentRec.next() ){
			var tmpObj = {};
			tmpObj.number = incidentRec.number.toString();
			tmpObj.short_description = incidentRec.short_description.toString();

			returnObject.push( tmpObj );
		}
		// Do some work...

		return this.json.encode( returnObject );
	},

	getRecords : function (parameter) {
		gs.log("AjaxApp: getRecords");

		return this._getRecords();
	},

	type : "AjaxApp"

});