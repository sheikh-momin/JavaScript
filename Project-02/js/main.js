const mailestoneData = JSON.parse(data).data;

function loadMailestones() {
    const mailestones = document.querySelector('.mailestones');

    mailestones.innerHTML = `${
        mailestoneData.map(function(milestone) {
            return `<div class="milestone border-b" id ="${milestone._id}>
         <div class="flex">
             <div class="checkbox"><input type="checkbox" onclick="markMilestone(this,${milestone._id})"/></div>
             <div onclick = "openMilestone(this, ${milestone._id})">
                 <p>
                     ${milestone.name}
                     <span><i class="fas fa-chevron-down"></i></span>
                 </p>
             </div>
         </div>
         <div class="hidden_panel">
             ${milestone.modules.map(function(module){
                return `<div class="module border-b">
                <p>Module Name</p>
            </div>`;
             }).join('')}
             </div>
         </div>`;
        })
        .join('')}`;
}

function openMilestone (milestoneElement, _id){
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector('.show');
    const active = document.querySelector('.active');

    milestoneElement.classList.toggle('active');

    if (active && !milestoneElement.classList.contains('active')) {
        active.classList.remove('active');
    }

    if(!currentPanel.classList.contains('show') && shownPanel)
    shownPanel.classList.remove('show');

    currentPanel.classList.toggle('show');

    showMailestone()
}

function showMailestone(id){
    const milestoneImage = document.querySelector('.mailestoneImage');
    const name= document.querySelector('.name');
    const details = document.querySelector('.details');

    milestoneImage.style.opacity = '0';
    milestoneImage.src = mailestoneData[id].image;
    name.innerText = mailestoneData[id].name;
    details.innerText = mailestoneData[id].description;
}
const milestoneImage = document.querySelector('.mailestoneImage');
milestoneImage.onload = function() {
    this.style.opacity = '1';
}

function markMilestone( checkbok,id){
    const doneList = document.querySelector(".doneList");
    const milestoneList =document.querySelector(".milestones");
    const item = document.getElementById("id");

    if (checkbok.checked) {
        milestoneList.removeChild(item);
        doneList.appendChild(item);
    } else {
        milestoneList.appendChild(item);
        doneList.removeChild(item);
    }
}


loadMailestones();