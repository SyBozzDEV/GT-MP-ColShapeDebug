using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Shared;

namespace ColShape.server
{
	public class main : Script
	{
		public static Rectangle2DColShape twoDColShape;
		public static Rectangle3DColShape threeDcolShape;
		public static CylinderColShape cylinderColShape;
		public static SphereColShape sphereColShape;

		public main()
		{
			API.onResourceStop += onResourceStopHandler;
			API.onPlayerFinishedDownload += onPlayerFinishedDownloadHandler;
		}

		private void onPlayerFinishedDownloadHandler(Client player)
		{
			if (twoDColShape != null) API.shared.triggerClientEvent(player, "draw2DColShape", twoDColShape.X, twoDColShape.Y, twoDColShape.Width, twoDColShape.Height, twoDColShape.handle);
			if (threeDcolShape != null) API.shared.triggerClientEvent(player, "draw3DColShape", threeDcolShape.Start, threeDcolShape.End, threeDcolShape.handle);
			if (cylinderColShape != null) API.shared.triggerClientEvent(player, "drawCylinderColShape", cylinderColShape.Center, cylinderColShape.Range, cylinderColShape.Height, cylinderColShape.handle);
			if (sphereColShape != null) API.shared.triggerClientEvent(player, "drawSphereColShape", sphereColShape.Center, sphereColShape.Range, sphereColShape.handle);
		}

		private void onResourceStopHandler()
		{
			API.shared.deleteColShape(threeDcolShape);
			API.shared.deleteColShape(twoDColShape);
			API.shared.deleteColShape(cylinderColShape);
			API.shared.deleteColShape(sphereColShape);
			API.shared.triggerClientEventForAll("delColShape");
		}

		public static void draw2DColShape(Rectangle2DColShape colshape, bool stat = true)
		{
			if (stat)
			{
				API.shared.triggerClientEventForAll("draw2DColShape", colshape.X, colshape.Y, colshape.Width, colshape.Height, colshape.handle);
				colshape.onEntityEnterColShape += onEntityEnterColShapeHandler;
			}
			else API.shared.triggerClientEventForAll("del2DColShape");

		}

		public static void draw3DColShape(Rectangle3DColShape colshape, bool stat = true)
		{
			if (stat)
			{
				API.shared.triggerClientEventForAll("draw3DColShape", colshape.Start, colshape.End, colshape.handle);
				colshape.onEntityEnterColShape += onEntityEnterColShapeHandler;
			}
			else API.shared.triggerClientEventForAll("del3DColShape");
		}

		public static void drawCylinderColShape(CylinderColShape colshape, bool stat = true)
		{
			if (stat)
			{
				API.shared.triggerClientEventForAll("drawCylinderColShape", colshape.Center, colshape.Range, colshape.Height, colshape.handle);
				colshape.onEntityEnterColShape += onEntityEnterColShapeHandler;
			}
			else API.shared.triggerClientEventForAll("delCylinderColShape");
		}

		public static void drawSphereColShape(SphereColShape colshape, bool stat = true)
		{
			if (stat)
			{
				API.shared.triggerClientEventForAll("drawSphereColShape", colshape.Center, colshape.Range, colshape.handle);
				colshape.onEntityEnterColShape += onEntityEnterColShapeHandler;
			}
			else API.shared.triggerClientEventForAll("delSphereColShape");
		}

		private static void onEntityEnterColShapeHandler(GrandTheftMultiplayer.Server.Managers.ColShape shape, NetHandle entity)
		{
			var player = API.shared.getEntityFromHandle<Client>(entity);
			if (player != null)
			{
				player.sendChatMessage(string.Format("Enter ColShape at x:{0} y:{1} z:{2}", player.position.X, player.position.Y, player.position.Z));
				return;
			}
			var veh = API.shared.getEntityFromHandle<Vehicle>(entity);
			if (veh != null)
			{
				foreach (var occupant in veh.occupants)
				{
					occupant.sendChatMessage(string.Format("Enter ColShape at x:{0} y:{1} z:{2}", veh.position.X, veh.position.Y, veh.position.Z));
				}
			}
		}
	}
}
