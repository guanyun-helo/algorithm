function curry(fn,args){
   let length = fn.length;
   args = args || []
   return function(){
       let _args = args.slice(0)
       let arg;
       let i;
       for(i =0;i<arguments.length;i++){
        arg = arguments[i]
        _args.push(arg)
       }
       if(_args.length > args.length){
            return fn.apply(this,args)
       }else{
            return curry.call(this,fn,_args)
       }
   }

}
let fn = curry(function(a,b,c){
    console.log(a,b,c);
});
fn(1)(2)

