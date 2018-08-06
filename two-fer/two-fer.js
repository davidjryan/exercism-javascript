var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  
  return who ? "One for " + who + ", One for me." : "One for you, one for me.";
};

module.exports = TwoFer;
