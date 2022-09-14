(function () {

  "use static";

  const el = document.createElement('section');

  el.setAttribute('id', 'app');
  el.innerHTML = "add content...";

  document.body.appendChild(el);

  return function(callback) {
    callback && callback();
  }

}) ();