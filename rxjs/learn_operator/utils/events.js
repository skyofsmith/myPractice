const print = (el, message) => {
  console.log(message);
  const div = document.createElement('div');
  div.innerHTML = typeof message !== 'string' ? JSON.stringify(message) : message;
  el.append(div);
};

const getEl = el => {
  if (typeof el === 'string') {
    return document.querySelector(el);
  } else {
    return el;
  }
};
const bindEvent = (el, eventType, callback) => {
  let ele = getEl(el);
  if (ele) {
    ele.addEventListener(eventType, callback);
  }
};

export const clickAndPrint = (clickEl, printEl, callback) => {
  const printFunc = print.bind(null, getEl(printEl));
  bindEvent(clickEl, 'click', () => {
    callback.call(null, printFunc)
  });
};
