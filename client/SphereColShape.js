

class sphereColShape {
	constructor(_pos, _range, _id) {
		this.pos = _pos;
		this.range = _range;
		this.id = _id;
		this.anz = (this.range < 5) ? 8 : this.anz = (this.range < 10) ? 4 : 2;

		this.bool = true;
	}

	draw() {
		if (this.bool) {
			for (var i = 0; i < 361; i += (3.6 * this.anz)) {
				this.x_1 = this.pos.X + (Math.cos(i * (Math.PI / 180)) * this.range);
				this.y_1 = this.pos.Y + (Math.sin(i * (Math.PI / 180)) * this.range);
				this.x_2 = this.pos.X + (Math.cos((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);
				this.y_2 = this.pos.Y + (Math.sin((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);

				this.line_1s = new Vector3(this.x_1, this.y_1, this.pos.Z);
				this.line_1e = new Vector3(this.x_2, this.y_2, this.pos.Z);
				API.drawLine(this.line_1s, this.line_1e, 255, 255, 0, 0);

				this.x_3 = this.pos.X + (Math.cos(i * (Math.PI / 180)) * this.range);
				this.z_3 = this.pos.Z + (Math.sin(i * (Math.PI / 180)) * this.range);
				this.x_4 = this.pos.X + (Math.cos((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);
				this.z_4 = this.pos.Z + (Math.sin((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);

				this.line_2s = new Vector3(this.x_1, this.pos.Y, this.z_3);
				this.line_2e = new Vector3(this.x_2, this.pos.Y, this.z_4);
				API.drawLine(this.line_2s, this.line_2e, 255, 255, 0, 0);

				this.y_5 = this.pos.Y + (Math.cos(i * (Math.PI / 180)) * this.range);
				this.z_5 = this.pos.Z + (Math.sin(i * (Math.PI / 180)) * this.range);
				this.y_6 = this.pos.Y + (Math.cos((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);
				this.z_6 = this.pos.Z + (Math.sin((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);

				this.line_3s = new Vector3(this.pos.X, this.y_5, this.z_5);
				this.line_3e = new Vector3(this.pos.X, this.y_6, this.z_6);
				API.drawLine(this.line_3s, this.line_3e, 255, 255, 0, 0);
			}
		}
	}
}

//var colArray = [];
var colShape = null;

API.onServerEventTrigger.connect(
	function (eventName, args) {
		if (eventName == "drawSphereColShape") {
			//colArray.push(new sphereColShape(args[0], args[1], args[2]));
			colShape = null;
			colShape = new sphereColShape(args[0], args[1], args[2]);
		}
		else if (eventName == "delSphereColShape") {
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