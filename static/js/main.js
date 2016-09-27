function Board(title, content){
    this.title = title;
    this.content = content;
    this.balloons = [];

    this.addBalloon = function (balloon) {
        this.balloons.push(balloon);
    };
};

function Balloon(title, content, owner){
    this.title = title;
    this.content = content;
    owner.addBalloon(this);
};

var first_board = new Board('Shopping to do', 'These are the things you should buy')
var milk = new Balloon('Milk', 'Lactose free delicious milk', first_board)
var bread = new Balloon('Bread', 'Some crusty French bread straight from Clermont-Ferrand', first_board)

localStorage.setItem('first', JSON.stringify(first_board));

var retrievedObject = localStorage.getItem('first');
console.log('retrievedObject: ', JSON.parse(retrievedObject));
