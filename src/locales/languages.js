var dictFR = require('./FR')
var dictEN = require('./EN')

module.exports = {
	keys: { fr: dictFR },
	default: { key: 'en', value: dictEN }
}
