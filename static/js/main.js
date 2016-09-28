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


$(document).ready(function () {
    if(localStorage.getItem("boards") == null){
        var boards = new Array();
    }else{
        var boards = JSON.parse(localStorage.getItem("boards"));
    }

    for(var i = 0; i < boards.length; i++){
        $('#big_board').append("<div id='board'><p id='title'>" + boards[i].title +"</p></div>");
    }
});


$('#create_new_board').click(function(){
    var title = $("input[name=title]").val();
    $('#big_board').append("<div id='board'><p id='title'>"+title+"</p></div>");
    $("input[name=title]").val('');

    var boards = JSON.parse(localStorage.getItem("boards"));
    if(boards == null){
        boards = new Array();
    }
    boards.push(new Board(title));
    localStorage.setItem("boards", JSON.stringify(boards));
});
