function Person(options) {
    vm = this;
    vm.$options = options;

    if(options.data) {
        initData(vm, options.data);
    }

    if(options.methods) {
        initMethod(vm, options.methods);
    }
}

function initData(vm, data) {
   vm._data = data;
   const keys = Object.keys(data);
   let len = keys.length;
   while(len--) {
       const key = keys[len];
       proxy(vm, '_data', key);
   }
}

var sharedPropertyDefinitions = {
   enumerable: true,
   configurable: true,
   get: noop,
   set: noop,
}

function noop(a,b,c) {}

function proxy(target, sourceKeys, key) {
   sharedPropertyDefinitions.get = function() {
       return this[sourceKeys][key];
   }

   sharedPropertyDefinitions.set = function(val) {
       this[sourceKeys][key] = val;
   }

   Object.defineProperty(target, key, sharedPropertyDefinitions)
}

function initMethod(vm, methods) {
  for (let key in methods) {
      vm[key] = typeof vm[key] == 'function' ? methods[key] : noop;
  }
}


let person = new Person({
    data: {
        name: 'ck',
        age: 18
    },
    methods: {
        sayName() {
            console.log(this.name)
        }
    }
});

console.log(person.name,person.age);