from flask import Flask, render_template, jsonify, request
from models.boards import Board
from models.cards import Card
from peewee import *
from playhouse.shortcuts import model_to_dict


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/<int:board_id>', methods=['GET', 'DELETE'])
def delete(board_id):
    if request.method == 'DELETE':
        success = Board.delete().where(Board.id == board_id).execute()
        if success > 0:
            return jsonify({"Result": "Success"})
        else:
            return jsonify({"Result": "Failed"})


@app.route('/start', methods=['GET'])
def get_tasks():
    boards = Board.select()
    empty_list = []
    for board in boards:
        empty_list.append(model_to_dict(board))

    boards = empty_list

    if(boards == []):
        return jsonify({'boards': "There are no boards"})

    else:
        return jsonify({'boards': boards})


@app.route('/api/<int:board_id>', methods=['GET', 'DELETE'])
def delete(board_id):
    if request.method == 'DELETE':
        success = Boards.delete().where(Boards.id == board_id).execute()
        if success > 0:
            return jsonify({"Result": "Success"})
        else:
            return jsonify({"Result": "Failed"})


app.run(debug=True)
