

class CylinderColShape {
	constructor(pos, range, height, id) {
		this.pos = pos;
		this.range = range;
		this.height = height;
		this.id = id;
        this.anz = (this.range < 5) ? 4 : this.anz = (this.range < 10) ? 2 : 1;
	    this.lines_s = [];
        this.lines_e = [];
        this.bool = false;
	    this.calculate();
	}

    calculate() {
        for (let i = 0; i < 361; i += (3.6 * this.anz)) {
            this.x_1 = this.pos.X + (Math.cos(i * (Math.PI / 180)) * this.range);
            this.y_1 = this.pos.Y + (Math.sin(i * (Math.PI / 180)) * this.range);

            let startVec = new Vector3(this.x_1, this.y_1, this.pos.Z + this.height);
            let endVec = new Vector3(this.x_1, this.y_1, this.pos.Z - this.height);

            this.lines_s.push(startVec);
            this.lines_e.push(endVec);
        }
        this.bool = true;
    }

	draw() {
        if (this.bool) {
            for (var i = 0; i < this.lines_s.length; i++) {
                API.drawLine(this.lines_s[i], this.lines_e[i], 255, 255, 0, 0);
            }
        }
	}
}

var colShape = null;

API.onServerEventTrigger.connect(
	function (eventName, args) {
		if (eventName === "drawCylinderColShape") {
			colShape = null;
			colShape = new CylinderColShape(args[0], args[1], args[2], args[3]);
		}
		else if (eventName === "delCylinderColShape") {
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