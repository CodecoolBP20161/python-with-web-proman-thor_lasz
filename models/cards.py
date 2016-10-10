from peewee import *
from models.basemodel import *



class Cards(BaseModel):
    title = CharField()
    content = CharField()
    status = CharField()
    priority = CharField()
