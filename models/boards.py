from peewee import *
from models.basemodel import *
from models.cards import *


class Boards(BaseModel):
    title = CharField()
    content = ForeignKeyField(Cards, related_name="card title", null=True)
