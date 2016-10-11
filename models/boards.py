from peewee import *
from models.basemodel import *



class Board(BaseModel):
    title = CharField()


db.create_tables([Board], safe=True)
