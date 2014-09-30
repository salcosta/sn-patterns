/*
	 ___________________________________________________
	|													|
	|  Fruition App Accelerator - V1.0 - 09/03/13 		|
	|  http://www.fruitionpartners.com 					|
	| 													|
	|  Copyright (c) 2013 Fruition Partners				|
	|  Licensed under the MIT license.           	    |
	|___________________________________________________|

	File: ko_incident

	Description: This is an example of a Knockout.js Model for the Incident
	 			 table

	Usage: 

	To get started copy this example to a new UI Script


*/

// __fileURL = https://fruition18.service-now.com/sys_ui_script.do?sys_id=3bffdd2850bb0d0084e98e6f816b9d85
// __fieldName = script 

function Incident(data){    
	var self = this;
	self.state  = ko.observable( data.state );
	self.number  = ko.observable( data.number );
	self.priority  = ko.observable( data.priority );
	self.sys_id  = ko.observable( data.sys_id );
	self.short_description  = ko.observable( data.short_description );
}


function IncidentList() {
	// Data
	var self = this;
	self.incidents = ko.observableArray([]);
	self.new_incident = new Incident({sys_id : "", number : "", priority : "3", state : 0, short_description : ""})
	self.priority_options = [1,2,3,4,5];


	self.read = function(query){

		if( typeof query != "undefined"){
			query = "&sysparm_query=" + query;
		} else {
			query = "";
		}

		jQuery.getJSON("/incident.do?JSON" + query, function(data) {
	    	var mappedIncidents = jQuery.map(data.records, function(item) { return new Incident(item) });
	    	self.incidents(mappedIncidents);
		});
	}

	self.create = function(){
		data = ko.toJSON( self.new_incident );
		jQuery.post("/incident.do?JSON&sysparm_action=insert", data, function(data) {
			jQuery.map(data.records, function(item) { self.incidents.push( new Incident(item) ) });
		})
	}

	self.update = function(item){
		jQuery.post("/incident.do?JSON&sysparm_action=update&sysparm_query=sys_id=" + item.sys_id() , data, function(data) {
			// No need to update locally since its already there
		})
	}

	self.remove = function(item){
		if( confirm("Really Delete This Record?") ){
			self.incidents.remove(item);
			jQuery.get("/incident.do?JSON&sysparm_action=deleteRecord&sysparm_sys_id=" + item.sys_id() , function(data) {
				console.log(data);
			});
		}
	}

	self.read("priority=1");
}