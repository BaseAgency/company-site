var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Hero Model
 * ==========
 */
var Global = new keystone.List('Global');

Global.add({
    nav: {
    	item1: {
    	    title: { type: Types.Text },
            link: { type: Types.Url }	
    	},
    	item2: {
    	    title: { type: Types.Text },
            link: { type: Types.Text }	
    	}
    },
    location: { 
    	address: { type: Types.Location },
    	show: {type: Boolean, default: false}
    },
    phone: {
    	number: { type: Types.Text },
    	show: {type: Boolean, default: false}
    },
	contactEmail: {
	    address: { type: Types.Text },
        show: {type: Boolean, default: false}
	},
	careersEmail: {
	    address: { type: Types.Text },
        show: {type: Boolean, default: false}	
	}
});

// Global.defaultColumns = 'pageName, subtitle|33%, body|33%';

Global.register();
