
class threeDcolShape {
	constructor(_start, _end, _id) {
		this.start = _start;
		this.end = _end;
		this.id = _id;
		this.calculate();
	}

	calculate() {
		this.line_1e = new Vector3(this.end.X, this.start.Y, this.start.Z);
		this.line_2e = new Vector3(this.end.X, this.end.Y, this.start.Z);
		this.line_3e = new Vector3(this.start.X, this.end.Y, this.start.Z);

		this.line_5e = new Vector3(this.start.X, this.end.Y, this.end.Z);
		this.line_6e = new Vector3(this.start.X, this.start.Y, this.end.Z);
		this.line_7e = new Vector3(this.end.X, this.start.Y, this.end.Z);


		this.bool = true;
	}

	draw() {
		if (this.bool) {
			API.drawLine(this.start, this.line_1e, 255, 255, 0, 0);
			API.drawLine(this.line_1e, this.line_2e, 255, 255, 0, 0);
			API.drawLine(this.line_2e, this.line_3e, 255, 255, 0, 0);
			API.drawLine(this.line_3e, this.start, 255, 255, 0, 0);

			API.drawLine(this.start, this.line_6e, 255, 255, 0, 0);
			API.drawLine(this.line_1e, this.line_7e, 255, 255, 0, 0);
			API.drawLine(this.line_2e, this.end, 255, 255, 0, 0);
			API.drawLine(this.line_3e, this.line_5e, 255, 255, 0, 0);

			API.drawLine(this.end, this.line_5e, 255, 255, 0, 0);
			API.drawLine(this.line_5e, this.line_6e, 255, 255, 0, 0);
			API.drawLine(this.line_6e, this.line_7e, 255, 255, 0, 0);
			API.drawLine(this.line_7e, this.end, 255, 255, 0, 0);
		}
	}
}

//var colArray = [];
var colShape = null;

API.onServerEventTrigger.connect(
	function (eventName, args) {
		if (eventName == "draw3DColShape") {
			//colArray.push(new threeDcolShape(args[0], args[1], args[2]));
			colShape = null;
			colShape = new threeDcolShape(args[0], args[1], args[2]);
		}
		else if (eventName == "del3DColShape") {
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