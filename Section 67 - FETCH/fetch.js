document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);


// Get local text file data
function getText() {
  fetch('test.txt')
    .then(res => {
      return res.text();
    })
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => {
      console.log(err);
    });
}

//  Get from JSON
function getJson() {
  fetch('posts.json')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    })
}

//  Get from External API

function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => {
      return res.text();
    })
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    })
}
