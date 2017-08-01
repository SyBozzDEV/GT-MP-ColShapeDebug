

class cylinderColShape {
	constructor(_pos, _range, _height, _id) {
		this.pos = _pos;
		this.range = _range;
		this.height = _height;
		this.id = _id;
		this.anz = (this.range < 5) ? 4 : this.anz = (this.range < 10) ? 2 : 1;

		this.bool = true;
	}

	draw() {
		if (this.bool) {
			for (var i = 0; i < 361; i += (3.6 * this.anz)) {
				this.x_1 = this.pos.X + (Math.cos(i * (Math.PI / 180)) * this.range);
				this.y_1 = this.pos.Y + (Math.sin(i * (Math.PI / 180)) * this.range);

				this.line_1s = new Vector3(this.x_1, this.y_1, this.pos.Z + this.height);
				this.line_1e = new Vector3(this.x_1, this.y_1, this.pos.Z - this.height);
				API.drawLine(this.line_1s, this.line_1e, 255, 255, 0, 0);
			}
		}
	}
}

//var colArray = [];
var colShape = null;

API.onServerEventTrigger.connect(
	function (eventName, args) {
		if (eventName == "drawCylinderColShape") {
			//colArray.push(new cylinderColShape(args[0], args[1], args[2]));
			colShape = null;
			colShape = new cylinderColShape(args[0], args[1], args[2], args[3]);
		}
		else if (eventName == "delCylinderColShape") {
			//colArray = [];
			colShape = null;
		}
		else if (eventName == "delColShape") {
			//colArray = [];
			colShape = null;
		}
	}
);

API.onUpdate.connect(
	function () {/*
		if (colArray.length > 0) {
			for (i = 0; i < colArray.length; i++) {
				colArray[i].draw();
			}
		}*/
		if (colShape != null) {
			colShape.draw();
		}
	}
);