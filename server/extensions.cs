using GrandTheftMultiplayer.Server.Managers;

namespace ColShape.server
{
	public static class extensions
	{
		public static void draw(this Rectangle2DColShape colshape, bool stat = true) { main.draw2DColShape(colshape, stat); }
		public static void draw(this Rectangle3DColShape colshape, bool stat = true) { main.draw3DColShape(colshape, stat);	}
		public static void draw(this CylinderColShape colshape, bool stat = true) { main.drawCylinderColShape(colshape, stat); }
		public static void draw(this SphereColShape colshape, bool stat = true) { main.drawSphereColShape(colshape, stat); }
	}
}
