describe("Adventure", function() {

  it("should give me some options for my adventure to begin", function() {

    // Given some options
    var map = {"options":[
        {
            "title": "Airports"
        },
        {
            "title": "Fresh Fruit Juice"
        },
        {
            "title": "Art History"
        }
    ]};

    var adventure = new Adventure(map);

    // And a template
    adventure.setRootTemplate("{{#options}}|{{title}}{{/options}}|");

    // I should see this at the root / start of my adventure
    var expected_html = "|Airports|Fresh Fruit Juice|Art History|";

    expect(adventure.root()).toEqual(expected_html);

  });

});
