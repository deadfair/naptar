
export class RenderPoint{

  private _x:number;
  private _y:number;

  constructor(jsEvent?:any){
    if (jsEvent===undefined) {
      this._x=0;
      this._y=0;
    }else{
      //this._x=jsEvent.x;
      //this._y=jsEvent.y;
      this._x=(jsEvent.pageX-jsEvent.offsetX); //koordináta számolás
      this._y=(jsEvent.pageY-jsEvent.offsetY);
      console.log(jsEvent)
    }
  }
  public get x():number{
    return this._x;
  }
  public get y():number{
    return this._y
  }
}
/*
*/
