from peewee import *
from models.basemodel import BaseModel
from models.cards import Cards

class Boards(BaseModel):
    title = CharField()
    content = ForeignKeyField(Cards, related_name="title", null=True)
    
