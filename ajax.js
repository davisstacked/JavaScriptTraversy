document.getElementById('button1').addEventListener('click', loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

//  Optional - used for spinners/loaders
  xhr.onprogress = function () {
    
  }

  xhr.onload = function () {
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function () {
    console.log('Request error...');
  }

  xhr.send();

  // HTTP Statuses

}