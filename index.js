const titleInputNode = document.querySelector('#js-title-input');
const textInputNode = document.querySelector('#js-text-input');
const newPostBtnNode = document.querySelector('#js-publication-btn');
const postNode = document.querySelector('#js-add-post');
const validationMessage = document.getElementById('js-validationMessage')

const posts = [];

const TITLE_VALIDATION_LIMIT = 10;
const TEXT_VALIDSTION_LIMIT = 20


newPostBtnNode.addEventListener('click', function () {
    //  Запись в переменную значение функции getPostFromUser
    const PostFromUser = getPostFromUser();

    //  Добавление в глобальную переменную post значение getPostFromUser, так как переменная post это не тоже самое, что и post
    addPost(PostFromUser);

    //  Добавление поста в Ленту постов
    renderPost()

})

titleInputNode.addEventListener('input', function () {
    validation();
})

textInputNode.addEventListener('input', function () {
    validation();
})

function validation() {
    const titleLength = titleInputNode.value.length;
    const textleLength = textInputNode.value.length;

    if (titleLength > TITLE_VALIDATION_LIMIT) {
        validationMessage.innerText = `Длина заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove('blog__validationMessage_hidden')
        newPostBtnNode.setAttribute('disabled', '')
        return;
    }

    if (textleLength > TEXT_VALIDSTION_LIMIT) {
        validationMessage.innerText = `Длина заголовка не должна превышать ${TEXT_VALIDSTION_LIMIT} символов`;
        validationMessage.classList.remove('blog__validationMessage_hidden')
        newPostBtnNode.setAttribute('disabled', '')
        return;
    }

    newPostBtnNode.removeAttribute('disabled');
    validationMessage.classList.add('blog__validationMessage_hidden')
}

function getPostFromUser() {
    const title = titleInputNode.value;
    const text = textInputNode.value;

    return {
        title: title,
        text: text,
    };
}

function addPost({ title, text }) {

    const currentDate = new Date();
    const dt = `${currentDate.getDay()}.${currentDate.getMonth()}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`

    posts.push({
        dt,
        title,
        text
    });
}

function getPosts() {
    return posts;
}

function renderPost() {
    const posts = getPosts();
    console.log(posts);

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
            <div class='post'>
                <p class='post__data'>${post.dt}</p>
                <p class='post__title'>${post.title}</p>
                <p class='post__text'>${post.text}</p>
            </div>
`
    });

    postNode.innerHTML = postsHTML;
}