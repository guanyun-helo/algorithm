function nnew(){
    let _object = new Object() // new一个js对象
    const _constructor = [...arguments].shift() // 取出需要new的类
    _object.__proto__ = _constructor.prototype //将新对象的__proto__指向类的原型
    let res = _constructor.apply(_object, [...arguments].slice(1)) //执行构造函数
    return typeof res === 'object' ? res : _object; // 返回对象
}

function ninstanceof(source,target){
    let n__proto__ = source.__proto__
    let n_protoptype = target.prototype
    let res = false
    while(n__proto__){
        if(n__proto__ === n_protoptype){
            res = true
            break
        }else{
            n__proto__ = n__proto__.__proto__
        }
    }
    return res
}