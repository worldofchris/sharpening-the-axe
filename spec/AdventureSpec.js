describe("Adventure", function() {

  it("should give me some options for my adventure to begin", function() {

    // Given some options

    // And a template
    var options_menu_template = "|{{#options}}{{title}}|{{/options}}";

    // I should get this output
    var template = Handlebars.compile(options_menu_template);

    var expected_html = "|Airports|Fresh Fruit Juice|Art History|";
    expect(template(adventure)).toEqual(expected_html);

  });

});
