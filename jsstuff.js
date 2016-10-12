localStorage.setItem('user', JSON.stringify({
    username: 'htmldog',
    api_key: 'abc123xyz789'
}

var user = JSON.parse(localStorage.getItem('user'));



$('newBoard').click(function () {
    new Board()
    // make new board
});

function Board(title) {
    this.title = title
    this.elements = []
}

Board.prototype.save = function () {
    localStorage.setItem(this.title, JSON.stringify({
    title: 'htmldog',
    api_key: 'abc123xyz789'


};
