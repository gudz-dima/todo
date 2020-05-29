export class Todo{
  public id:number;
  public text:string;
  public complete:boolean;

  constructor(text:string){
    this.text = text.charAt(0).toUpperCase() + text.slice(1);
    this.complete = false;
    this.id = Math.random();
  }
}
