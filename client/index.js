const input = document.querySelector("input");
const role = document.querySelector("#role");
const button = document.querySelector("button");

const container = document.querySelector("#container");
const fetchUsers = document.querySelector("#fetch-users");

// Add a user when the button is clicked
button.addEventListener("click", () => {
    let user = {
        name: input.value,
        admin: role.checked
    }

    fetch("http://localhost:3000/createuser", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    });

    input.value = "";
    role.checked = false;
});

// fetch a list of all users
fetchUsers.addEventListener("click", () => {
    container.innerHTML = "";
    fetch("http://localhost:3000/users", {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => data.forEach(user => createNodeForUser(container, user)));
})

// helper function to create a node for each user
const createNodeForUser = (targetElement, data) => {
    targetElement.insertAdjacentHTML("afterbegin", `
        <div class="user-profile">
            <h3>${data.name}</h3>
            <p>Admin: ${data.admin}</p>
        </div>
    `)
}