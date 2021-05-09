(() => {
  var r = {
      813: (r) => {
        "use strict";
        r.exports = JSON.parse('{"world":"hello world!"}');
      },
      272: (r) => {
        "use strict";
        r.exports = JSON.parse('{"world":"world hello!"}');
      },
      874: (r, o, e) => {
        var t = { "./hello.json": 813, "./world.json": 272 };
        function n(r) {
          var o = s(r);
          return e(o);
        }
        function s(r) {
          if (!e.o(t, r)) {
            var o = new Error("Cannot find module '" + r + "'");
            throw ((o.code = "MODULE_NOT_FOUND"), o);
          }
          return t[r];
        }
        (n.keys = function () {
          return Object.keys(t);
        }),
          (n.resolve = s),
          (r.exports = n),
          (n.id = 874);
      },
    },
    o = {};
  function e(t) {
    var n = o[t];
    if (void 0 !== n) return n.exports;
    var s = (o[t] = { exports: {} });
    return r[t](s, s.exports, e), s.exports;
  }
  (e.o = (r, o) => Object.prototype.hasOwnProperty.call(r, o)),
    (() => {
      const r = e(874)("./world.json");
      console.log(r.world);
    })();
})();
