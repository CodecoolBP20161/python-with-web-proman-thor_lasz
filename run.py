from flask import Flask
from models.basemodel import *
from models.cards import *
from models.boards import *
app = Flask(__name__)


def init_db():
    db.connect()
    db.create_tables([Boards, Cards], safe=True)
    db.close()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/valami', methods=['GET', 'POST', 'PUT', 'DELETE'])
def api_echo():
    if request.method == 'GET':
        return "ECHO: GET\n"

    elif request.method == 'POST':
        return "ECHO: POST\n"

    elif request.method == 'PUT':
        return "ECHO: PUT\n"

    elif request.method == 'DELETE':
        return "ECHO: DELETE"

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
