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
    drawBoards();
    $('.title').trunk8({
        side: 'center',
        lines: 3
    });

    $('#board-adder-tile').mouseenter(function() {
            $(this).children( '#show-edit' ).show();
            $(this).children( '#show-text' ).hide();
            $(this).find("#create_new_board_tile").css("color", "#D9DB56");
            $(this).children( '#show-edit' ).css("border-color", "#D9DB56")

        });
    $('#board-adder-tile').mouseleave(function() {
        $(this).children( '#show-edit' ).hide();
        $(this).children( '#show-text' ).show();
        $(this).find("#create_new_board_tile").css("color", "white");
        });
});


/**
 * Creates a new Board instance with the name of the content of the inputbox of name title.
 */
$('#create_new_board').click(function(){
    var title = $("input[name=title]").val();
    $('#big_board').append("<div id='board'><p id='title'>"+title+"</p></div>");
    $("input[name=title]").val('');

    saveBoard(new Board(title));
});

$('#create_new_board_tile').click(function(){
    var title = $("input[name=title-from-tile]").val();
    $('#big_board').append("<div id='board'><p id='title'>"+title+"</p></div>");
    $("input[name=title]").val('');

    saveBoard(new Board(title));
});


/**
 * Returns a Board object whose title is equal to the given in title.
 * If there is no Board instance with the given name, return null.
 */
function getBoard(title){
    boards = JSON.parse(localStorage.getItem("boards"));
    for(var i = 0; i < boards.length; i++){
        if(boards[i].title == title){
            return boards[i];
        }
    }
    return null;
}

/**
 * Handles saving a new Board object into the localStorage.
 */
function saveBoard(board){
    boards = JSON.parse(localStorage.getItem("boards"));
    if(boards == null){ boards = new Array()}
    boards.push(board);
    localStorage.setItem("boards", JSON.stringify(boards));
}


/**
 * Handles drawing existing Board items from the localStorage.
 */
function drawBoards(){
    if(localStorage.getItem("boards") == null){
        var boards = new Array();
    }else{
        var boards = JSON.parse(localStorage.getItem("boards"));
    }

    for(var i = 0; i < boards.length; i++){
        $('#big_board').append("<div id='board'><p id='title'>" + boards[i].title +"</p></div>");
    }
}
