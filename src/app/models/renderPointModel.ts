export class RenderPointModel{

  private _x:number;
  private _y:number;

  constructor(jsEvent?:any){
    if (jsEvent===undefined || jsEvent===null) {
      this._x=0;
      this._y=0;
    }else{
      this._x=(jsEvent.pageX-jsEvent.offsetX);
      this._y=(jsEvent.pageY-jsEvent.offsetY);
    }
  }
  public get x():number{
    return this._x;
  }
  public get y():number{
    return this._y
  }
}
