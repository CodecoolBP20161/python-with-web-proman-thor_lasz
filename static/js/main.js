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
});


/**
 * Creates a new Board instance with the name of the content of the inputbox of name title.
 */
$('#create_new_board').click(function(){
    var title = $("input[name=title]").val();
    $('#big_board').append("<div id='board'><p id='title'>"+title+"</p></div>");
    $("input[name=title]").val('');

    // var boards = JSON.parse(localStorage.getItem("boards"));
    // if(boards == null){
    //     boards = new Array();
    // }
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
