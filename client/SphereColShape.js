

class SphereColShape {
	constructor(pos, range, id) {
		this.pos = pos;
		this.range = range;
		this.id = id;
        this.anz = (this.range < 5) ? 8 : this.anz = (this.range < 10) ? 4 : 2;
	    this.lines_1s = [];
        this.lines_1e = [];
	    this.lines_2s = [];
        this.lines_2e = [];
	    this.lines_3s = [];
	    this.lines_3e = [];
        this.bool = false;
	    this.calculate();
	}

    calculate() {
        for (var i = 0; i < 361; i += (3.6 * this.anz)) {
            this.x_1 = this.pos.X + (Math.cos(i * (Math.PI / 180)) * this.range);
            this.y_1 = this.pos.Y + (Math.sin(i * (Math.PI / 180)) * this.range);
            this.x_2 = this.pos.X + (Math.cos((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);
            this.y_2 = this.pos.Y + (Math.sin((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);

            let start1Vec = new Vector3(this.x_1, this.y_1, this.pos.Z);
            let end1Vec = new Vector3(this.x_2, this.y_2, this.pos.Z);

            this.lines_1s.push(start1Vec);
            this.lines_1e.push(end1Vec);

            this.x_3 = this.pos.X + (Math.cos(i * (Math.PI / 180)) * this.range);
            this.z_3 = this.pos.Z + (Math.sin(i * (Math.PI / 180)) * this.range);
            this.x_4 = this.pos.X + (Math.cos((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);
            this.z_4 = this.pos.Z + (Math.sin((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);

            let start2Vec = new Vector3(this.x_1, this.pos.Y, this.z_3);
            let end2Vec = new Vector3(this.x_2, this.pos.Y, this.z_4);

            this.lines_2s.push(start2Vec);
            this.lines_2e.push(end2Vec);

            this.y_5 = this.pos.Y + (Math.cos(i * (Math.PI / 180)) * this.range);
            this.z_5 = this.pos.Z + (Math.sin(i * (Math.PI / 180)) * this.range);
            this.y_6 = this.pos.Y + (Math.cos((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);
            this.z_6 = this.pos.Z + (Math.sin((i + (3.6 * this.anz)) * (Math.PI / 180)) * this.range);

            let start3Vec = new Vector3(this.pos.X, this.y_5, this.z_5);
            let end3Vec = new Vector3(this.pos.X, this.y_6, this.z_6);

            this.lines_3s.push(start3Vec);
            this.lines_3e.push(end3Vec);
        }

        this.bool = true;
    }

	draw() {
		if (this.bool) {
		    for (let i = 0; i < this.lines_1s.length; i++) {
                API.drawLine(this.lines_1s[i], this.lines_1e[i], 255, 255, 0, 0);
                API.drawLine(this.lines_2s[i], this.lines_2e[i], 255, 255, 0, 0);
		        API.drawLine(this.lines_3s[i], this.lines_3e[i], 255, 255, 0, 0);
		    }
		}
	}
}

var colShape = null;

API.onServerEventTrigger.connect(
	function (eventName, args) {
		if (eventName === "drawSphereColShape") {
			colShape = null;
			colShape = new SphereColShape(args[0], args[1], args[2]);
		}
		else if (eventName === "delSphereColShape") {
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