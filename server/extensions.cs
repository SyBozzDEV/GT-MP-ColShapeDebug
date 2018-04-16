using GrandTheftMultiplayer.Server.Managers;

namespace ColShape.server
{
	public static class Extensions
	{
		public static void Draw(this Rectangle2DColShape colshape, bool draw = true) { Main.Draw2DColShape(colshape, draw); }
		public static void Draw(this Rectangle3DColShape colshape, bool draw = true) { Main.Draw3DColShape(colshape, draw);	}
		public static void Draw(this CylinderColShape colshape, bool draw = true) { Main.DrawCylinderColShape(colshape, draw); }
		public static void Draw(this SphereColShape colshape, bool draw = true) { Main.DrawSphereColShape(colshape, draw); }
	}
}
