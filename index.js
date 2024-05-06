const posts = [];
const postTitleInputNode = document.getElementById('base-input__js');//ввод текста в заголовок
const postTextInputNode = document.getElementById('base-input-main__js');//ввод основного текста 
const buttonPublic = document.getElementById('base-btn__js');
const postNew = document.getElementById('post-js');//заголовок
const postData = document.getElementById('base-data-js'); //дата заголовка

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
    const data = new Date();
    return {
        title: title,
        text: text,
        data: data,
     
    };
}
 //сохранить пост
function addPost({title, text, data}){ //добавление в массив "posts" посты

 posts.push({
    title,
    text,
    data,
 });
}
function getPosts(){ //получение постов и их использование
    return posts;
}
 //отобразить пост
 function renderPosts(){
   const posts = getPosts();

  

   let postsHTML = '';
   posts.forEach(post => { //+=прибавление поста(цикл для добавления постов)
    postsHTML+=  ` <div class = 'post'>  
    <p class = "post-title"> ${post.title} </p>
    <p class = "post-text"> ${post.text} </p>
    <p class = "post-data"> ${post.data} </p>
    </div>
    `;
   });

  
    postNew.innerHTML = postsHTML;
 }
 