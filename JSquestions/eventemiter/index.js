class EventEmiter {
    constructor() {
        this.events = new Map()
    }
    on(name, func) {
        if (!this.events.get(name)) {
            this.events.set(name, func)
        }
    }
    off(name) {
        if(this.events.get(name)){
            this.events.delete(name)
        }
    }
    emit(name, params) {
        if (this.events.get(name)) {
            let func = this.events.get(name)
            func.call(this, params)
        }
    }
    once(name,func) {
        let callOnce = function(){
            func.call(this, arguments)
            this.events.delete(name)
        }
        this.on(name, callOnce)
    }
}

const event = new EventEmiter()

setInterval(()=>{
    event.emit('setname',{name: 'tom'})
},1000)

setTimeout(()=>{
    console.log('ex')
    event.once('setname',()=>{
        console.log(1)
    })
},2000)