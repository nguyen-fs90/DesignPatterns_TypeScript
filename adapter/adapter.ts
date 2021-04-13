namespace AdapterPattern {
  export class Adaptee {
    public method(): void {
      console.log("method of adaptee is being called");
    }
  }

  export interface Target {
    call(): void;
  }

  export class Adapter implements Target {
    public call(): void {
      console.log("adapter call method is being called");
      var adaptee: Adaptee = new Adaptee();
      adaptee.method();
    }
  }
}