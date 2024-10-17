const titleInputNode = document.querySelector('#js-title-input');
const newPostBtnNode = document.querySelector('#js-publication-btn');
const postNode = document.querySelector('#js-add-post');

let post = '';


newPostBtnNode.addEventListener('click', function () {
    //  Запись в переменную значение функции getPostFromUser
    const PostFromUser = getPostFromUser();

    //  Добавление в глобальную переменную post значение getPostFromUser, так как переменная post это не тоже самое, что и post
    setPost(PostFromUser);

    //  Добавление поста в Ленту постов
    renderPost()
})

function getPostFromUser() {
    post = titleInputNode.value;

    return post;
}

function setPost(newPost) {
    post = newPost;
}

function renderPost() {
    postNode.innerText = post;
}
