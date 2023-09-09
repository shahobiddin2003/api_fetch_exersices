fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => {
    displayALbums(json);
  })
  .catch((err) => console.log(err));

let takenid = +localStorage.getItem("ID");
console.log(takenid);

displayALbums = (todos) => {
  let data = todos.filter((el) => el.postId == takenid);

  let str = "";
  data.map((el) => {
    str += `
    <div class="comment border border-warning rounded-4 p-4">
        <h2><a href="#">${el.email}</a></h2>
        <h4>${el.name}</h4>
        <p>${el.body}</p>
    </div>
  `;
  });

  document.querySelector(".CommentBox").innerHTML = str;
};
