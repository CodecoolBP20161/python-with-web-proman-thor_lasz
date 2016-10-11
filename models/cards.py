from peewee import *
from models.basemodel import *
from models.boards import Board


class Card(BaseModel):
    title = CharField()
    content = CharField()
    status = CharField()
    priority = CharField()
    owner = ForeignKeyField(Board, null=True)
