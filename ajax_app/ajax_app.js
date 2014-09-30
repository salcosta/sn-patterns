/*
	 ___________________________________________________
	|                                                   |
	|  Fruition App Accelerator - V1.0 - 09/03/13 	    |
	|  http://www.fruitionpartners.com                  |
	|                                                   |
	|  Copyright (c) 2013 Fruition Partners             |
	|  Licensed under the MIT license.           	    |
	|___________________________________________________|

	File: ajax_app

	Description: This file is a template for a client side AJAX application

	Usage: 

	To get started copy this template to a new UI Script and Include it in the
	ajax_app UI Page


*/

// __fileURL = https://fruition18.service-now.com/sys_ui_script.do?sys_id=693081dc503b0d0084e98e6f816b9dc1
// __fieldName = script 

var ajax_app;

(function( $ ){

	ajax_app = {

		records_div : $("#records"),

		init : function(){
			$("#get-records").click(function( event ){
				ajax_app.get_records();
				event.preventDefault();
			});

		},

		get_records : function(){
			var ga = new GlideAjax( "AjaxApp" );
			ga.addParam('sysparm_name', "getRecords");

			ga.getXML( function(response){
			  var answer = response.responseXML.documentElement.getAttribute("answer");
			  var response = JSON.parse(answer);
			  ajax_app.render_records( response );
			});
		},

		render_records : function( records ){
			$.map( records, function( record ){
				ajax_app.create_record_row( record );
			});
		},

		create_record_row : function( record ){
			$("<li></li>").html(record.number).appendTo( this.records_div );
		}

	}

    $(document).ready(function(){
		ajax_app.init();
	});	
})(jQuery)