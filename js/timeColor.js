var appTimeColor = {

  init: function() {
    return this.clock();
  },
  
  clock: function() {
    var self = this;
    var now = new Date();

    h = self.checkTime(now.getHours());
    m = self.checkTime(now.getMinutes());
    s = self.checkTime(now.getSeconds());

    var t = setTimeout(function(){
      self.clock();
    }, 1000);
    document.getElementById("time").innerHTML = h + ' : ' + m + ' : ' + s; 
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
    // console.log(hexcode);
    document.body.bgColor = hexcode;
    document.getElementById('hexCode').innerHTML = hexcode;
  }
};


(function(){appTimeColor.init()})();




