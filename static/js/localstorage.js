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


var storage_handler = new State(new LocalStorageManager("boards"));
var elso = new Board("első")
storage_handler.save(elso);
console.log(storage_handler.toString());

storage_handler.state(new PeeweeStorageHandler());

function State(state){
    this.state = state
    this.options = ["localStorage", "api"]

    this.changeState = function(state){
        this.state = state;
    }

    this.toString = function(){
        console.log(this.state.toString());
    }

    this.load = function(){
        this.state.load();
    }

    this.save = function(){
        this.state.load();
    }

    this.get = function(){
        this.state.get();
    }

    this.update = function(){
        this.state.update();
    }

    this.delete = function(){
        this.state.delete();
    }

}


function LocalStorageManager(path){

    this.path = path;

    /** Overloads the toString function and writes out the content of the localStorage at a given path. */
    this.toString = function(){
        var this_object = "The key of this object in localStorage: " + this.path + "\n The content of this object: \n" +
                            JSON.stringify(this.load());
        return this_object;
    }

    /** Loads the whole list of objects from localStorage. */
    this.load = function(){
        var storage = JSON.parse(localStorage.getItem(this.path));
        if(storage == null){
            storage = new Array();
        }
        return storage;
    }

    /** Saves one object instance into the list stored in localStorage. */
    this.save = function(new_object){
        var storage = this.load();
        if(storage == null){
            storage = [];
        }

        storage.push(new_object);
        localStorage.setItem(this.path, JSON.stringify(storage));
    }

    /** Returns one object instance if its name is equal to the input string, return null otherwise. */
    this.get = function(name){
        var storage = this.load();
        for(var i = 0; i < storage.length; i++){
            if(this.storage[i] == name){
                return storage[i];
            }
        }
        return null;
    }

    /** Updates one object instance in the list stored in localStorage, returns null if the update fails. */
    this.update = function(name, new_object){
        var storage = this.load();
        for(var i = 0; i < storage.length; i++){
            if(storage[i] == name){
                storage[i] = new_object;
                localStorage.setItem(this.path, JSON.stringify(storage));
                return;
            }
        }
        return null;
    }

    /** Deletes one object instance from the list stored in localStorage, returns null if the delete fails. */
    this.delete = function(name){
        var storage = this.load();
        for(var i = 0; i < storage.length; i++){
            if(storage[i] == name){
                // itt kéne törölni
                return;
            }
        }
    return null;
    }
}
