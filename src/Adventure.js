function Adventure(map) {
	this.map = map;
	this.root_template =
	['{{#options}}',
     '<div id="{{title}}" class="col-md-4 center" style="background-color: {{background-color}};min-height: 180px;">',
     '<h1>{{title}}</h1>',
     '</div>',
     '{{/options}}'
    ].join('\n');
}

Adventure.prototype.setRootTemplate = function(template) {
	this.root_template = template;
};

Adventure.prototype.root = function() {

    var options_menu_template = this.root_template;
    var template = Handlebars.compile(options_menu_template);

	return template(this.map);
};