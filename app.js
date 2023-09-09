// https://jsonplaceholder.typicode.com/users

const data = [];
const cardBox = document.querySelector(".user_cardbox");

try {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      displayData(json);
    });
} catch (err) {
  console.log(err);
}
displayData = (users) => {
  let str = "";
  users.map((el) => {
    str += `
    <div class="card card-body">
            <h3 class="name card-title">${el.name}</h3>
            <h4 class="username">${el.username}</h4>
            <p class="email">Email: <a href="#">${el.email}</a></p>
            <p class="Website">Website: <a href="#"> hildegard.org</a></p>
            <p class="address">
                Address: <a href="#"> ${el.address.city},${el.address.street} </a>
            </p>
            <p class="phone">Phone:<a href="#"> ${el.phone}</a></p>
            <div class="buttons d-flex justify-content-between">
            <button onclick = "openTodos(${el.id})" class="btn btn-outline-primary btn-sm">ToDos</button>
            <button  onclick = "openPosts(${el.id})" class="btn btn-outline-primary btn-sm">Posts</button>
            <button onclick = "openGallery(${el.id})" class="btn btn-outline-primary btn-sm">Gallery</button>
        </div>
    </div>
    `;
  });
  cardBox.innerHTML = str;
};

let openTodos = (id) => {
  window.location = "./todos.html";
  id = JSON.stringify(id);
  localStorage.setItem("ID", id);

  console.log(id);
};

let openPosts = (id) => {
  window.location = "./posts.html";
  id = JSON.stringify(id);
  localStorage.setItem("ID", id);

  console.log(id);
};

let openGallery = (id) => {
  window.location = "./gallery.html";
  id = JSON.stringify(id);
  localStorage.setItem("ID", id);

  console.log(id);
};
