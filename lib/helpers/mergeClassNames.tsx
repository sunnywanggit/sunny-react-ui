function mergeClassNames(...names:(string|undefined)[]) {
    //这个操作有点骚啊，记下来
    return names.filter(Boolean).join(' ');
}

export default mergeClassNames;