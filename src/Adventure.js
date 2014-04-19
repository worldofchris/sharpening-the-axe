function Adventure(map) {
	this.map = map;
}

Adventure.prototype.root = function() {

    var options_menu_template = "|{{#options}}{{title}}|{{/options}}";
    var template = Handlebars.compile(options_menu_template);

	return template(this.map);
};