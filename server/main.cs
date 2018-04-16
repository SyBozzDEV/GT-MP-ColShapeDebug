using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Managers;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Shared;

namespace ColShape.server
{
	public class Main : Script
	{
		public static Rectangle2DColShape TwoDColShape;
		public static Rectangle3DColShape ThreeDcolShape;
		public static CylinderColShape CylinderColShape;
		public static SphereColShape SphereColShape;

		public Main()
		{
			API.onResourceStop += OnResourceStopHandler;
		}

		private static void OnResourceStopHandler()
		{
			API.shared.triggerClientEventForAll("delColShape");
		}

		public static void Draw2DColShape(Rectangle2DColShape colshape, bool draw = true)
		{
			if (draw)
			{
				TwoDColShape = colshape;
				API.shared.triggerClientEventForAll("draw2DColShape", colshape.Start.X, colshape.Start.Y, colshape.End.X, colshape.End.Y, colshape.handle);
				colshape.onEntityEnterColShape += OnEntityEnterColShapeHandler;
			}
			else
                API.shared.triggerClientEventForAll("del2DColShape");
		}

		public static void Draw3DColShape(Rectangle3DColShape colshape, bool draw = true)
		{
			if (draw)
			{
				ThreeDcolShape = colshape;
				API.shared.triggerClientEventForAll("draw3DColShape", colshape.Start, colshape.End, colshape.handle);
				colshape.onEntityEnterColShape += OnEntityEnterColShapeHandler;
			}
			else
                API.shared.triggerClientEventForAll("del3DColShape");
		}

		public static void DrawCylinderColShape(CylinderColShape colshape, bool draw = true)
		{
			if (draw)
			{
				CylinderColShape = colshape;
				API.shared.triggerClientEventForAll("drawCylinderColShape", colshape.Center, colshape.Range, colshape.Height, colshape.handle);
				colshape.onEntityEnterColShape += OnEntityEnterColShapeHandler;
			}
			else
                API.shared.triggerClientEventForAll("delCylinderColShape");
		}

		public static void DrawSphereColShape(SphereColShape colshape, bool draw = true)
		{
			if (draw)
			{
				SphereColShape = colshape;
				API.shared.triggerClientEventForAll("drawSphereColShape", colshape.Center, colshape.Range, colshape.handle);
				colshape.onEntityEnterColShape += OnEntityEnterColShapeHandler;
			}
			else
                API.shared.triggerClientEventForAll("delSphereColShape");
		}

		private static void OnEntityEnterColShapeHandler(GrandTheftMultiplayer.Server.Managers.ColShape shape, NetHandle entity)
		{
			var player = API.shared.getEntityFromHandle<Client>(entity);
			if (player != null && player.isInVehicle == false)
			{
				player.sendChatMessage($"[Client] Enter ColShape at x:{player.position.X} y:{player.position.Y} z:{player.position.Z}");
				return;
			}
			var veh = API.shared.getEntityFromHandle<Vehicle>(entity);
		    if (veh == null) return;
		    foreach (var occupant in veh.occupants)
		    {
		        occupant.sendChatMessage($"[Vehicle] Enter ColShape at x:{veh.position.X} y:{veh.position.Y} z:{veh.position.Z}");
		    }
		}
	}
}
