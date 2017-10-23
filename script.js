function Button(text) {
    this.text = text || 'Hello';
}
Button.prototype = {
    create: function() {
        let self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function() {
            alert(self.text);
        });
        this.$element.append(this.$element);
    }
}
let btn1 = new Button('Hello');

btn1.create();