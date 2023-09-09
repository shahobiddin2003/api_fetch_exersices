fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((json) => {
    displayALbums(json);
  })
  .catch((err) => console.log(err));

let takenid = +localStorage.getItem("ID");
console.log(takenid);

displayALbums = (todos) => {
  let data = todos.filter((el) => el.userId == takenid);

  let str = "";
  data.map((el) => {
    str += `
    <div class="Post p-3 rounded-5">
    <h3>${el.title}</h3>
    
    <button onclick="openPhotos(${el.id})"  class="btn btn-outline-warning">Photos</button>
  </div>
  `;
  });

  document.querySelector(".postBox").innerHTML = str;
};

let openPhotos = (id) => {
  window.location = "./photos.html";
  id = JSON.stringify(id);
  localStorage.setItem("gID", id);

  console.log(id);
};
