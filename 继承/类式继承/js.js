/**
 * Created by demongao on 2017/2/18.
 */

//类式继承
//声明父类
function SuperClass(){
    this.superValue = true;
    this.book = ['c','java','htnl']
}

//为父类添加方法
SuperClass.prototype.getSuperValue =function(){
    return this.superValue;
}

//声明子类
function SubClass(){
    this.subValue = false;
}
//继承父类
SubClass.prototype = new SuperClass();

//为子类添加方法
SubClass.prototype.getSubValue = function(){
    return this.subValue;
}

//测试
var a = new SubClass();
var b = new SubClass();
console.log(a);
console.log(a.getSubValue());
console.log(a.getSuperValue());

console.log(a.book);
console.log(b.book);
a.book.push('css');
console.log(a.book);
console.log(b.book);

console.log(a.getSuperValue())
console.log(b.getSuperValue())
a.superValue = 'a';
console.log(a);
console.log(a.getSuperValue())
console.log(b.getSuperValue())

console.log(a.getSubValue())
console.log(b.getSubValue())
a.subValue = 'sub';
console.log(a);
console.log(a.getSubValue())
console.log(b.getSubValue())


