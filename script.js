const input = document.querySelector('input');
const addItem = document.querySelector('button');
const ul = document.querySelector('ul');
const deleteButton = document.querySelectorAll('.deleteButton');

addItem.onclick = function() {

  if (input.value != ""){
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" class="checkBox">
        <p>${input.value}</p>
        <button class='deleteButton'>Delete</button>
    `;
    li.querySelector('.deleteButton').onclick = function(){
      li.remove();
    }
    li.querySelector('.checkBox').onchange = function(){
      if (event.target.checked) {
        const audio = document.getElementById("dingSound");
        audio.play();
      }
      const listItem = event.target.closest("li");
      if (event.target.checked) {
        listItem.classList.add("checked");
      } else {
        listItem.classList.remove("checked");
      }
    }
    ul.appendChild(li);
    input.value = "";
  }
}

deleteButton.forEach(e => {
  e.onclick = function() {
    e.parentElement.remove();
  }
});



document.querySelectorAll(".checkBox").forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      const audio = document.getElementById("dingSound");
      audio.play();
    }
  });
});

// Checkbox interaction
document.querySelectorAll(".checkBox").forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const listItem = event.target.closest("li");
    if (event.target.checked) {
      listItem.classList.add("checked");
    } else {
      listItem.classList.remove("checked");
    }
  });
});

// Delete Button Interaction
document.querySelectorAll(".deleteButton").forEach((button) => {
  button.addEventListener("click", (event) => {
    const listItem = event.target.closest("li");
    listItem.classList.add("deleted");
    setTimeout(() => {
      listItem.remove();
    }, 1000); // Wait for fade-out animation
  });
});
