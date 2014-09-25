function Adventure(map) {
  this.map = map;
  this.root_template =
  ['{{#.}}',
     '<div id="{{title}}" style="position: absolute; left: {{position.left}}; top: {{position.top}}; background-color: {{background-color}};min-height: 40px;">',
     '<a href="{{nav name}}">{{title}}</a>',
     '</div>',
     '{{/.}}'
    ].join('\n');

  this.links_template =
  ['{{#.}}',
   '<div id="{{.}}" class="col-md-3">',
   '<h2>{{{link .}}}</h2>',
   '</div>',
   '{{/.}}'
  ].join('\n');
}

// Looking at this code now I don't know why navigte is not part of Adventure
// itself.

function start(adventure) {
  $(adventure.stage).html(adventure.root());
}

function navigate(name, adventure) {
  // Navigate to the given node
  $(adventure.stage).html(adventure.node(name).html);
  // Upodate the Title Header
  $(adventure.title_header).html('<h1 id="node-title-header">' +  adventure.node(name).title  + '</h1>');
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

Adventure.prototype.setTitleHeader = function(title_header) {
  this.title_header = title_header;
};

Adventure.prototype.setNotePad = function(notepad) {
  this.notepad = notepad;
};

Adventure.prototype.root = function() {

  var self = this; // It's all about the context...

  Handlebars.registerHelper('nav', function(name) {

    // Crossroads is global - is this a good idea?
    // Have I got this right? Do I need to add a route for every name or
    // is {name} a parameter?
    crossroads.addRoute('/node/{name}', function(name) {
      navigate(name, self);
    });
    // Nasty duplication of URL pattern - not DRY
    return '#/node/' + name;
  });

  var root_options = $.grep(this.map.options, function(n){ return $.inArray(n.name, self.map.root) != -1;});

  var template = Handlebars.compile(this.root_template);

  return template(root_options);
};

Adventure.prototype.node = function(name) {

  var nodes = $.grep(this.map.options, function(n){ return n.name === name; });

  var self = this;

  if (nodes.length > 0) {
    
    var notes;
    var title;

    if (typeof(nodes[0].notes) !== 'undefined') {
      notes = nodes[0].notes.join('<br/>');
    }

    if (typeof(nodes[0].title) !== 'undefined') {
      title = nodes[0].title;
    } else {
      title = nodes[0].name;
    }

    if (typeof(nodes[0].content) !== 'undefined') {
      html = "<img src='" + nodes[0].content.image + "'width='100%'/>";
    } else {
      html = "<h1 id='node-title'>" + nodes[0].title + "</h1>";
    }

    if (typeof(nodes[0].links) !== 'undefined') {
      var template = Handlebars.compile(this.links_template);
      Handlebars.registerHelper('link', function(name) {
        var linked_nodes = $.grep(self.map.options, function(n){ return n.name === name; });
        if (linked_nodes.length > 0) {
          crossroads.addRoute('/node/{name}', function(name) {
            navigate(name, self);
          });
          return '<a href="#/node/' + name + '">' +   linked_nodes[0].title + '</a>';
        }
        return name;
      });
      links = template(nodes[0].links);
      html = html + links;
    }
    return {html: html,
            notes: notes,
            title: title};
  }
};
