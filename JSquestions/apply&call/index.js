// apply (this,args:Array)
Function.prototype.napply = function(ctx){
    const context = ctx || window
    context.fn = this
    let res;
    if(arguments[1]){
        res = context.fn(...arguments[1])
    }else{
        res = context.fn()
    }
    delete context.fn
    return res
}

Function.prototype.ncall = function(ctx){
    const context = ctx || window
    context.fn = this;
    let res;
    const args = [...arguments].slice(1) // 结构参数取出除了this之外的参数
    res = context.fn(args)
    delete context.fn;
    return res
}
Function.prototype.nbind = function(ctx){
    const context = ctx || window
    let args = [...arguments].slice(1)
    context.fn = this
    let bindFunction = function(){
        if([...arguments].length > 0){
            args = args.concat([...arguments])
        }
        context.fn(args)
    }
    return bindFunction
}
function print(name){
    console.log(arguments)
}

(function(){
    this.name = 'tom'
    // print.napply(this, [1,2,2,3])
    // print.ncall(this,[1,2,2,3])
    let bindPrint = print.nbind(this,[1,2,2,3],12,23,34)
    bindPrint(5,6,1,7,9)
})()