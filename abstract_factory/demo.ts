namespace AbstractFactoryPattern {
  export namespace Demo {
    export function show() {
      // Abstract factory 1
      var factory1: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory1();
      var tester1: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory1);
      tester1.test();

      // Abstract factory 2
      var factory2: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory2();
      var tester2: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory2);
      tester2.test();
    }
  }
}