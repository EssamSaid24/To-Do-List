const btn = document.getElementById("btn");
const container = document.getElementById("container");
const input = document.querySelector("input");
const form = document.querySelector("form");


const task = document.getElementsByClassName('task');

form.addEventListener('submit', (eo) => {
    eo.preventDefault();
    const newTask = `    <div  class="task">
    <span class="icon-star-full icon"></span>
    <p>
        ${input.value}
    </p>
    <div>
    <span class="icon-cross icon"></span>
    <span class="icon-checkmark icon"></span>
    </div>
    </div>`;
    container.innerHTML += newTask;
    input.value = "";
});
container.addEventListener('click', (eo) => {
    if (eo.target.className == "icon-cross icon") {
        eo.target.parentElement.parentElement.remove();
    }
    else if (eo.target.className == "icon-checkmark icon") {
        eo.target.classList.add("dn");
        const right = `<p class="p" >Done</p>`;
        eo.target.parentElement.parentElement.innerHTML = right;
        // setTimeout(() => {
        //     console.log("object");
        //     task.classList.remove("task")
        //   }, 1000);
    }
    else if (eo.target.className == "icon-star-full icon") {
        eo.target.classList.add("yellow");
        container.prepend(eo.target.parentElement);
    }
    else if (eo.target.className == "icon-star-full icon yellow") {
        eo.target.classList.remove("yellow");
    }

});



