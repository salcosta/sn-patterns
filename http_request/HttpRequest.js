/*
     ___________________________________________________
    |                                                   |
    |  Fruition App Accelerator - V1.0 - 09/03/13       |
    |  http://www.fruitionpartners.com                  |
    |                                                   |
    |  Copyright (c) 2013 Fruition Partners             |
    |  Licensed under the MIT license.                  |
    |___________________________________________________|

    File: AjaxApp

    Description: This file is a template for an HTTP Request Script include

    Usage: 

    To get started copy this template to a new Script Include and set Client Callable to true


*/

// __fileURL = https://fruition18.service-now.com/sys_script_include.do?sys_id=22642d6850bb0d0084e98e6f816b9d61
// __fieldName = script 

gs.include("JSON");

var HttpRequest = Class.create();

HttpRequest.prototype = {
    // Connection Information
    endpoint: 'http://www.website.com',

    // HTTP Properties
    httpClient: new Packages.com.glide.communications.HTTPClient(),
    postMethod: Packages.org.apache.commons.httpclient.methods.PostMethod,
    getMethod: Packages.org.apache.commons.httpclient.methods.GetMethod,

    // Helper Properties
    json: new JSON(),

    _makeRequest: function( method ) {
        try{
            this.returnCode = this.httpClient.executeMethod( method );

            if( this.returnCode == "200"){
                this.document_data = this.json.decode( method.getResponseBodyAsString() + '');
            } else {
                throw "An HTTP Error Occured: " + this.returnCode;
            }

        } catch(ex) {
            gs.log(ex);
        } finally {
            delete method ;
        }
    },

    _createPostMethod : function( path ){
        var postMethod = new this.postMethod( this.endpoint );
        postMethod.setRequestHeader("Content-Type", "text/raw; charset=UTF-8");
        postMethod.setRequestHeader("Accept", "application/json");
        postMethod.setRequestBody( this.document_text );
        
        return postMethod;
    },

    _createGetMethod : function(path, params){
        var getMethod = new this.getMethod( this.endpoint );
        getMethod.setRequestHeader("Accept", "application/json");
        getMethod.setRequestBody( this.document_text );
        
        return getMethod;
    },

    type: 'HttpRequest'
}








