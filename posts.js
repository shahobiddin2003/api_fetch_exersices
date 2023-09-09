fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    displayPosts(json);
  })
  .catch((err) => console.log(err));

let takenid = +localStorage.getItem("ID");
console.log(takenid);

displayPosts = (todos) => {
  let data = todos.filter((el) => el.userId == takenid);

  let str = "";
  data.map((el) => {
    str += `
    <div class="Post p-3 rounded-5">
    <h3>${el.title}</h3>
    <p>
    ${el.body}
    </p>
    <button onclick="openComments(${el.id})" class="btn btn-outline-warning">Comments</button>
  </div>
  `;
  });

  document.querySelector(".postBox").innerHTML = str;
};

let openComments = (id) => {
  window.location = "./comments.html";
  id = JSON.stringify(id);
  localStorage.setItem("gID", id);

  console.log(id);
};
