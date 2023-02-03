function Person(options) { 
    // options
    // {
    //     data: {
    //         name: 'ck',
    //         age: 18
    //     },
    //     methods: {
    //         sayName() {
    //             console.log("I am" + this.name);
    //         }
    //     }
    // }
    let vm = this;
    vm.$options = options;

    if(options.data) {
        initData(vm, options.data);
    }

    if(options.methods) {
        initMethods(vm, options.methods);
    }
}

function initData(vm, data) {
    vm._data = data;
    let keys = Object.keys(data);
    let len = keys.length;
    while(len--) {
        let key = keys[len];
        proxy(vm, "_data", key);
    }
}

var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop,
}

function proxy(target, sourceKeys, key) {
    sharedPropertyDefinition.get = function() {
        return this[sourceKeys][key];
    }

    sharedPropertyDefinition.set = function(val) {
        this[sourceKeys][key] = val;
    }

    Object.defineProperty(target, key, sharedPropertyDefinition);
}

function noop(a,b,c) {  }


function initMethods(vm, methods) {
    for(let key in methods) {
        vm[key] = typeof methods[key] === 'function' ? methods[key].bind(vm) : noop
    }
}

let p1 = new Person({
    data: {
        name: {
            chineseName: '陈凯',
            englishName: 'zed'
        },
        age: 18,    
    },
    methods: {
        sayName() {
            console.log("I am " + this.name.englishName);
        }
    }
});

console.log(p1.name);
p1.sayName();
