let postTitle = '';
const titleInputNode = document.getElementById('base-input__js');//ввод текста в заголовок
const buttonPublic = document.getElementById('base-btn__js');
const postNew = document.getElementById('post-js');//заголовок

buttonPublic.addEventListener('click', function(){
    postTitle = titleInputNode.value; //postTitle равен значению titleInputNode
    postNew.innerText = postTitle;
    
    

});