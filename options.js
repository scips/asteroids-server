var width = 640;
var height = 480;

module.exports = {
    width: width,
    height: height,
    asteroidsInitialize : function(asteroid){
	asteroid.position({ 'x': width * Math.random(), 'y': height * Math.random() });
	asteroid.velocity({ 'speed': '5', 'heading': 2*Math.PI * Math.random() });
    },
    asteroidCount: 10
}
