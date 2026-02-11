const container = document.getElementById("profession-cards");
professions.forEach(prof => {
const card = document.createElement("div");
card.classList.add("card");
card.innerHTML = `<img src="${prof.image}" alt="${prof.name}"><h3>${prof.name}</h3><button onclick="selectProfession('${prof.name}')">Select</button>`;
container.appendChild(card);
});
function selectProfession(profession) {
localStorage.setItem("selectedProfession", profession);
window.location.href = "job.html";
}