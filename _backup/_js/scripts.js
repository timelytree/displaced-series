(function() {
  var throttle = function(type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function() {
      if (running) { return; }
      running = true;
       requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  throttle("resize", "optimizedResize");
})();

function paintImage() {
  var img = gA(page, 'img');

  Caman("#canvas", '/assets/uploads/large/'+img+'', function () {
    this.resize({ width: window.innerWidth, height: window.innerHeight });
    this.stackBlur(50);
    this.render();
  });
}

function canvasINIT() {
  //Create the renderer
  var wrapper = cE('wrapper')[0],
      container = cE('container')[0],
      canvas = E('canvas'),
      ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  paintImage();
}

function menuINT() {
  var menuB = E('menuB'),
      overlay = E('overlay');

  menuB.onclick = function() { addC(container, 'active'); }
  overlay.onclick = function() { remC(container, 'active'); }
}

function storyItemINT() {
  var items = cE('storyITEM'),
      timer = null;

  for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
      var link = gA(this, 'link');
      remC(container, 'active');
      timer = window.setTimeout(function() {
        window.location.href = link;
      }, 400);
    }
  }
}

function navINT() {
  var items = cE('menuLINK'),
      timer = null;

  for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
      var link = gA(this, 'link'),
          tab = gA(this, 'tab');
      remC(container, 'active');
      console.log(tab);
      timer = window.setTimeout(function() {
        if (tab == '_blank') {
          window.open(link, '_blank');
        } else {
          window.location.href = link;
        }
      }, 400);
    }
  }
}

function instagramINIT() {
  var feed = new Instafeed({
    accessToken: '4026789722.1677ed0.28056be8b2f648579bff2ef036629825',
    get: 'user',
    userId: '5837355316',
    limit: 6,
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    resolution: 'low_resolution'
  });
  feed.run();
}

document.addEventListener('DOMContentLoaded', function() {
  container = cE('container')[0];
  page = cE('page')[0];
  canvasINIT();
  menuINT();
  storyItemINT();
  navINT();
  if (page.id == 'aboutPAGE') { instagramINIT(); }
});

window.addEventListener("optimizedResize", function() {
  paintImage();
});
