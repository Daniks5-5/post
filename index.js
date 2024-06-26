const posts = [];
const postTitleInputNode = document.getElementById('base-input__js');//ввод текста в заголовок
const postTextInputNode = document.getElementById('base-input-main__js');//ввод основного текста 
const buttonPublic = document.getElementById('base-btn__js');
const titleLimit = document.getElementById('base-input-limit__js');//лимит заголовка
const textLimit = document.getElementById('base-limit__js'); //лимит текста
const postNew = document.getElementById('post-js');//заголовок
const postData = document.getElementById('base-data-js'); //дата заголовка

//загрузка и отображение изображения на странице
document.getElementById('addPhoto').onchange = ('file', function(event){
let reader = new FileReader();
reader.onload = function(){
    let output = document.getElementById('addImg-js');
    output.src = reader.result;
    output.style.display = 'block';
};
reader.readAsDataURL(event.target.files[0]);
});

//замена кнопки вместо input
window.onload = () => { 
    const addFile = document.getElementById('addPhoto');
    const addFilebtn = document.getElementById('addPhoto__btn-js');
   
//нажатие кнопки
    addFilebtn.addEventListener('click', function(){
        addFile.click();
    } );
};




buttonPublic.addEventListener('click', function(){
     //получить данные из поля ввода
     const postFromUser = getPostFromUser();

    addPost(postFromUser); //сохранить пост

    renderPosts(); //отобразить пост 
    Photo();
   
    

});
document.getElementById('base-input__js').addEventListener('input', function(){
    let maxLength = 100;
    if(this.value.length>maxLength){
        this.value = this.value.substring(0, maxLength);
        let titleLimitHTML = `
        <div class = "limit">
        <p class = "limit-style"> Заголовок большее 100 символов  </p>
        </div>
        `;
        titleLimit.innerHTML = titleLimitHTML;
    }

});
document.getElementById('base-input-main__js').addEventListener('input', function(){
    let maxLength = 400;
    if(this.value.length>maxLength){
        this.value = this.value.substring(0, maxLength);
        let textLimitHTML = `
        <div class = "limit-text">
        <p class = "limit-text__style"> Заголовок большее 400 символов  </p>
        </div>
        `;
        textLimit.innerHTML = textLimitHTML;
    }
    
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

 