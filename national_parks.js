"use strict"
//console.log(nationalParksArray);
//check if the array is accesable
//smoketest
// nationalParksArray.forEach(nationalParksArray=>{
//     console.log(nationalParksArray.Location);
//     console.log(nationalParksArray.City);
// });

const locationSelector = document.getElementById('locationSelector');
console.log(locationSelector)
// create options and append it to the location selector

nationalParksArray.forEach((location)=> {
    const option = new Option(location.LocationName, location.LocationID);
   locationSelector.appendChild(option);
   //console.log(option)//smoketest
});