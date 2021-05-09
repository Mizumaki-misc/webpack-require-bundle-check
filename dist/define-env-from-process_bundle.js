(() => {
  var r = {
      272: (r) => {
        "use strict";
        r.exports = JSON.parse('{"world":"world hello!"}');
      },
    },
    o = {};
  function e(t) {
    var s = o[t];
    if (void 0 !== s) return s.exports;
    var l = (o[t] = { exports: {} });
    return r[t](l, l.exports, e), l.exports;
  }
  (() => {
    const r = e(272);
    console.log(r.world);
  })();
})();
