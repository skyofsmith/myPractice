(function() {
  module.exports = [
    function() {
      return {
        now: function() {
          return new Date();
        }
      };
    }
  ];

}).call(this);
