let h1 = document.createElement('h1');
h1.innerHTML = 'welcome to http2 test';
document.body.append(h1);



function getImageAndThenAppendToBody(index) {
  fetch('./ohmyzsh.png?index=' + index)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
    })
}

for (let i = 0; i < 100; i++) {
  getImageAndThenAppendToBody(i)
}