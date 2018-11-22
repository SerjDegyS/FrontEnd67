var NotesModel = (function(){
    var NOTES = [{
            id: 1,
            text: 'Some text 1'
        },
        {
            id: 2,
            text: 'Some text 2'
        },
        {
            id: 3,
            text: 'Some text 3'
        },
        {
            id: 4,
            text: 'Some text 4'
        }
    ]

    return{
        addNote: function(noteText, renderer){
            var newNote = {
                id: NOTES.length + 1,
                text: noteText
            }

            NOTES.push(newNote);
            renderer(NOTES);
        },

        removeNote: function(id_Notes, renderer){
            NOTES.splice(id_Notes, 1);
            console.log(NOTES);
            
            renderer(NOTES);
        },

        getNotes: function(renderer){
            renderer(NOTES);
        },

        clearNotes: function(renderer){
            NOTES = [];
            renderer(NOTES);
        }
    }

})();