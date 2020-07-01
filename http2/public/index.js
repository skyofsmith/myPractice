let h1 = document.createElement('h1');
h1.innerHTML = 'welcome to http2 test';
document.body.append(h1);



function getImageAndThenAppendToBody(index) {
  fetch('./ohmyzsh.png?index=' + index)
    .then(res => {
      return res.blob();
    })
    .then(res => {
      const img = new Image()
      let objectURL = URL.createObjectURL(res);
      img.src = objectURL;
      const div = document.createElement('div');
      const span = document.createElement('span');
      span.innerText = index;
      div.append(span);
      div.append(img);
      document.body.append(div);
    })
}

for (let i = 0; i < 100; i++) {
  getImageAndThenAppendToBody(i)
}