fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => {
    displayALbums(json);
  })
  .catch((err) => console.log(err));

let takenid = +localStorage.getItem("ID");
console.log(takenid);

displayALbums = (todos) => {
  let data = todos.filter((el) => el.albumId == takenid);

  let str = "";
  data.map((el) => {
    str += `
    <div class="photo card card-body">
        <img class="card-img-top" src="${el.url}" alt="" />
        <h5 class="card-title">${el.title}</h5>
    </div>
  `;
  });

  document.querySelector(".Photo_Box").innerHTML = str;
};
