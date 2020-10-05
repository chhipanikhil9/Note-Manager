// For add note//

var ul = document.querySelector('ul');

document.getElementById('add-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    var addInput = document.getElementById('add-input');
    if(addInput.value !== ''){
        var li = document.createElement('li'),
           firstPar = document.createElement('p'),
           secondPar = document.createElement('p'),
           firstIcon = document.createElement('i'),
          secondIcon =  document.createElement('i'),
           input = document.createElement('input');
        
        firstIcon.className = "fa fa-pencil-square-o" ;
        secondIcon.className = "fa fa-times";
        input.className = "edit-note";
        input.setAttribute("type", "text");
        
        firstPar.textContent = addInput.value;
        firstIcon.textContent = 'E';
        secondIcon.textContent = 'D';
        
        secondPar.appendChild(firstIcon);
        secondPar.appendChild(secondIcon);
        li.appendChild(firstPar);
        li.appendChild(secondPar);
        li.appendChild(input);

        ul.appendChild(li);
        
        addInput.value = '';
        
    }
});

// for edit element //

ul.addEventListener('click', function(e) {
    if(e.target.classList[1] === "fa-pencil-square-o"){
        var parentPar = e.target.parentNode;
        parentPar.style.display = 'none'; 
        var input = parentPar.nextElementSibling;
        var note = parentPar.previousElementSibling;
        input.style.display = 'block';
        input.value = note.textContent;
        
        input.addEventListener('keypress', function(e){
            if(e.keyCode === 13){
                
                if(input.value !== ''){
                    note.textContent = input.value;
                    parentPar.style.display = 'block';
                    input.style.display = 'none';
                    
                    }else{
                        var li = parentPar.parentNode;
                        li.parentNode.removeChild(li);  
                }
            }
        });

        
    }else if(e.target.classList[1] === 'fa-times'){
        var list = e.target.parentNode.parentNode;
        list.parentNode.removeChild(list);
    }
});

// for hide the list//

var hideIteam = document.getElementById('hide');
hideIteam.addEventListener('click', function(){
   var label = document.querySelector('label');
    if(hideIteam.checked){
        label.textContent = 'Unhide notes';
        ul.style.display = 'none';
    }else{
        label.textContent = 'Hide notes';
        ul.style.display = 'block';
    }
});

//for search item in the list//

var searchInput = document.querySelector('#search-note input');
searchInput.addEventListener('keyup', function(e) {
    var searchChar = e.target.value.toUpperCase();
    var notes = ul.getElementsByTagName('li');
    
    Array.from(notes).forEach(function(note) {
        var partext = note.firstElementChild.textContent;
        
        if(partext.toUpperCase().indexOf(searchChar) !== -1){
            note.style.display = 'block';
        }else{
            note.style.display = 'none';
        }
    });
});
                                       


                                       



















