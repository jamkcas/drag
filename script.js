function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.className);
}

function dragEnd(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData('text/plain');

  if(e.target.className.match(/listItem/)) {
    var y = e.clientY || e.pageY;
    if(y < e.target.offsetTop + (e.target.clientHeight / 2)) {
      e.target.parentNode.insertBefore(document.getElementsByClassName(data)[0], e.target);
    } else {
      if(e.target.nextSibling) {
        e.target.parentNode.insertBefore(document.getElementsByClassName(data)[0], e.target.nextSibling);
      } else {
        e.target.parentNode.appendChild(document.getElementsByClassName(data)[0]);
      }
    }
  } else if(e.target.className.match(/itemList/)) {
    e.target.appendChild(document.getElementsByClassName(data)[0]);
  }
}

function dragAllow(e) {
  e.preventDefault();
}