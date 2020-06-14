function debounce(func,duration){
    let timeout;
    return function() {
        let ctx = this;
        let args = arguments;
        if(timeout){
            clearTimeout(timeout)
        }
        timeout = setTimeout(()=>{
            func.apply(ctx,args)
        },duration)
    }
}

function throttle(func,delay){
    let startTime = new Date().getTime()
    return function(){
        let ctx = this;
        let args = arguments;
        let now = new Date().getTime()
        if(now - startTime > delay){
            func.apply(ctx,args);
            startTime = now
        }
    }
}

function print(){
    console.log('dev')
}
let throttleTest = throttle(print,1000)


setInterval(()=>{
    throttleTest('dev',2000)
},1000)

