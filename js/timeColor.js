var appTimeColor = {

  timeContainer : document.getElementById('time'),
  hour : document.getElementById('hour'),
  min : document.getElementById('min'),
  sec : document.getElementById('sec'),
  colon1 : document.getElementById('colon1'),
  colon2 : document.getElementById('colon2'),
  showColon: true,

  init: function() {
    return this.clock();
  },
  clock: function() {
    var self = this;
    var now = new Date(),
        h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds();

    m = self.checkTime(m);
    s = self.checkTime(s);

    var t = setTimeout(function(){
      self.clock()
    }, 1000);
    this.updateTime(h,m,s);
    // this.createColon() + this.createTimeElement(m) + this.createColon() + this.createTimeElement(s); 
    return self.makeHexCode(h, m, s);
  },

  updateTime: function (h,m,s) {
    this.hour.innerHTML = h;
    this.colon1.innerHTML = ':';
    this.min.innerHTML = m;
    this.colon2.innerHTML = ':';
    this.sec.innerHTML = s;
    this.blinkingColon();
  },
  checkTime: function(i) {
    if(i < 10) {
      i = "0" + i;
    }
    return i;
  },
  makeHexCode: function(h, m, s) {
    var hexcode = '#' + h + m + s;
    document.body.bgColor = hexcode;
    document.getElementById('hexCode').innerHTML = hexcode;
  },

  blinkingColon: function () {
    this.showColon = !this.showColon;
    if (this.showColon) {
    colon1.setAttribute('style', 'visibility:hidden');
    colon2.setAttribute('style', 'visibility:hidden');
    } else {
    colon1.setAttribute('style', 'visibility:visible');
    colon2.setAttribute('style', 'visibility:visible');
    }
  }
};

window.onload = appTimeColor.init();




