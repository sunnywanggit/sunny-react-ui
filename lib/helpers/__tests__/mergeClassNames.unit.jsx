import mergeClassNames from '../mergeClassNames';

describe('mergeClassNames ', () => {
    it('接受一个 className', () => {
        const result = mergeClassNames('a');
        expect(result).toEqual('a');
    });

    it('接受两个 className', () => {
        const result = mergeClassNames('a','b');
        expect(result).toEqual('a b');
    });
    it('接受 undefined,结果不会出现 undefined', () => {
        const result = mergeClassNames('a',undefined);
        expect(result).toEqual('a');
    });
    it('接受多种奇怪值', () => {
        const result = mergeClassNames('a',undefined,false,null,'中文');
        expect(result).toEqual('a 中文');
    });
    it('接受0个 className', () => {
        const result = mergeClassNames();
        expect(result).toEqual('');
    });
});
