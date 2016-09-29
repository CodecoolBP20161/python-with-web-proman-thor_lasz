function Board(title){
    this.title = title;
    this.cards = [];

    this.addCard = function (card) {
        this.cards.push(card);
    };
};

function drawBoards() {
        if (localStorage.getItem("boards") == null) {
            var boards = new Array();
        }
        else {
            var boards = JSON.parse(localStorage.getItem("boards"));
        }
        for (var i = 0; i < boards.length; i++) {
            $('#big_board').append("<div id='board'><p id='title'>" + boards[i].title + "</p></div>");
        }
}

function Card(title, content, owner){
    this.title = title;
    this.content = content;
    owner.addCard(this);
};


var boardClickHandler;
boardClickHandler = function () {
    var currentTitle = $(this).text();
    // console.log($(this).text());
    var detailedBoard = $(
        "<div class='blur'>" +
        "<div class='detailedBoard'>" +
        "<div>" +
        "<p id='exit' class ='exit'>x</p>" +
        "<p class = 'title' id='detailTitle'>" + currentTitle + "</p>" +
        "</div>" +

        "</div></div>");
    $('#big_board').append(detailedBoard);

    $('.exit').click(function(){
        detailedBoard.remove();
    })

    $(".exit").hover(function(){
        document.getElementById("exit").innerHTML = "o";
    }, function(){
        document.getElementById("exit").innerHTML = "x";
    });
}
    /**
     * Creates a new Board instance with the name of the content of the inputbox of name title.
     */
// $('#create_new_board').click(function(){
//     var title = $("input[name=title]").val();
//     $('#big_board').append("<div id='board'><p id='title'>"+title+"</p></div>");
//     $("input[name=title]").val('');
//         // detailedBoard.on('click', exitBoard);


var exitBoard = function () {
    this.remove();
};


/**
 * Handles saving a new Board object into the localStorage.
 */
function saveBoard(board) {
    boards = JSON.parse(localStorage.getItem("boards"));
    boards.push(board);
    localStorage.setItem("boards", JSON.stringify(boards));
}


/**
 * Returns a Board object whose title is equal to the given in title.
 * If there is no Board instance with the given name, return null.
 */
function getBoard(title) {
    boards = JSON.parse(localStorage.getItem("boards"));
    for (var i = 0; i < boards.length; i++) {
        if (boards[i].title == title) {
            return boards[i];
        }
    }
    return null;
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
    drawBoards();
});

$('#create_new_board').click(function () {
    var title = $("input[name=title]").val();
    var newBoard = $("<div class='board'><p class='title'>" + title + "</p></div>")
    newBoard.on('click', boardClickHandler);
    $('#big_board').append(newBoard);
    // new Board(title);
    localStorage.setItem(title, JSON.stringify(new Board(title)));

    var boards = JSON.parse(localStorage.getItem("boards"));
    if (boards == null) {
        boards = new Array();
    };
});






/**
 * Handles drawing existing Board items from the localStorage.
 */


