'use strict';

const path = require('path');
const { writeExports } = require('./extract-i18n-lib.js');

writeExports({
    html: path.join(__dirname, '..', 'mapper.html'),
    format: 'lang-blocks',
    dataVar: 'I18N_MAPPER_DATA',
});
