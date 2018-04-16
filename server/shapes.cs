/*
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Elements;
using GrandTheftMultiplayer.Shared.Math;

namespace ColShape.server
{
    internal class Shapes : Script
    {
        public Shapes()
        {
            API.onResourceStart += onResourceStartHandler;
            API.onPlayerFinishedDownload += onPlayerFinishedDownloadHandler;
        }
        private void onPlayerFinishedDownloadHandler(Client player)
        {
            Main.ThreeDcolShape.Draw();
            Main.TwoDColShape.Draw();
            Main.CylinderColShape.Draw();
            Main.SphereColShape.Draw();
        }
        private static void onResourceStartHandler()
        {
            Main.ThreeDcolShape = API.shared.create3DColShape(new Vector3(10, 0, 70), new Vector3(15, 5, 75));
            Main.TwoDColShape = API.shared.create2DColShape(0, 0, 5, 5);
            Main.CylinderColShape = API.shared.createCylinderColShape(new Vector3(20, 0, 65), 2.5f, 5);
            Main.SphereColShape = API.shared.createSphereColShape(new Vector3(30, 0, 72), 2.5f);

        }
    }
}
*/
