const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsEl = document.querySelector(".posts")
postsHtml = ""


for (let i=0; i<posts.length; i++){
    postsHtml += `<div class="post">
                    <div class="post-header">
                        <img class="pfp" src="${posts[i].avatar}">
                        <div class="post-header-info">
                            <h3>${posts[i].name}</h3>
                            <p>${posts[i].location}</p>
                        </div>
                    </div>
                    <img id="img-${i}" class="post-img" src="${posts[i].post}" alt="${posts[i].name}'s self portrait">
                    <div class="post-options">
                        <button id="btn-${i}"><img class="icon" src="images/icon-heart.png" alt="Like button"></button>
                        <img class="icon" src="images/icon-comment.png" alt="Comment button">
                        <img class="icon" src="images/icon-dm.png" alt="DM button">
                    </div>
                    <p id="likes-${i}" class="likes">${posts[i].likes} likes</p>
                    <p class="caption"><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>`
}

postsEl.innerHTML = postsHtml
