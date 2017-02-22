var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Hero Model
 * ==========
 */
var Pages = new keystone.List('Pages', {
    sortable: true,
    autokey: { path: 'slug', from: 'pageName', unique: true },
    map: { name: 'pageName' },
    publishedDate: { type: Date, default: Date.now },
    defaultSort: '-createdAt'
});

Pages.add({
    pageName: { type: Types.Text, initial: true},
    title: { type: Types.Text},
    subtitle: { type: Types.Textarea},
    textSection1: {
        title: { type: Types.Text },
        content: { type: Types.Html, wysiwyg: true, height: 250 }
    },
    textSection2: {
        title: { type: Types.Text },
        content: { type: Types.Html, wysiwyg: true, height: 250 }
    },
    textSection3: {
        title: { type: Types.Text },
        content: { type: Types.Html, wysiwyg: true, height: 250 }
    }
});

Pages.defaultColumns = 'pageName, subtitle|33%, body|33%';

Pages.register();
