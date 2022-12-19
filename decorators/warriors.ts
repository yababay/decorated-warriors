export function whatTheMethod (target: any, key: string, descriptor: any) {
    switch(key){
        case 'fight':
            console.log(`Может сражаться в открытом бою.`)
            break
        case 'sneak':
            console.log(`Может подкрасться к противнику.`)
            break
        default:
            console.log(`Здесь есть метод ${key}.`)
    }
}

export function describeAction (target: any, key: string, descriptor: any) {
    var originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        let prefix = ''
        switch(key){
            case 'fight':
                prefix = 'Решил он сразиться с супостатами в открытом бою'
                break
            case 'sneak':
                prefix = 'Подкрался он к противнику'
                break
        }
        let sentence = `${prefix} и ${args[0].toLowerCase()}`
        args[0] = sentence 
        return originalMethod.apply(this, args) + '.';
    }
    return descriptor
}

export function screaming (target: any, key: string, descriptor: any) {
    var originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        args[0] = args[0].replace(' и ', ', ') 
        var result = originalMethod.apply(this, args)
        return result + ' да как заорет: "Отведай, вражина, силушки богатырской!"'
    }
    return descriptor
}

export function detailedPreface (target: any, key: string, descriptor: any) {
    var originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        args[0] = 'В некотором царстве, в некотором государстве жил-был богатырь.'
        var result = originalMethod.apply(this, args)
        return result;
    }
    return descriptor
}

export function detailedAfterword (target: any, key: string, descriptor: any) {
    var originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        args[1] = 'Тут и сказочке конец.'
        var result = originalMethod.apply(this, args);
        return result;
    }
    return descriptor
}
