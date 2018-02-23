var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

var c = canvas.getContext('2d');
var g = 1;
var angle1 = Math.random() * Math.PI - 0.5 * Math.PI,
	angle2 = Math.random() * Math.PI * 2,
	velocity1 = 0,
	velocity2 = 0,
	acceleration1 = 0,
	acceleration2 = 0,
	length1 = window.innerHeight / 3.25,
	length2 = window.innerHeight / 3.25,
	x0 = window.innerWidth / 2,
	y0 = window.innerHeight / 5,
	x1 = x0 + length1 * Math.sin(angle1),
	x2 = x1 + length2 * Math.sin(angle2),
	y1 = y0 + length1 * Math.cos(angle1),
	y2 = y1 + length2 * Math.cos(angle2),
	radius1 = length1 / 6,
	radius2 = length2 / 6;

// canvas
c.fillStyle = '#030C22';
c.fillRect(0, 0, canvas.width, canvas.height);

function animate() {
	requestAnimationFrame(animate);

	c.fillStyle = '#030C22';
	c.fillRect(0, 0, canvas.width, canvas.height);

	acceleration1 = (-g * (2 * radius1 + radius2) * Math.sin(angle1) - radius2 * g * Math.sin(angle1 - 2 * angle2) - 2 * Math.sin(angle1 - angle2) * radius2 * (velocity2 * velocity2 * length2 + velocity1 * velocity1 * length1 * Math.cos(angle1 - angle2))) / (length1 * (2 * radius1 + radius2 - radius2 * Math.cos(2 * angle1 - 2 * angle2)));
	acceleration2 = (2 * Math.sin(angle1 - angle2) * (velocity1 * velocity1 * length1 * (radius1 + radius2) + g * (radius1 + radius2) * Math.cos(angle1) + velocity2 * velocity2 * length2 * radius2 * Math.cos(angle1 - angle2))) / (length2 * (2 * radius1 + radius2 - radius2 * Math.cos(2 * angle1 - 2 * angle2)));
	velocity1 += acceleration1;
	velocity2 += acceleration2;
	angle1 += velocity1;
	angle2 += velocity2;

	x1 = x0 + length1 * Math.sin(angle1);
	x2 = x1 + length2 * Math.sin(angle2);
	y1 = y0 + length1 * Math.cos(angle1);
	y2 = y1 + length2 * Math.cos(angle2);

	// strokes
	c.beginPath();
	c.moveTo(x0, y0);
	c.lineTo(x1, y1);
	c.lineTo(x2, y2);
	c.strokeStyle = '#A9B0B3';
	c.stroke();

	// circles
	c.beginPath();
	c.arc(x1, y1, radius1, 0, Math.PI * 2, false);
	c.fillStyle = '#A9B0B3';
	c.fill();
	c.beginPath();
	c.arc(x2, y2, radius2, 0, Math.PI * 2, false);
	c.fill();

}
animate();