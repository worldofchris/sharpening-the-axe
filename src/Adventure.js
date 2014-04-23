function Adventure(map) {
  this.map = map;
  this.root_template =
  ['{{#options}}',
     '<div id="{{title}}" class="col-md-4 center" style="background-color: {{background-color}};min-height: 180px;">',
     '<h1><a href="{{nav name}}">{{title}}</a></h1>',
     '</div>',
     '{{/options}}'
    ].join('\n');
}

function navigate(name, adventure) {
  // Navigate to the given node
  console.log(name, adventure.node());
  $(adventure.stage).html(adventure.node(name).html);
  // Update the notes
  if (typeof(adventure.notepad) != "undefined") {
    adventure.notepad.setNotes(adventure.node(name).notes);
  }
}

Adventure.prototype.setRootTemplate = function(template) {
  this.root_template = template;
};

Adventure.prototype.setStage = function(stage) {
  this.stage = stage;
};

Adventure.prototype.setNotePad = function(notepad) {
  this.notepad = notepad;
};

Adventure.prototype.root = function() {

  var options_menu_template = this.root_template;
  var self = this; // It's all about the context...

  Handlebars.registerHelper('nav', function(name) {

    // Crossroads is global - is this a good idea?
    crossroads.addRoute('/node/{name}', function(name) {
      navigate(name, self);
    });
    // Nasty duplication of URL pattern - not DRY
    return '#/node/' + name;
  });

  var template = Handlebars.compile(options_menu_template);

  return template(this.map);
};

Adventure.prototype.node = function(name) {

  var nodes = $.grep(this.map.options, function(n){ return n.name === name; });

  return {html: "<img src='resources/airport-queue.jpg' width='100%'/>",
          notes: nodes[0].notes};
};