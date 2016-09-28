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
    var exampleList = ["adflgkjsdfkl", "sdgklfsd", "dfgd"];

    var boardClickHandler = function(){
        var currentTitle = $(this).text();
        // console.log($(this).text());
        var detailedBoard = $(
            "<div class='blur'>" +
                "<div class='detailedBoard'>" +
                    "<div>" +
                        "<p id='exit' class ='exit'>x</p>" +
                        "<p class = 'title' id='detailTitle'>"+currentTitle+"</p>" +
                    "</div>"+
                    "<div>"+
                        
                "</div></div>" +

            "");
        // detailedBoard.on('click', exitBoard);
        $('#big_board').append(detailedBoard);

        $('.exit').click(function(){
            detailedBoard.remove();
        })

        $(".exit").hover(function(){
            document.getElementById("exit").innerHTML = "o";
        }, function(){
            document.getElementById("exit").innerHTML = "x";
        });
    };

    var exitBoard = function () {
        this.remove();
    };


    $('#create_new_board').click(function(){
        var title = $("input[name=title]").val();
        var newBoard = $("<div class='board'><p class='title'>"+title+"</p></div>")
        newBoard.on('click', boardClickHandler);
        $('#big_board').append(newBoard);
        // new Board(title);
        localStorage.setItem(title, JSON.stringify(new Board(title)));

    });

    // $(".board").on('click', boardClickHandler);
});