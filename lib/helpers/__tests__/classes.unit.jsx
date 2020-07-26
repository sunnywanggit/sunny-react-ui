import scopeClassMaker from "../classes";

describe('scopedClassMaker', () => {
    it('接受字符串或对象', () => {
        const sc = scopeClassMaker('gu-layout');
        expect(sc('')).toEqual('gu-layout')
        expect(sc('x')).toEqual('gu-layout-x')
        expect(sc({y: true, z: false})).toEqual('gu-layout-y')
        expect(sc({y: true, z: true})).toEqual('gu-layout-y gu-layout-z')
        expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('gu-layout-y gu-layout-z red')
    })
})