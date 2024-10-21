var animalContainer = document.getElementById('animal-info')
var btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0])
    };
    ourRequest.send();
})

function renderHTML(data){
    var htmlString="This is a test (Diddy)"
    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}