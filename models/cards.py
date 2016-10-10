from peewee import *
from models.basemodel import BaseModel
from models.boards import Boards


class Cards(BaseModel):
    title = CharField()
    content = CharField()
    status = CharField()
    priority = CharField()
