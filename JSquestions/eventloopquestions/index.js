// question1
window.name = 'ByteDance'; 
function A () {
   this.name = 123;
}
A.prototype.getA = function(){
    console.log(this);
    return this.name + 1;
} 
let a = new A(); 
let funcA = a.getA;
funcA();

//question2
window.name = 'ByteDance'; 
class A {
    constructor() {
      this.name = 123;
    }

    getA() { 
      console.log(this);
      return this.name + 1; 
    }
}

let a = new A(); 
let funcA = a.getA;
funcA();

