var PictureDancer = function(top,left){
  Dancer.call(this, top, left, 200);
  this.$node = $('<div class="dancerContainer"><span class="dancer"></span></div>');
  this.$node.css({'position':'fixed'});
  this.setPosition(top, left);
  this.$node.find('span').addClass('picture');
  this.$node.find('span').addClass('pointCollector');
  this.danceMoveCount = 0;
  this.danceMove = 0;
  this.danceMovesBeforeMove = 20;
  this.animatationSpeed = 1500;
};

PictureDancer.prototype = Object.create(Dancer.prototype);
PictureDancer.prototype.constructor = PictureDancer;
PictureDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var className = 'elaine'+this.danceMove;
  this.$node.find('span').removeClass(className);
  this.danceMove = (this.danceMove)%8+1;
  className = 'elaine'+this.danceMove;
  this.$node.find('span').addClass(className)
  this.danceMoveCount++;

  if(this.danceMoveCount === this.danceMovesBeforeMove) {
    var top = $("body").height() * Math.random();
    var width = $("body").width() * Math.random();
    $('.dancefloor').find('.pointCollector').trigger('mouseleave');
    var dancer = this;
    this.$node.animate({
      'top':top,
      'left': width
    }, dancer.speed);
    this.danceMoveCount = 0;
  }
};

PictureDancer.prototype.lineUp = function(yValue){
  this.$node.stop();
  this.danceMoveCount = 100;
  this.setPosition(yValue, 10);
  this.danceMoveCount = 0;
}