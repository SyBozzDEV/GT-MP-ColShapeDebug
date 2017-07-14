using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Shared.Math;

namespace ColShape.server
{
	class shapes : Script
	{
		public shapes()
		{
			API.onResourceStart += onResourceStartHandler;
		}

		private static void onResourceStartHandler()
		{
			main.threeDcolShape = API.shared.create3DColShape(new Vector3(10, 0, 70), new Vector3(15, 5, 75));
			main.threeDcolShape.draw();
			main.twoDColShape = API.shared.create2DColShape(0, 0, 5, 5);
			main.twoDColShape.draw();
			main.cylinderColShape = API.shared.createCylinderColShape(new Vector3(20, 0, 75), 2.5f, 5);
			main.cylinderColShape.draw();
			main.sphereColShape = API.shared.createSphereColShape(new Vector3(30, 0, 72), 2.5f);
			main.sphereColShape.draw();
		}
	}
}
