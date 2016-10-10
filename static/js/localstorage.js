function Board(title){
    this.title = title;
    this.cards = [];

    this.addCard = function (card) {
        this.cards.push(card);
    };
};


function Card(title, content, owner){
    this.title = title;
    this.content = content;
    owner.addCard(this);
};


// Inheritance
// Encapsulation: an object is responsible for specific tasks
// Polymorhism: objects can share the same interface - with different underlying implementation

var storage_handler = new LocalStorageManager("boards")


function LocalStorageManager(path){

    this.path = path

    /** Overloads the toString function and writes out the content of the localStorage at a given path. */
    this.toString = function(){
        var this_object = "The key of this object in localStorage: " + this.path + "\n The content of this object: \n" +
                            localStorage.getItem("boards");
        return this_object;
    }

    /** Loads the whole list of objects from localStorage. */
    this.load = function(){
        this.storage = JSON.parse(localStorage.getItem(this.path));
        if(this.storage == null){
            this.storage = new Array();
        }
        return this.storage;
    }

    /** Saves one object instance into the list stored in localStorage. */
    this.save = function(new_object){
        this.storage = JSON.parse(localStorage.getItem(this.path))
        if(this.storage == null){
            this.storage = [];
        }else{
            this.storage.push(new_object);
            localStorage.setItem(this.path, JSON.stringify(this.storage))
        }

    }

    /** Returns one object instance if its name is equal to the input string, return null otherwise. */
    this.get = function(name){
        for(var i = 0; i < this.storage.length; i++){
            if(this.storage[i] == name){
                return this.storage[i];
            }
        }
        return null;
    }

    /** Updates one object instance in the list stored in localStorage, returns null if the update fails. */
    this.update = function(name, new_object){
        for(var i = 0; i < this.storage.length; i++){
            if(this.storage[i] == name){
                this.storage[i] = new_object;
            }
        }
        return null;
    }
}
