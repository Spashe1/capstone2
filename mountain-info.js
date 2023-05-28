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
    const mountain= mountainsArray.find((mount) => mount.name === selectedMountain);
    //checks if the name property of each mountain object(mount) === selected mountain value
    //if the mountain is found if() will run
    if (mountain){
        mountainInfoContainer.innerHTML = '';// clears the mountInfoCont so it can display the info of the selected mount if it exists in the mountsarray

    }
    const mountainName = document.createElement('h4');
    mountainName.textContent =  mountain.name; //'Mounatain Name:' +
    mountainInfoContainer.appendChild(mountainName);

    const description = document.createElement('h4');
    description.textContent = 'Description:' + mountain.desc;
    mountainInfoContainer.appendChild(description);

    const elevation = document.createElement('h4');
    elevation.textContent = 'Elevation: ' + mountain.elevation + ' feet';
    mountainInfoContainer.appendChild(elevation);

    //add pics
    const image = document.createElement('img');
    image.src = "images/" + mountain.img;
    image.alt = mountain.name;
    mountainInfoContainer.appendChild(image);// append the elements to the mountain info container
    console.log(image)
    
})
//resetbtn1 event lis
resetBtn2.addEventListener('click', function(){
    console.log('clicked')
    mountainSelector.selectedIndex = 0; // resets selected options
    mountainInfoContainer.innerHTML = ''; //clears the DD
})
