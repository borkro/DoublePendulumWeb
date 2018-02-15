var canvas = document.getElementById('doublePendulum');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var g = 1;
var a1 = 1,
	a2 = -2,
	vel1 = 0,
	vel2 = 0,
	acc1 = 0,
	acc2 = 0,
	l1 = 200,
	l2 = 200,
	x0 = window.innerWidth / 2,
	y0 = window.innerHeight / 4,
	x1 = x0 + l1 * Math.sin(a1),
	x2 = x0 + x1 + l2 * Math.sin(a2),
	y1 = y0 + l1 * Math.cos(a1),
	y2 = y0 + y1 + l2 * Math.cos(a2),
	r1 = 20,
	r2 = 20;

// canvas
c.fillStyle = '#0e0e0e';
c.fillRect(0, 0, canvas.width, canvas.height);

function animate() {
	requestAnimationFrame(animate);

	c.fillStyle = '#0e0e0e';
	c.fillRect(0, 0, canvas.width, canvas.height);

	acc1 = (-g * (2 * r1 + r2) * Math.sin(a1) - r2 * g * Math.sin(a1 - 2 * a2) - 2 * Math.sin(a1 - a2) * r2 * (vel2 * vel2 * l2 + vel1 * vel1 * l1 * Math.cos(a1 - a2))) / (l1 * (2 * r1 + r2 - r2 * Math.cos(2 * a1 - 2 * a2)));
	acc2 = (2 * Math.sin(a1 - a2) * (vel1 * vel1 * l1 * (r1 + r2) + g * (r1 + r2) * Math.cos(a1) + vel2 * vel2 * l2 * r2 * Math.cos(a1 - a2))) / (l2 * (2 * r1 + r2 - r2 * Math.cos(2 * a1 - 2 * a2)));
	vel1 += acc1;
	vel2 += acc2;
	a1 += vel1;
	a2 += vel2;

	x1 = x0 + l1 * Math.sin(a1);
	x2 = x1 + l2 * Math.sin(a2);
	y1 = y0 + l1 * Math.cos(a1);
	y2 = y1 + l2 * Math.cos(a2);

	// strokes
	c.beginPath();
	c.moveTo(x0, y0);
	c.lineTo(x1, y1);
	c.lineTo(x2, y2);
	c.strokeStyle = '#f1f1f1';
	c.stroke();

	// circles
	c.beginPath();
	c.arc(x1, y1, r1, 0, Math.PI * 2, false);
	c.fillStyle = '#f5f5f5';
	c.fill();
	c.beginPath();
	c.arc(x2, y2, r2, 0, Math.PI * 2, false);
	c.fillStyle = '#f5f5f5';
	c.fill();

}
animate();