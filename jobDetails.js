const jobContainer = document.getElementById("job-cards");
const profession = localStorage.getItem("selectedProfession");
if(!profession){alert("No profession selected!");window.location.href="index.html";}else{
const selectedJobs = jobs[profession];
selectedJobs.forEach(job=>{
const card=document.createElement("div");
card.classList.add("card");
card.innerHTML=`<img src="${job.image}" alt="${job.title}"><h3>${job.title}</h3><p><strong>City:</strong> ${job.city}</p><p>${job.description}</p><button onclick="viewJobDetails('${job.title}')">View Details</button>`;
jobContainer.appendChild(card);
});
}
function viewJobDetails(jobTitle){
const job=jobs[profession].find(j=>j.title===jobTitle);
localStorage.setItem("selectedJob",JSON.stringify(job));
window.location.href="apply.html";
}