// json api get

function commentLoad() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => getComments(data))
}
commentLoad()

function getComments(comments) {
    const commentsContainer = document.getElementById('comments');
    for (const comment of comments) {
        const article = document.createElement('article');
        article.classList.add('comment');
        article.innerHTML = `
        <h3>${comment.id}. ${comment.name}</h3>
        <em>${comment.email}</em>
        <p>${comment.body}</p>
        `;
        commentsContainer.appendChild(article);
    }
}