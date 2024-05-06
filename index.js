const posts = [];
const postTitleInputNode = document.getElementById('base-input__js');//ввод текста в заголовок
const postTextInputNode = document.getElementById('base-input-main__js');//ввод основного текста 
const buttonPublic = document.getElementById('base-btn__js');
const postNew = document.getElementById('post-js');//заголовок

buttonPublic.addEventListener('click', function(){
     //получить данные из поля ввода
     const postFromUser = getPostFromUser();

    addPost(postFromUser); //сохранить пост

    renderPosts(); //отобразить пост 
    

});
 //получить данные из поля ввода
function getPostFromUser(){
    const title = postTitleInputNode.value; //создал отдельный post для отображения данных
    const text = postTextInputNode.value;
    return {
        title: title,
        text: text
    };
}
 //сохранить пост
function addPost({title, text}){ //добавление в массив "posts" посты
 posts.push({
    title,
    text,
 });
}
function getPosts(){
    return posts;
}
 //отобразить пост
 function renderPosts(){
   const posts = getPosts();

   let postsHTML = '';
   posts.forEach(post => { //+=прибавление
    postsHTML+=  ` <div class = 'post'>  
    <p class = "post-title"> ${post.title} </p>
    <p class = "post-text"> ${post.text} </p>
    </div>
    `;
   });

  
    postNew.innerHTML = postsHTML;
 }