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
            var newBoard = $("<div class='board'><p class='title'>" + boards[i].title + "</p></div>");
            $('#big_board').append(newBoard);
            newBoard.on('click', boardClickHandler);
        }


}

var exitBoard = function () {
    this.remove();
};

function Card(title, content, owner){
    this.title = title;
    this.content = content;
    owner.addCard(this);
};

var boardClickHandler;
boardClickHandler = function () {
    var currentBoard = $(this).text();
    // console.log($(this).text());
    var detailedBoard = $(
        "<div class='blur'>" +
            "<div class='detailedBoard'>" +
                "<div>" +
                    "<p id='exit' class ='exit'>x</p>" +
                    "<p class = 'title' id='detailTitle'>" +currentBoard + "</p>" +
                "</div>" +
                "<div id='card_field'></div>" +
                "<div class='addfield'>" +
                    "<input type='text' id='new_content'>" +
                    "<p class='add'>+</p>" +
                "</div>" +
            "</div>" +
        "</div>");
    $('#big_board').append(detailedBoard);
    
    $('.exit').click(function(){
        detailedBoard.remove();
    })
    
    $(".exit").hover(function(){
        document.getElementById("exit").innerHTML = "o";
    }, function(){
        document.getElementById("exit").innerHTML = "x";
    });

    $('.add').click(function(){
        var card_content = document.getElementById('new_content').value;
        $('#card_field').append("<p class='card_content'>"+ card_content + "</p>");
        boards = JSON.parse(localStorage.getItem("boards"));
        console.log(boards)
    })
}
    /**
     * Creates a new Board instance with the name of the content of the inputbox of name title.
     */
// $('#create_new_board').click(function(){
//     var title = $("input[name=title]").val();
//     $('#big_board').append("<div id='board'><p id='title'>"+title+"</p></div>");
//     $("input[name=title]").val('');
//         // detailedBoard.on('click', exitBoard);

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
    var newBoard = $("<div class='board'><p class='title'>" + title + "</p></div>");
    $('#big_board').append(newBoard);
    $("input[name=title]").val('');
    newBoard.on('click', boardClickHandler);

    saveBoard(new Board(title));
});

$('#create_new_board_tile').click(function(){
    var title = $("input[name=title-from-tile]").val();
    var newBoard = $("<div class='board'><p class='title'>" + title + "</p></div>");
    $('#big_board').append(newBoard);
    $("input[name=title]").val('');
    newBoard.on('click', boardClickHandler);

    saveBoard(new Board(title));
    console.log(boards)
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
    if(boards == null){
        boards = [];
    }
    boards.push(board);
    localStorage.setItem("boards", JSON.stringify(boards));
}


/**
 * Handles drawing existing Board items from the localStorage.
 */
