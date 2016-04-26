var mediaQueryEvent = require('./../index.js');

mediaQueryEvent.bind(['xs', 'sm'], function() {
  document.body.innerHTML = 'Mobile';
});


mediaQueryEvent.bind(['md', 'lg'], function() {
  document.body.innerHTML = 'Desktop';
}, true);

//
// mediaQueryEvent.bind('sm', function() {
//   document.body.innerHTML = 'sm';
// }, true);
//
// mediaQueryEvent.bind('md', function() {
//   document.body.innerHTML = 'md';
// }, true);
//
// mediaQueryEvent.bind('lg', function() {
//   document.body.innerHTML = 'lg';
// }, true);
