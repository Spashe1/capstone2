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
    const mountainName = document.createElement('h3');
    mountainName.textContent = mountain.name;

    const description = document.createElement('p');
    description.textContent = mountain.desc;

    const elevation = document.createElement('p');
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

