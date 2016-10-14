from peewee import *
from models.basemodel import *
from playhouse.shortcuts import model_to_dict



class Board(BaseModel):
    title = CharField()
    cards = CharField(null=True)


db.create_tables([Board], safe=True)
# print(model_to_dict(Board.insert(title='shopping').execute()))

board = Board(title='shopping')
board.save()

# print(model_to_dict(board))
