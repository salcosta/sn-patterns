/*
	 ___________________________________________________
	|													|
	|  Fruition App Accelerator - V1.0 - 09/03/13 		|
	|  http://www.fruitionpartners.com 					|
	| 													|
	|  Copyright (c) 2013 Fruition Partners				|
	|  Licensed under the MIT license.           	    |
	|___________________________________________________|

	File: PatternApi

	Description: This file is a template for exposing business functions directly through
				 AJAX/GlideAjax or a processor

	Usage: 

	To get started copy this template to a new Script Include


*/

// __fileURL = https://fruition18.service-now.com/sys_script_include.do?sys_id=2df6289c503b0d0084e98e6f816b9d3c
// __fieldName = script
 
gs.include("JSON");

var PatternApi = Class.create();

PatternApi.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	// DO NOT INCLUDE AN INITIALIZE FUNCTION

	json : new JSON(),  // Create a local JSON object

	getBasicFunction : function(){
		gs.log("PatternApi: getBasicFunction");

		// Do some work...

		return true;
	},

	_getObjectPrivate : function (parameter) {
		gs.log("PatternApi: getObjectPrivate");

		// Do some work...

		var someObject = {};
		return someObject;
	},

	getObject : function(){
		gs.log("PatternApi: getObject");
		// Get a Parameter
		var parameter = this.getParameter('parameter').toString();
		var returnObject = {};

		// Do some work...

		return this.json.encode( returnObject );  // Return the object as a JSON String
	},

	testFunction : function(){
		gs.log("PatternApi: testFunction");
		// Get a Parameter
		var parameter = this.getParameter('parameter').toString();
		var returnObject = { "parm" : parameter };

		// Do some work...

		return this.json.encode( returnObject );  // Return the object as a JSON String
	},

	type : "PatternApi"

});