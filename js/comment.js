const loadComment = () => {
  fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((res) => res.json())
    .then((data) => displayComment(data.slice(0, 20)));
};

const displayComment = (comments) => {
  const comment = document.getElementById("comments");
  comment.classList.add("container");

  comments.forEach((item) => {
    //console.log(item);
    const createComment = document.createElement("div");
    createComment.classList.add("style-comment");
    //createComment.onclick = showPostDetail;
    createComment.innerHTML = `
    <div onclick=loadPostDetail('${item.postId}')
        <p>${item.name}</p>
        <p>${item.email}</p>
        <p>${item.body}</p>
    </div>
    `;
    comment.appendChild(createComment);
  });
};

const loadPostDetail = (postId) => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((data) => displayPostDetail(data, postId));
};

const displayPostDetail = (data, postId) => {
  //   console.log(data);

  const commentDetails = document.getElementById("comment-details");
  commentDetails.innerHTML = ``;
  commentDetails.classList.add("style-detail");
  commentDetails.classList.add("container");
  const createComment = document.createElement("div");
  createComment.innerHTML = `
    <h1 class='text-center'>Post: </h1>
    <p>title: ${data[postId].title}</p>
    <p>post: ${data[postId].body}</p>
  `;
  commentDetails.appendChild(createComment);
};

loadComment();
