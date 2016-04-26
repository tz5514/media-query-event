'use strict';

var settingRange = function settingRange() {
  var oldStyle = document.getElementById('tz5514-media-query-event-setting');
  if (oldStyle) {
    oldStyle.remove();
  }
  var style = document.createElement('style');
  style.id = 'tz5514-media-query-event-setting';
  style.innerHTML = 'body {\n    animation-duration: 0.001s;\n  }\n  @media screen and (max-width: 767px) {\n    body {\n      animation-name: xs;\n    }\n  }\n  @media screen and (min-width: 768px) and (max-width: 991px) {\n    body {\n      animation-name: sm;\n    }\n  }\n  @media screen and (min-width: 992px) and (max-width: 1199px) {\n    body {\n      animation-name: md;\n    }\n  }\n  @media screen and (min-width: 1200px) {\n    body {\n      animation-name: lg;\n    }\n  }\n\n  @keyframes xs {\n    from {\n      clip: rect(1px, auto, auto, auto);\n    }\n    to {\n      clip: rect(0px, auto, auto, auto);\n    }\n  }\n  @keyframes sm {\n    from {\n      clip: rect(1px, auto, auto, auto);\n    }\n    to {\n      clip: rect(0px, auto, auto, auto);\n    }\n  }\n  @keyframes md {\n    from {\n      clip: rect(1px, auto, auto, auto);\n    }\n    to {\n      clip: rect(0px, auto, auto, auto);\n    }\n  }\n  @keyframes lg {\n    from {\n      clip: rect(1px, auto, auto, auto);\n    }\n    to {\n      clip: rect(0px, auto, auto, auto);\n    }\n  }\n  ';
  document.head.appendChild(style);
};

module.exports = {
  bind: function bind() {
    settingRange();
    var firstFlag = true;
    var queryLast;

    var args = arguments;

    document.addEventListener('animationend', function (event) {
      //排除不相關的動畫
      if (event.animationName != 'xs' && event.animationName != 'sm' && event.animationName != 'md' && event.animationName != 'lg') {
        return;
      }

      if (typeof args[2] == 'boolean' && args[2]) {
        firstFlag = false;
      }

      //第一次載入頁面時不進行callback
      if (firstFlag) {
        firstFlag = false;
        queryLast = event.animationName;
        return;
      }

      if (typeof args[0] === 'string') {
        //如果input只有一種query且與當前的符合的話 進行callback
        if (event.animationName == args[0]) {
          args[1]();
        }
      } else if (Array.isArray(args[0])) {
        //如果前一個query狀態是input中的其中一種的話 不進行callback
        for (var key in args[0]) {
          if (queryLast == args[0][key]) {
            queryLast = event.animationName;
            return;
          }
        }
        //如果這次的query狀態是input中的其中一種的話 進行callback
        for (var key in args[0]) {
          if (event.animationName == args[0][key]) {
            args[1]();
          }
        }
      }
      queryLast = event.animationName;
    }, false);
  },
  setting: function setting(data) {
    settingRange(data);
  }
};
