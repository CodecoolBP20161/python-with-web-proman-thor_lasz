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

$(function(){

    // var getTableData = function() {
    //     var title = JSON.parse(localStorage.getItem(localStorage.key(i)));
    // }

    var boardClickHandler = function(){
        var currentTitle = $(this).text();
        var detailedBoard = $("<div class='blur'><div class='detailedBoard'>"+currentTitle+"</div></div>");
        detailedBoard.on('click', boardClickHandler);
        $('#big_board').append(detailedBoard);
    }



    $('#create_new_board').click(function(){
        var title = $("input[name=title]").val();
        var newBoard = $("<div class='board'><p class='title'>"+title+"</p></div>")
        newBoard.on('click', boardClickHandler);
        $('#big_board').append(newBoard);
        // new Board(title);
        localStorage.setItem(title, JSON.stringify(new Board(title)));

    });

    $(".board").on('click', boardClickHandler);
});
