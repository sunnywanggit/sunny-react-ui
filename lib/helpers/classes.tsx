interface Options {
    extra:string|undefined;
}

//key 全部是字符串 value 全部是 boolean
//key 为 string，value 为 boolean 的任何对象
interface ClassToggles {
    [k:string]:boolean
}

//使用高阶函数编写帮助函数
function scopeClassMaker(prefix:string) {
    return function(name?:string|ClassToggles,options?:Options){
        let name2;
        let result;
        if(typeof name === 'string' || name === undefined){
            name2 = name;
            result = [prefix,name2].filter(Boolean).join('-');
        }else{
            name2 = Object.entries(name).filter(kv=>kv[1]).map(kv=>kv[0])
            result = name2.map(n=> [prefix,n].filter(Boolean).join('-') ).join(' ')
        }
        if(options&&options.extra){
            return [result,options&&options.extra].filter(Boolean).join(' ')
        }else{
            return  result;
        }
    }

}

export default scopeClassMaker;
