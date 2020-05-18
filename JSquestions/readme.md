# 如何用javascript判斷變量的類型
    一般用typeof instanceof isArray來判斷類型
    - typeof返回變量類型的字符串，可以用來判斷基本數據類型，但是不能用來判斷null,object,array 都會返回object，undefined返回undefined，function返回function
    - instanceof實際上是根據對象的原型鏈來判斷對象是否是某一類型的

       ````
       let a = []
       typeof a //object
       a instanceof Array // true
       Array instanceof Object // true
       a.__proto__ === Array.protype true
       Array.__proto__ === Function.prototype // true
       Function.__proto__ === Function.prototype

       ````

# new操作符实现原理

    ````
    //new Array
    //new操作符運算首先會創建一個新javascript的對象
    let f = Object.create(fn.prototype);
    //再將構造函數的this指向新的obj
    newObj.__proto__ = Array.constructor
    //執行該構造函數爲新對象添加屬性
    let value = Array.constructor() 
    //如果是值類型返回instance 引用類型就返回這個類型的引用
    return newObj || value
    ````
    以上問題的關鍵是如果fn是一個值類型，那麼會執行調用這個值類型比如number會默認返回0，如果是引用類型就返回引用類型的對象

# js如何實現繼承

    ````
    // 類式繼承
    function Animal(name){
        this.name = name
        this.greet = (hi) => {
            this.color = hi
            console.log(this.color)
        }
    }
    function Dog(color){
        this.color = color
    }
    Dog.prototype = new Animal()
    let b = new Dog('red')
    let c = new Dog('black')

    // 當運行c.greet('yellow')
    // b.__proto__.color = yellow
    ````  

    ````
    // 构造函数继承
    function Animal(name){
        this.name = name
    }
    Animal.prototype.greet = function(hi){
        this.color = hi
        console.log(this.color)
    }
    function Dog(color){
        this.color = color
        Animal.apply(this,arguments)
    }
    let b = new Dog('red')
    let c = new Dog('black')
    ````  

        ````
    // 构造函数继承
    class Animal{
        this.name = name
    }
    class Dog extends Animal(){
        constructor(){
            super()
        }
    }
    ````  

# js怎么冻结一个对象，既对象属性只读（Object.freeze、Object.defineProperty)

````
Object.freeze(obj)

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});
````

# js低精度存儲0.1+0.2 != 0.3

````
先轉化成string，split出兩個值，然後計算出相加兩個值的進制，然後計算出正確值並除以進制

````


   
       
