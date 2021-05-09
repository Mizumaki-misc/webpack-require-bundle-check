(() => {
  var r = {
      813: (r) => {
        "use strict";
        r.exports = JSON.parse('{"world":"hello world!"}');
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
    const r = e(813);
    console.log(r.world);
  })();
})();
