"use strict"
//smoketest
console.log('hey')
// console.log(mountainsArray);
// mountainsArray.forEach(mountainsArray => {
//     console.log(mountainsArray.name);
//     console.log(mountainsArray.desc);
// })
const mountainSelector = document.getElementById('mountainSelector');
const mountainInfoContainer = document.getElementById('mountainInfoContainer');
const resetBtn2 = document.getElementById('resetBtn');


//load DD with mountain options
mountainsArray.forEach((mountain)=> {
    const option = document.createElement('option')
    option.value = mountain.name;
    option.textContent = mountain.name;
    mountainSelector.appendChild(option);
    //console.log(option)
});

//eventlistener 
mountainSelector.addEventListener('change', function(){
    const selectedMountain = mountainSelector.value;

    console.log(selectedMountain)
    //find selected mount in the array
    const mountain= mountainsArray.find((m) => m.name === selectedMountain);
    if (mountain){
        mountainInfoContainer.innerHTML = '';

    }
    const mountainName = document.createElement('h4');
    mountainName.textContent =  mountain.name; //'Mounatain Name:' +

    const description = document.createElement('h4');
    description.textContent = 'Description:' + mountain.desc;

    const elevation = document.createElement('h4');
    elevation.textContent = 'Elevation: ' + mountain.elevation + ' feet';

    //add pics
    const image = document.createElement('img');
    image.src = "images/" + mountain.img;
    image.alt = mountain.name;
    console.log(image)
    // Append the elements to the mountain info container
    mountainInfoContainer.appendChild(mountainName);
    mountainInfoContainer.appendChild(description);
    mountainInfoContainer.appendChild(elevation);
    mountainInfoContainer.appendChild(image);
})
//resetbtn1 event lis
resetBtn2.addEventListener('click', function(){
    console.log('clicked')
    mountainSelector.selectedIndex = 0; // resets selected options
    mountainInfoContainer.innerHTML = ''; //clears the DD
})
