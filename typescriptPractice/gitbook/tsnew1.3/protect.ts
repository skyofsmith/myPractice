class Thing {
    protected doSomething() {
        console.info("Thing.doSomething");
    }
}

class MyThing extends Thing {
    public myMethod() {
        console.info("MyThing.myMethod");
        this.doSomething();
    }
}
var t = new MyThing();
// t.doSomething(); // Error，不能在类外部访问受保护成员
t.myMethod();