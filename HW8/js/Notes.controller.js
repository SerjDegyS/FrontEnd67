var NotesController = (function(model, view){

    var showNotes = function(){
        model.getNotes(view.renderNotes);
    }

    var addNote = function(){
        view.listener('addNote', function(newText){
            model.addNote(newText, view.renderNotes);
        });
    }

    var removeNote = function(){
        view.listener('removeNote', function(id_Note){
            model.removeNote(id_Note, view.renderNotes);
        })
    }

    var clearNotes = function(){
        view.listener('clearNotes', function(){
            model.clearNotes(view.renderNotes);
        })
    }

    return {
        init: function(){
            showNotes();
            addNote();
            removeNote();
            clearNotes();
        }
    }
})(NotesModel, NotesView);