describe("Adventure", function() {

  var adventure;

  beforeEach(function() {

    // Given some options
    var map = {"options":[
        {
            "name": "airports",
            "title": "Airports",
            "content": {
              "image": "resources/airport-queue.jpg"
            }
        },
        {
            "title": "Fresh Fruit Juice"
        },
        {
            "title": "Art History"
        }
    ]};

    adventure = new Adventure(map);
  });

  it("should give me some options for my adventure to begin", function() {

    // And a template
    adventure.setRootTemplate("{{#options}}|{{title}}{{/options}}|");

    // I should see this at the root / start of my adventure
    var expected_html = "|Airports|Fresh Fruit Juice|Art History|";

    expect(adventure.root()).toEqual(expected_html);

  });

  it("should have a link from an option to its content", function() {

    var options = setFixtures(adventure.root());
    expect(options.find('a')).toHaveAttr('href', '#/node/airports');
    // We should have a route for each of the options
    expect(crossroads.getNumRoutes()).toBe(3);
  });

  it("should put new content on the stage when we navigate to it", function() {

    var stage = sandbox();
    adventure.setStage(stage);
    navigate('airports', adventure);

    expect(stage).toContainElement('img');

  });

  it("should present simple content - a single image", function() {

    var airports = setFixtures(adventure.node("Airports").html);
    // The content image should be displayed

    expect(airports).toContainElement('img');
    expect(airports.find('img')).toHaveAttr('src', 'resources/airport-queue.jpg');

  });

  // And the notes should appear...where?


});
