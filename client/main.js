const btn = document.getElementById("btn");
const container = document.getElementById("container");
const input = document.querySelector("input");


btn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    window.location.href = "all";
})

container.addEventListener('click', (eo) => {
    if (eo.target.className == "icon-cross icon") {
        eo.target.parentElement.parentElement.remove();
    }
    else if (eo.target.className == "icon-checkmark icon") {
        eo.target.classList.add("dn");
        const right = `<p class="p" >Done</p>`;
        eo.target.parentElement.parentElement.innerHTML = right;
    }
    else if (eo.target.className == "icon-star-full icon") {
        eo.target.classList.add("yellow");
        container.prepend(eo.target.parentElement);
    }
    else if (eo.target.className == "icon-star-full icon yellow") {
        eo.target.classList.remove("yellow");
    }

});



