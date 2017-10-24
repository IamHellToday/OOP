$(function(){
    function randomString() {
        let chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        let str = '';
        for (let i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
    return str;
    };
    function Column(name) {
        let self = this;
        this.id = randomString();
        this.name = name;
        this.$element = createColumn();
//CREATION OF COMPNONENTS OF THE COLUMNS
        function CreateColumn() {
            let $column = $('<div>').addClass('column');
            let $columnTitle = $('<h2>').addClass('columnt-title').text(self.name);
            let $columnCardList = $('<ul>').addClass('column-card-list');
            let $columnDelete = $('<button').addClass('btn-delete').text('x');
            let $columnAddCard = $('<button>').addClass('add-card').text('Add a card');
//EVENTS
            $columnDelete.click(function() {
                self.removeColumn();
            });
            $columnAddCard.click(function(event){
                self.addCard(new Card(prompt('Please, enter the name of the card')));
            });
//CONSTRUCION OF COLUMN ELEMENTS
            $column.append($columnTitle)
                    .append($columnDelete)
                    .append($coludmnAddCard)
                    .append($columnCardList)
            return $column;
            }
    };
    Column.prototype = {
        addCard: function(card) {
            this.$element.children('ul').append(card.$element);
        },
        removeColumn: function() {
            this.$element.remove();
        }
    };
    function Card(description){
        let self = this;
        this.id = randomString();
        this.description = description;
        this.$element = createCard();
//CREATION OF BLOCKS
        function createCard() {
            let $card = $('<li>').addClass('card');
            let $cardDescription = $('<p>').addClass('card-description').text(self.desctiption);
            let $cardDelete = $('<button>').addClass('btn-delete').text('x');
//CLICK EVENT BINDING
            $cardDelete.click(function(){
                self.removeCard();
            });
//BLOCK COMBINING
            $card.append($cardDelete)
                 .append($cardDescription);
            return $card;
        };
    };
    Card.prototype = {
        removeCard: function() {
            this.$element.remove();
        }
    }
    let board = {
        name: 'Kanban Board',
        addColumn: function(column) {
            this.$element.append(column.$element);
            initSortable();
        },
        $element: $('#board .columnt-container')
    };
    function initSosrtable() {
        $('.column-card-list').sortable({
            connectWith: '.column-card-list',
            placeholder: 'card-placeholder'
        }).disableSelection();
    }
    $('.create-column')
        .click(function(){
            let name = prompt('Enter a column name');
            let column = new Column(name);
                board.addColumn(column);
        });
    let todoColumn = new Column('To do');
    let doingColumn = new Column('Doing');
    let doneColumn = new Column('Done');

    board.addColumn(todoColumn);
    board.addColumn(doingCoulmn);
    board.addColumn(doneColumn);

    let card1 = new Card('New task');
    let card2 = new Card('Create kanban boards');

    todoColumn.addCard(card1);
    doingColumn.addCard(card2);
});