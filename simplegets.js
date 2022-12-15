


fetch('https://api.wolvesville.com/items/avatarItems/', {
    method: 'GET',
    headers: {
        'Authorization': 'Bot <api key>',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });