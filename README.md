# GT-MP ColShape Debug resource

For all who want to see they colshapes.

* [Create2DColShape](https://wiki.gt-mp.net/index.php?title=Create2DColShape)

* [Create3DColShape](https://wiki.gt-mp.net/index.php?title=Create3DColShape)

* [CreateCylinderColShape](https://wiki.gt-mp.net/index.php?title=CreateCylinderColShape)

* [CreateSphereColShape](https://wiki.gt-mp.net/index.php?title=CreateSphereColShape)

## How to use this:

* **1.** Copy the ColShape.dll from folder ColShapeDebug\bin\release to your folder where gt-mp server exe is.

* **2.** Place the ColShapeDebug folder in your resource folder.

* **3.** Add in you meta from your resource with your shape <assembly ref="ColShape.dll" /> and <include resource="ColShapeDebug" />.

* **4.** Add this to your files where the shape create " using ColShape.server; "

* **5.** Create your shape API.shared.create3DColShape(new Vector3(10, 0, 70), new Vector3(15, 5, 75)); and add the Draw(); like in the example.

```xml
    <meta>
      <!-- Create with meta generator by SyBozz -->
      <info name="Example" author="SyBozz" type="script" />
      <!-- Include Resources -->
      <include resource="ColShapeDebug" />
      <!-- Assembly -->
      <assembly ref="ColShape.dll" />
      <!-- Server Scripts -->
      <script src="example.cs" type="server" lang="csharp" />
    </meta>
```

```Csharp

    using GrandTheftMultiplayer.Server.API;
    using GrandTheftMultiplayer.Server.Elements;
    using GrandTheftMultiplayer.Server.Managers;
    using GrandTheftMultiplayer.Shared.Math;
    using ColShape.server;
    class shapes : Script
    {
        public shapes()
        {
            API.onPlayerFinishedDownload += onPlayerFinishedDownloadHandler;
        }
        private static void onPlayerFinishedDownloadHandler(Client player)
        {
            var shape = API.shared.create3DColShape(new Vector3(10, 0, 70), new Vector3(15, 5, 75));
            shape.Draw();
            //API.shared.create3DColShape(new Vector3(10, 0, 70), new Vector3(15, 5, 75)).Draw(); // worked too
        }
    }
```


## NOTE:

There are 4 shape types and it can only draw one for every type at the time

this is the last shape with .Draw();

If you have a big shape please draw only one per time.

FPS can go down to 15 or less when your shapes to big.

When you use .Draw(); before you join you can`t see the shape

for that create the shape after join or restart your resource with command.


## This is only for debug and to see where you shape is.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
