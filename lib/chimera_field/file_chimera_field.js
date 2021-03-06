/**
 * File Chimera Field
 *
 * @constructor
 *
 * @author   Jelle De Loecker   <jelle@develry.be>
 * @since    0.2.0
 * @version  0.3.0
 *
 * @param    {FieldType}
 */
var FileChimeraField = Function.inherits('Alchemy.ChimeraField', function FileChimeraField(fieldType, options) {

	FileChimeraField.super.call(this, fieldType, options);

	this.script_file = ['chimera/mediafield'];
	this.style_file = 'chimera/mediafield';

	this.viewname = 'file';
});
