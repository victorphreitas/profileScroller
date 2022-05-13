const data = [
  {
    name: 'John Nash',
    age: 33,
    gender: 'male',
    lookingfor: 'female',
    location: 'Milan IT',
    image: 'https://randomuser.me/api/portraits/men/47.jpg'
  },
  {
    name: 'Danilo Costa',
    age: 30,
    gender: 'male',
    lookingfor: 'female',
    location: 'Milan IT',
    image: 'https://randomuser.me/api/portraits/men/48.jpg'
  },
  {
    name: 'Katia Straider',
    age: 27,
    gender: 'female',
    lookingfor: 'male',
    location: 'Milan IT',
    image: 'https://randomuser.me/api/portraits/women/47.jpg'
  },
  {
    name: 'Angela Yu',
    age: 29,
    gender: 'female',
    lookingfor: 'male',
    location: 'Milan IT',
    image: 'https://randomuser.me/api/portraits/women/48.jpg'
  },
  {
    name: 'Ayrton Senna',
    age: 30,
    gender: 'male',
    lookingfor: 'female',
    location: 'Milan IT',
    image: 'https://randomuser.me/api/portraits/men/49.jpg'
  },
  {
    name: 'Carla Jobs',
    age: 25,
    gender: 'female',
    lookingfor: 'male',
    location: 'Milan IT',
    image: 'https://randomuser.me/api/portraits/women/19.jpg'
  }
] 

//Profile iterator
const profileIterator = arr => {
  let nextIndex = 0

  return {
    next: () => {
      return nextIndex < arr.length ? 
      {value: arr[nextIndex++], done: false} :
      {done: true};
    }
  } 
};

let profiles = profileIterator(data)
//call the first person manually
nextProfile()

// Next Event 
const button = document.querySelector('#next')

button.addEventListener('click', nextProfile)


function nextProfile() {
  
  let currentProfile = profiles.next().value

  if (currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li> 
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Locatio: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>
    `;
  
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
    `
  } else {
    window.location.reload();
  }

};


// function nextProfile() {
//   // let currentProfile = profiles.next().value

//   //fetching data using Jquery
//   $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(info) {
    
//       const dataArr = info.results;

//       if (dataArr.length){
//         let lookingfor;
//         let personName = dataArr[0].name.title + " " + dataArr[0].name.first + " " + dataArr[0].name.last
//         let cityState = dataArr[0].location.city + " " + dataArr[0].location.state
//         if (dataArr[0].gender === 'male'){
//           lookingfor = "female"
//         } else {
//           lookingfor = "male"
//         }
//         document.getElementById('profileDisplay').innerHTML = `
//         <ul class="list-group">
//           <li class="list-group-item">Name: ${personName}</li> 
//           <li class="list-group-item">Age: ${dataArr[0].dob.age}</li>
//           <li class="list-group-item">Location: ${cityState}</li>
//           <li class="list-group-item">Preference: ${dataArr[0].gender} looking for ${lookingfor}</li>
//         </ul>
//         `;
    
//         document.getElementById('imageDisplay').innerHTML = `
//         <img src="${dataArr[0].picture.large}">
//         `
//       } else {
//         window.location.reload(); 
  
//       }
//     } 
//   });
// }



