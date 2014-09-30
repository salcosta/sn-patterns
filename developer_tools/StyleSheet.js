/*
	 ___________________________________________________
	|													|
	|  Fruition App Accelerator - V1.0 - 09/03/13 		|
	|  http://www.fruitionpartners.com 					|
	| 													|
	|  Copyright (c) 2013 Fruition Partners				|
	|  Licensed under the MIT license.           	    |
	|___________________________________________________|

	File: StyleSheet

	Description: Processor that allows retrieval of CSS files via name

	Usage: 

	Copy this file to a new Processor with the name StyleSheet and the Parameters CSS

	To retrieve CSS Files by name use /stylesheet?CSS

*/

var styleRec = new GlideRecord("content_css");
styleRec.get("name", g_request.requestURI.toString().replace("/","") );

g_processor.writeOutput('text/css', styleRec.style );