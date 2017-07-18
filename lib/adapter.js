(function (window) {
  "use strict";

  function NOOP() { }

  window.__test_hooks__ = {
    before: NOOP,
    after: NOOP,
  };

  var Runnable = window.Mocha.Runnable;
  var _run = Runnable.prototype.run;
  Runnable.prototype.run = function () {
    var r;
    window.__test_hooks__.before();
    try {
      r = _run.apply(this, arguments);
    } finally {
      window.__test_hooks__.after();
    }
    return r;
  };
})(window);
