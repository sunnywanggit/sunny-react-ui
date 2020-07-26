//使用高阶函数编写帮助函数
function scopeCalssMaker(prefix:string) {
    return function(name?:string){
        return [prefix,name].filter(Boolean).join('-');
    }
}

export default scopeCalssMaker;
