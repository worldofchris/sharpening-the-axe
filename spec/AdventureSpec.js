describe("Adventure", function() {

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

  var adventure;

  beforeEach(function() {
    adventure = new Adventure(map);
  });

  it("should give me some options for my adventure to begin", function() {

    // Given some options - resources/options.js

    // And a template

    // I should get this output
    var expected_html = "|Airports|Fresh Fruit Juice|Art History|";
    expect(adventure.root()).toEqual(expected_html);

  });

});
