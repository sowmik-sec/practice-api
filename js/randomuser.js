const loadRandomUser = () => {
  fetch(`https://randomuser.me/api/?results=1`)
    .then((res) => res.json())
    .then((data) => displayRandomUser(data));
};

const displayRandomUser = (user) => {
  console.log(user.results[0]);
  const randomUser = document.getElementById("random-user");
  randomUser.innerHTML = ``;
  const userDiv = document.createElement("div");
  userDiv.classList.add("card");
  userDiv.classList.add("container");
  userDiv.style = "width:25rem;";
  userDiv.innerHTML = `
    <img src="${user.results[0].picture.large}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}</h5>
      <p class="card-text">
      ${user.results[0].location.street.number}, ${user.results[0].location.street.name}, ${user.results[0].location.city}, ${user.results[0].location.country}
        
      </p>
      
    </div>
    `;
  randomUser.appendChild(userDiv);
};

const generateNewUser = () => {
  loadRandomUser();
};
