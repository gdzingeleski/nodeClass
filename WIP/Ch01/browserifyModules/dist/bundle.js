"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    function printHobbyInfo(hobby) {
      console.log(" ".concat(hobby.name, " has been an interest for ").concat(hobby.lengthInYearsAtHobby, " years"));
    }

    module.exports = printHobbyInfo;
  }, {}],
  2: [function (require, module, exports) {
    var printInfo = require('./printHobbies');

    var hobbies = [{
      name: 'volleyball',
      lengthInYearsAtHobby: 20
    }, {
      name: 'cooking',
      lengthInYearsAtHobby: 5
    }, {
      name: 'swimming',
      lengthInYearsAtHobby: 11
    }];

    for (var _i = 0; _i < hobbies.length; _i++) {
      var hobby = hobbies[_i];
      printInfo(hobby);
    }
  }, {
    "./printHobbies": 1
  }]
}, {}, [2]);