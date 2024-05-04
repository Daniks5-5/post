let post = '';
const titleInputNode = document.getElementById('base-input__js');//ввод текста в заголовок
const buttonPublic = document.getElementById('base-btn__js');
const postNew = document.getElementById('post-js');//заголовок

buttonPublic.addEventListener('click', function(){
     //получить данные из поля ввода
     const postFromUser = getPostFronUser();

    setPost(postFromUser); //сохранить пост

    renderPost(); //отобразить пост


    
    postTitle = titleInputNode.value; //postTitle равен значению titleInputNode
    postNew.innerText = postTitle;
    
    

});
 //получить данные из поля ввода
function getPostFronUser(){
    const post = titleInputNode.value; //создал отдельный post для отображения данных
    return post;
}
 //сохранить пост
function setPost(newPost){
 post = newPost;
}
 //отобразить пост
 function renderPost(){
    postNew.innerText = post;
 }