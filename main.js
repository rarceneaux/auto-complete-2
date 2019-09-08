const targetInput = document.getElementById('team'),
results = document.getElementById('auto-results'),
classList = ['Titans','Colts','Texans','Jags','Raiders','Chiefs','Broncos','Chargers'];
matches = [];

targetInput.focus();


targetInput.addEventListener('keyup', function (event){
  








  results.innerHTML = '';
  toggleResults ('hide');

  if (this.value.length > 0){
    matches = getMatches(this.value);

    if(this.matches.length > 0){
      displayMatches(matches);
    }
  }

});


// Enter: 13
// Arrow up :38
// Arrow down: 40

const toggleResults = (action) =>{
  if(action === 'show'){
    results.classList.add ('visible');
    } else if  (action === 'hide'){
      results.classList.remove('visible');
    }
}

const getMatches = (inputText) => {
  let matchList = [];
  for (let i=0; i<classList.length;i++){
    if(classList[i].toLowerCase().indexOf(inputText.toLowerCase() ) != -1){
matchList.push(classList[i]);
    }
  }
  return matchList;
}

function displayMatches(matchList) {
  let j = 0;

  while (j < matchList.length){
    results.innerHTML += `<li class="results">` + matchList[j] + `</li>`;
    j++;
  }
  toggleResults('show');
}