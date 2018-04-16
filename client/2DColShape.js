
var player = API.getLocalPlayer();

class TwoDcolShape {
	constructor(x, y, width, height, id) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
        this.id = id;
	    this.bool = false;
		this.calculate();
	}

	calculate() {
		this.p = 5000;
		this.m = -5000;
		this.line_1s = new Vector3(this.x, this.y, this.m);
		this.line_1e = new Vector3(this.x, this.y, this.p);
		this.line_2s = new Vector3(this.width, this.y, this.m);
		this.line_2e = new Vector3(this.width, this.y, this.p);
		this.line_3s = new Vector3(this.x, this.height, this.m);
		this.line_3e = new Vector3(this.x, this.height, this.p);
		this.line_4s = new Vector3(this.width, this.height, this.m);
		this.line_4e = new Vector3(this.width, this.height, this.p);

		var pPos = API.getEntityPosition(player);

		this.line_5s = new Vector3(this.x, this.y, pPos.Z);
		this.line_5e = new Vector3(this.width, this.y, pPos.Z);
		this.line_6e = new Vector3(this.width, this.height, pPos.Z);
		this.line_7e = new Vector3(this.x, this.height, pPos.Z);

		this.bool = true;
	}

	draw() {
		if (this.bool) {
			API.drawLine(this.line_1s, this.line_1e, 255, 255, 0, 0);
			API.drawLine(this.line_2s, this.line_2e, 255, 255, 0, 0);
			API.drawLine(this.line_3s, this.line_3e, 255, 255, 0, 0);
			API.drawLine(this.line_4s, this.line_4e, 255, 255, 0, 0);

			const pPos = API.getEntityPosition(player);
			this.line_5s.Z = pPos.Z;
			this.line_5e.Z = pPos.Z;
			this.line_6e.Z = pPos.Z;
			this.line_7e.Z = pPos.Z;

			API.drawLine(this.line_5s, this.line_5e, 255, 255, 0, 0);
			API.drawLine(this.line_5e, this.line_6e, 255, 255, 0, 0);
			API.drawLine(this.line_6e, this.line_7e, 255, 255, 0, 0);
			API.drawLine(this.line_7e, this.line_5s, 255, 255, 0, 0);
		}
	}
}

var colShape = null;

API.onServerEventTrigger.connect(
	function (eventName, args) {
		if (eventName === "draw2DColShape") {
			colShape = null;
			colShape = new TwoDcolShape(args[0], args[1], args[2], args[3], args[4]);
		}
		else if (eventName === "del2DColShape") {
			colShape = null;
		}
		else if (eventName === "delColShape") {
			colShape = null;
		}
	}
);

API.onUpdate.connect(
	function () {
		if (colShape != null) {
			colShape.draw();
		}
	}
);