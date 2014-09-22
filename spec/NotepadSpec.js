describe("Notepad", function() {


  it("should display a popup containing the speaker notes", function() {

    var notepad = new Notepad();
    notepad.setNotes("Hello");
    notepad.show();
    // What do we actually want to test here?
    notepad.hide();
    // And here?
  });

});
