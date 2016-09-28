function Board(title){
    this.title = title;
    this.cards = [];

    this.addCard = function (card) {
        this.cards.push(card);
    };
};

function Card(title, content, owner){
    this.title = title;
    this.content = content;
    owner.addCard(this);
};
//
// var first_board = new Board('Shopping to do', 'These are the things you should buy')
// var milk = new Balloon('Milk', 'Lactose free delicious milk', first_board)
// var bread = new Balloon('Bread', 'Some crusty French bread straight from Clermont-Ferrand', first_board)
//
// localStorage.setItem('first', JSON.stringify(first_board));
//
// var retrievedObject = localStorage.getItem('first');
// console.log('retrievedObject: ', JSON.parse(retrievedObject));


$(document).ready(function () {
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        var title = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
        $('#big_board').append("<div id='board'><p id='title'>"+title["title"]+"</p></div>");
}
});



$('#create_new_board').click(function(){
    var title = $("input[name=title]").val();
    $('#big_board').append("<div id='board'><p id='title'>"+title+"</p></div>");
    localStorage.setItem(title, JSON.stringify(new Board(title)));
});
