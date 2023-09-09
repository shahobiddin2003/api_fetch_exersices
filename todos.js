fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    displayTodos(json);
  })
  .catch((err) => console.log(err));

let takenid = +localStorage.getItem("ID");
console.log(takenid);

displayTodos = (todos) => {
  let data = todos.filter((el) => el.userId == takenid);

  let str = "";
  data.map((el) => {
    str += `
     <div
       class="notes d-flex align-items-center justify-content-between p-3"
      >
        <p>${el.title}</p>
        <img src="${
          el.completed == true
            ? "/images/complete.png"
            : "/images/not_complete.png"
        }" alt="" />
    </div>
  `;
  });

  document.querySelector(".todoBox").innerHTML = str;
};
