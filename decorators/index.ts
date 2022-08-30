export function screaming (target: any, key: string, descriptor: any) {
    var originalMethod = descriptor.value;
    console.log(`Вызван метод ${key}.`)
}