// class TakePhoto {
//   constructor(public cameraMode: string, public filter: string) {}
// }

// const dm = new TakePhoto("test", "test");
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    return 8;
  }
}

//   const dm = new TakePhoto("test", "test");Cannot create an instance of an abstract class

class Snapchat extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("Sepia");
  }
}

const dm = new Snapchat("test", "test", 3);
dm.getReelTime();
