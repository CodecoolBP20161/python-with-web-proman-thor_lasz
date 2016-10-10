from peewee import *
from models.basemodel import BaseModel


class Answer(BaseModel):
    title = CharField()
    content = CharField()
    status = CharField()
    priority = CharField()
