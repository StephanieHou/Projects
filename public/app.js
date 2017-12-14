document.addEventListener('DOMContentLoaded', () => {
  console.log('hello world');

  let modP = document.querySelector('#modP');
  let upper = document.querySelector('#upper');
  let lower = document.querySelector('#lower');
  let length = document.querySelector('#length');
  let reverse = document.querySelector('#reverse');
  var inp = document.querySelector('#input');
  var globalBlob = null;

  upper.addEventListener('click', (event) => {
    console.log('button clicked');
    fetch('http://localhost:3000/upper/' + inp.value, {
        method: 'GET',
        mode: 'cors'
    })
        .then(function (response) {
            //console.log(response);
            return response.json();
        })
        .then(function (myBlob) {
            globalBlob = myBlob;
            modP.innerText = myBlob.result;
        });
})
lower.addEventListener('click', (event) => {
  console.log('button clicked');
  fetch('http://localhost:3000/lower/' + inp.value, {
      method: 'GET',
      mode: 'cors'
  })
      .then(function (response) {
          //console.log(response);
          return response.json();
      })
      .then(function (myBlob) {
          globalBlob = myBlob;
          modP.innerText = myBlob.result;
      });
})

length.addEventListener('click', (event) => {
  console.log('button clicked');
  fetch('http://localhost:3000/length/' + inp.value, {
      method: 'GET',
      mode: 'cors'
  })
      .then(function (response) {
          //console.log(response);
          return response.json();
      })
      .then(function (myBlob) {
          globalBlob = myBlob;
          modP.innerText = myBlob.result;
      });
})
reverse.addEventListener('click', (event) => {
  console.log('button clicked');
  fetch('http://localhost:3000/reverse/' + inp.value, {
      method: 'GET',
      mode: 'cors'
  })
      .then(function (response) {
          //console.log(response);
          return response.json();
      })
      .then(function (myBlob) {
          globalBlob = myBlob;
          modP.innerText = myBlob.result;
      });
})

});
