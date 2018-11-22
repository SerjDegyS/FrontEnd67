var NotesView = (function(){
    var S = {
        list: document.querySelector('.notes-list'),
        addBtn: document.querySelector('#add'),
        inputText: document.querySelector('#new-note-text'),
        removeBtn: 'note__remove-btn',
        clearNotes: document.querySelector('#clear')
    }

    var noteTemplates = '<li class="note"><button data-id="{{data-id}}" class="note__remove-btn">Remove</button> : {{text}}</li>';

return{
    renderNotes: function(notes){
        var rend = '';
        for(var i = 0; i < notes.length; i++ ){
            note = noteTemplates;
            note = note.replace('{{data-id}}', i);
            note = note.replace('{{id}}', notes[i].id);
            note = note.replace('{{text}}', notes[i].text);
            rend += note;
        }
        S.list.innerHTML = rend;
    },

    listener: function(eventName, cb){
        switch(eventName){
            case 'addNote':
                S.addBtn.addEventListener('click', function(){
                    var newText = S.inputText.value;
                    cb(newText);
                })
                break;
            case 'removeNote':
                S.list.addEventListener('click', function(e){
                    var target = e.target;                    
                    if(target.className === S.removeBtn ){
                        for(var i = 0; i < target.attributes.length; i++){
                            if(target.attributes[i].name === 'data-id'){                                
                                var data_id = +target.attributes[i].value;                                cb(data_id);
                                return;
                            }
                        }
                    }else return;
                })
                break;
            case 'clearNotes':
                S.clearNotes.addEventListener('click', function(){
                    cb();
                })
        }
    }
}

})();