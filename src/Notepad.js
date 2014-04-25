// Pop out speaker notes

function Notepad() {
  this.notes = "Speaker Notes will appear here";
  this.popup = undefined;
  this.converter = new Showdown.converter();
}

Notepad.prototype.setNotes = function(notes) {
  if (typeof notes === 'undefined') {
    this.notes = "Missing Notes";
  } else {
    this.notes = this.converter.makeHtml(notes);
  }
  
  if (typeof this.popup != "undefined") {
    $(this.popup.document.body).html(this.notes);
  }
};

Notepad.prototype.show = function() {
  if (typeof this.popup === "undefined") {
    this.popup = window.open("", "popupWindow", "width=600, height=300, scrollbars=yes");
  }
  if (this.popup.window === null) {
    this.popup = window.open("", "popupWindow", "width=600, height=300, scrollbars=yes");
  }
  $(this.popup.document.body).html(this.notes);
};

Notepad.prototype.hide = function() {
  if (typeof this.popup != "undefined") {
    this.popup.close();
  }
};