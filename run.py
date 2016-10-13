from flask import Flask, render_template, jsonify, request
from models.boards import Board
from models.cards import Card
from peewee import *
from playhouse.shortcuts import model_to_dict, dict_to_model
import json


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/delete/<int:board_id>', methods=['GET', 'DELETE'])
def delete(board_id):
    if request.method == 'DELETE':
        success = Board.delete().where(Board.id == board_id).execute()
        if success > 0:
            return jsonify({"Result": "Success"})
        else:
            return jsonify({"Result": "Failed"})


# @app.route('/api/save/<board>', methods=['GET', 'POST', 'PUT'])
# def save(board):
#     print(board)
#     print(type(board))
#     print('\n')
#     d = json.loads(json.loads(board))
#     print(d)
#     print(type(d))
#
#     board = dict_to_model(Board, board)
#     if request.method == 'POST':
#         Board.create(**board).execute()
#         return jsonify({"Result": "Success"})
#
#     elif request.method == 'PUT':
#         for saved_board in Board.select():
#             if board.id == saved_board.id:
#                 saved_board = board
#                 return jsonify({"Result": "Success"})
#         return jsonify({"Result": "Failed"})


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


@app.route('/api/get/<int:board_id>', methods=['GET'])
def get_data(board_id):
    if request.method == 'GET':
        try:
            board = model_to_dict(Board.get((Board.id == board_id)))
            return jsonify({'board': board})
        except DoesNotExist:
            return jsonify({'board': "There is no such board"})


@app.route('/save', methods=['GET', 'POST'])
def save_board():
    if request.method == 'POST':
        for cucc in request.form:
            my_dict = json.loads(cucc)
            print(type(cucc))
            print(my_dict)
            print(type(my_dict))
        # board = dict_to_model(Board, request.form)
        # print(board)
        return jsonify({'Message': "Szép volt!"})











app.run(debug=True)
