var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Thing = /** @class */ (function () {
    function Thing() {
    }
    Thing.prototype.doSomething = function () {
        console.info("Thing.doSomething");
    };
    return Thing;
}());
var MyThing = /** @class */ (function (_super) {
    __extends(MyThing, _super);
    function MyThing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyThing.prototype.myMethod = function () {
        console.info("MyThing.myMethod");
        this.doSomething();
    };
    return MyThing;
}(Thing));
var t = new MyThing();
// t.doSomething(); // Error，不能在类外部访问受保护成员
t.myMethod();
