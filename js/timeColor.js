var appTimeColor = {
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
    document.getElementById('time').innerHTML = h + ' : ' + m + ' : ' + s; 
    return self.makeHexCode(h, m, s);
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
  }
};

window.onload = appTimeColor.init();




