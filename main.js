var settingRange = function(){
  var oldStyle = document.getElementById('tz5514-media-query-event-setting');
  if (oldStyle){
    oldStyle.remove();
  }
  var style = document.createElement('style');
  style.id = 'tz5514-media-query-event-setting';
  style.innerHTML = `body {
    animation-duration: 0.001s;
  }
  @media screen and (max-width: 767px) {
    body {
      animation-name: xs;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    body {
      animation-name: sm;
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    body {
      animation-name: md;
    }
  }
  @media screen and (min-width: 1200px) {
    body {
      animation-name: lg;
    }
  }

  @keyframes xs {
    from {
      clip: rect(1px, auto, auto, auto);
    }
    to {
      clip: rect(0px, auto, auto, auto);
    }
  }
  @keyframes sm {
    from {
      clip: rect(1px, auto, auto, auto);
    }
    to {
      clip: rect(0px, auto, auto, auto);
    }
  }
  @keyframes md {
    from {
      clip: rect(1px, auto, auto, auto);
    }
    to {
      clip: rect(0px, auto, auto, auto);
    }
  }
  @keyframes lg {
    from {
      clip: rect(1px, auto, auto, auto);
    }
    to {
      clip: rect(0px, auto, auto, auto);
    }
  }
  `;
  document.head.appendChild(style);
}

module.exports = {
  bind: function() {
    settingRange();
    var firstFlag = true;
    var queryLast;

    var args = arguments;

    document.addEventListener('animationend', function(event) {
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
            queryLast = event.animationName
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
  setting: function(data) {
    settingRange(data);
  }
}
