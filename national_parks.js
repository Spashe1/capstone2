"use strict"
console.log('hey hey');
//console.log(nationalParksArray);
//check if the array is accesable
//smoketest
// nationalParksArray.forEach(nationalParksArray=>{
//     console.log(nationalParksArray.Location);
//     console.log(nationalParksArray.City);
// });
// get radio buttons by their ID
const locationBtn = document.getElementById('locationBtn'); //call htmlelements by id and assigned them to a var
const parkTypeBtn = document.getElementById('parkTypeBtn');
const resetBtn = document.getElementById('resetBtn')
 //smoketest
//  locationbtn.addEventListener('click', function(){
//     console.log('clicked')
//  });
//  parkTypeBtn.addEventListener('change', function(){
//     console.log('changed')
//  })
const locationDropdownContainer = document.getElementById('locationDropdownContainer');
const parkTypeDropdownContainer = document.getElementById('parkTypeDropdownContainer');
const locationDropdown = document.getElementById('locationDropdown');//dd lists
const parkTypeDropdown = document.getElementById('parkTypeDropdown');
const searchResultsContainer = document.getElementById('searchResultsContainer');
console.log(searchResultsContainer)
//smoketest
// console.log(locationDropdownContainer);
// console.log(parkTypeDropdownContainer);
// console.log(locationDropdown);
// console.log(parkTypeDropdown);


locationDropdownContainer.style.display = 'none';//hides the ddConts until a radbtn is clicked
parkTypeDropdownContainer.style.display = 'none';//^ 
//add event listeners to the radbtns
locationBtn.addEventListener('change', function() {
    if (locationBtn.checked){
       console.log('location radio button checked');
        //show/hide dropdowns
        locationDropdownContainer.style.display = 'block';
        parkTypeDropdownContainer.style.display = 'none';
       
    }
});

parkTypeBtn.addEventListener('change', function(){
    if(parkTypeBtn.checked){
     console.log('Park Type radio button  checked');
        //show park type DD and hide location DD
        locationDropdownContainer.style.display = 'none';
        parkTypeDropdownContainer.style.display = 'block';
    }
});

//location dropdown- function to add options to the location DD
function popLocationDropdown(){
    locationDropdown.innerHTML = ''; //empty all prev added options inside dd so i can add new options to the dd

// create a select a location option
const defaultOption = document.createElement('option');
defaultOption.value ='';// empty value b/c when you click on select a location we dont want anything to display
defaultOption.textContent = 'Select a location';
locationDropdown.appendChild(defaultOption);
console.log(defaultOption)
//add options from the locationData array.

for(let i =  0; i < locationsArray.length; i++){
    const option = document.createElement('option');
    option.value = locationsArray[i];
    option.textContent = locationsArray[i];
    locationDropdown.appendChild(option);
   // console.log(locationsArray[i])
}
}
 popLocationDropdown()//call the functions to populate the DDs

 // event listener for location DD// when a location is selected , do this
locationDropdown.addEventListener('change', function() {
    const selectedLocation = locationDropdown.value;
    // filter() checks each park obj in the nationalparray and checks if the lowercase state property matches the lowercase selected location.
    const filteredParks = nationalParksArray.filter(park => park.State.toLowerCase() === selectedLocation.toLowerCase());
    displaySearchResults(filteredParks);// filtered parks are the ones that match the selected loc
  });
  
// // //smoketest
console.log(locationDropdown);
console.log(locationDropdown.options);
// //populate park type DD
function popParkTypeDropdown(){
    //clear existing options
    parkTypeDropdown.innerText = '';

    // create a select a parktype option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select a park type';
    parkTypeDropdown.appendChild(defaultOption);
    console.log(defaultOption)
  
    // Add options from the parkTypesArray
    for (let i = 0; i < parkTypesArray.length; i++) {
      const option = document.createElement('option');
      option.value = parkTypesArray[i];
      option.textContent = parkTypesArray[i];
      parkTypeDropdown.appendChild(option);
    }
    console.log(parkTypesArray)
  }
//   
  popParkTypeDropdown();//call the functions to populate the DDs
 

// function to display search results
function displaySearchResults(parks) {
  
    // clear previous search results
    searchResultsContainer.innerHTML = '';
  
//    // Display detailed information for each park
//    parks.forEach((park) => {
//     const parkInfo = document.createElement('div');

//     // Create elements for park information
//     const locationName = document.createElement('h3');
//     locationName.textContent = park.LocationName;
//     parkInfo.appendChild(locationName);

//     const address = document.createElement('p');
//     address.textContent = `Address: ${park.Address}`;
//     parkInfo.appendChild(address);

//     const city = document.createElement('p');
//     city.textContent = `City: ${park.City}`;
//     parkInfo.appendChild(city);

//     const state = document.createElement('p');
//     state.textContent = `State: ${park.State}`;
//     parkInfo.appendChild(state);

//     const zipCode = document.createElement('p');
//     zipCode.textContent = `Zip: ${park.ZipCode}`;
//     parkInfo.appendChild(zipCode);

//     const phone = document.createElement('p');
//     phone.textContent = `Phone: ${park.Phone}`;
//     parkInfo.appendChild(phone);

//     // Add park information to the search results container
//     searchResultsContainer.appendChild(parkInfo);
//   });
  //table
  const table = document.createElement('table');

  //  table header
  const headerRow = document.createElement('tr');
  const headers = ['Location Name', 'Address', 'City', 'State', 'Zip', 'Phone'];
  headers.forEach((headerText) => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  //  table rows for each park
  parks.forEach((park) => {
    
    const parkRow = document.createElement('tr');

    // table cells for each park property
    const locationNameCell = document.createElement('td');
    locationNameCell.textContent = park.LocationName;
    parkRow.appendChild(locationNameCell);

    const addressCell = document.createElement('td');
    addressCell.textContent = park.Address;
    parkRow.appendChild(addressCell);

    const cityCell = document.createElement('td');
    cityCell.textContent = park.City;
    parkRow.appendChild(cityCell);

    const stateCell = document.createElement('td');
    stateCell.textContent = park.State;
    parkRow.appendChild(stateCell);

    const zipCodeCell = document.createElement('td');
    zipCodeCell.textContent = park.ZipCode;
    parkRow.appendChild(zipCodeCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = park.Phone;
    parkRow.appendChild(phoneCell);

    // add the row to the table
    table.appendChild(parkRow);
  });

  // add the table to the search results container
  searchResultsContainer.appendChild(table);
  searchResultsContainer.style.display = 'block'; //show

}
// **function to display park information based on selected park type**
function displayParkInfo(selectedParkType) {
  
    // clear previous park information
    searchResultsContainer.innerHTML = '';
  
    // filter parks based on selected park type
    //.includes(selectedParkType.toLowerCase()) checks if the lowercase 
    //selectedParkType value is included in the lowercase LocationName of the park. 
    //The includes()method returns true if the substring is found, and false otherwise.
    const filteredParks = nationalParksArray.filter(park => park.LocationName.toLowerCase().includes(selectedParkType.toLowerCase()));
  
    // // check if any parks match the selected park type
    // if (filteredParks.length === 0) {
    //   const message = document.createElement('p');
    //   message.textContent = 'No parks found for the selected park type.';
    //   searchResultsContainer.appendChild(message);
    // } else {
    //   // display park information for each matching park
    //   filteredParks.forEach(park => {
    //     const parkInfo = document.createElement('div');
        
    //     //  createElements for location information
    //     const locationName = document.createElement('h3');
    //     locationName.textContent = park.LocationName;
    //     parkInfo.appendChild(locationName);
  
    //     const address = document.createElement('p');
    //     address.textContent = `Address: ${park.Address}`;
    //     parkInfo.appendChild(address);
  
    //     const city = document.createElement('p');
    //     city.textContent = `City: ${park.City}`;
    //     parkInfo.appendChild(city);
  
    //     const state = document.createElement('p');
    //     state.textContent = `State: ${park.State}`;
    //     parkInfo.appendChild(state);
  
    //     const zipCode = document.createElement('p');
    //     zipCode.textContent = `Zip Code: ${park.ZipCode}`;
    //     parkInfo.appendChild(zipCode);
  
    //     const phone = document.createElement('p');
    //     phone.textContent = `Phone: ${park.Phone}`;
    //     parkInfo.appendChild(phone);
  
    //     // add park information to the search results container
    //     searchResultsContainer.appendChild(parkInfo);
    //    // console.log(parkInfo)
    //    searchResultsContainer.style.display = 'block'; //show
    //   });
    // } 

    //create table
    const table = document.createElement('table');
    // t header
    const headerRow = document.createElement('tr');
    const headers = ['Location Name', 'Address', 'City', 'State', 'Zip Code' /*'Phone'*/];
    headers.forEach(headerText => {
      const headerCell = document.createElement('th');
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    //disp park info for each matching park
    filteredParks.forEach((park)=> {
      const parkRow = document.createElement('tr');

      // create tbl cells for each park property
      const locationNameCell = document.createElement('tr');
      locationNameCell.textContent = park.LocationName;
      parkRow.appendChild(locationNameCell);

      const addressCell = document.createElement('td');
     addressCell.textContent = park.Address;
     parkRow.appendChild(addressCell);

     const cityCell = document.createElement('td');
     cityCell.textContent = park.City;
     parkRow.appendChild(cityCell);

     const stateCell = document.createElement('td');
     stateCell.textContent = park.State;
     parkRow.appendChild(stateCell);

     const zipCodeCell = document.createElement('td');
     zipCodeCell.textContent = park.ZipCode;
      parkRow.appendChild(zipCodeCell);

     // add park row to table
     table.appendChild(parkRow);
      
    });
    //add tbl to the search results cont
    searchResultsContainer.appendChild(table);
    searchResultsContainer.style.display = 'block'; //show
  }
  

// Event listener for park type dropdown
parkTypeDropdown.addEventListener('change', function() {
  const selectedParkType = parkTypeDropdown.value;
  displayParkInfo(selectedParkType);
  console.log(selectedParkType)
});
resetBtn.addEventListener('click', function() {
  console.log('clicked')
  // clear the search results container
  searchResultsContainer.innerHTML = '';
  
  
  // reset the radio buttons
  locationBtn.checked = false;
  parkTypeBtn.checked = false;
  
  // reset the dropdowns
  locationDropdown.selectedIndex = 0;
  parkTypeDropdown.selectedIndex = 0;
  
  // hide dd
  locationDropdownContainer.style.display = 'none';
  parkTypeDropdownContainer.style.display = 'none';
  searchResultsContainer.style.display ='none'
});
//