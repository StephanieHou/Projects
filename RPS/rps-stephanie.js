document.addEventListener('DOMContentLoaded', (event) => {
    var inp = document.querySelector('#inp');
    var buttonpr = document.querySelector('#pr');
    var buttonpp = document.querySelector('#pp');
    var buttonps = document.querySelector('#ps');
    var userChoice = document.querySelector('#uc');
    var compChoice = document.querySelector('#cc');
    var result = document.querySelector('#result');
    var wins = document.querySelector('#tWin');
    var losses = document.querySelector('#tLose');
    var ties = document.querySelector('#tTie');

    var globalBlob = null;

    buttonpr.addEventListener('click', (event) => {
        console.log('button clicked');
        fetch('http://codyhess.com:9001/rock/' + inp.value, {
            method: 'GET',
            mode: 'cors'
        })
            .then(function (response) {
                //console.log(response);
                return response.json();
            })
            .then(function (myBlob) {
                globalBlob = myBlob;
                userChoice.innerText = "User Chooses: " + myBlob.user;
                compChoice.innerText = "Computer Chooses: " + myBlob.ai;
                result.innerText = "Result: " + myBlob.result;
                console.log(inp.value)
                if (inp.value !== "") {
                    wins.innerText = "Total Wins: " + myBlob.stats.win
                    losses.innerText = "Total Losses: " + myBlob.stats.lose
                    ties.innerText = "Total Ties: " + myBlob.stats.tie
                }
                else {
                    wins.innerText = null;
                    losses.innerText = null;
                    ties.innerText = null;
                }
            });
    })

    buttonpp.addEventListener('click', (event) => {
        fetch('http://codyhess.com:9001/paper/' + inp.value, {
            method: 'GET',
            mode: 'cors'
        })
            .then(function (response) {
                //console.log(response);
                return response.json();
            })
            .then(function (myBlob) {
                globalBlob = myBlob;
                userChoice.innerText = "User Chooses: " + myBlob.user;
                compChoice.innerText = "Computer Chooses: " + myBlob.ai;
                result.innerText = "Result: " + myBlob.result;
                console.log(inp.value)
                if (inp.value !== "") {
                    wins.innerText = "Total Wins: " + myBlob.stats.win
                    losses.innerText = "Total Losses: " + myBlob.stats.lose
                    ties.innerText = "Total Ties: " + myBlob.stats.tie
                }
                else {
                    wins.innerText = null;
                    losses.innerText = null;
                    ties.innerText = null;
                }
            });
    })

    buttonps.addEventListener('click', (event) => {
        console.log('button clicked');
        fetch('http://codyhess.com:9001/scissors/' + inp.value, {
            method: 'GET',
            mode: 'cors'
        })
            .then(function (response) {
                //console.log(response);
                return response.json();
            })
            .then(function (myBlob) {
                globalBlob = myBlob;
                userChoice.innerText = "User Chooses: " + myBlob.user;
                compChoice.innerText = "Computer Chooses: " + myBlob.ai;
                result.innerText = "Result: " + myBlob.result;
                if (inp.value !== "") {
                    wins.innerText = "Total Wins: " + myBlob.stats.win
                    losses.innerText = "Total Losses: " + myBlob.stats.lose
                    ties.innerText = "Total Ties: " + myBlob.stats.tie
                }
                else {
                    wins.innerText = null;
                    losses.innerText = null;
                    ties.innerText = null;
                }
            });
    })
}) ``