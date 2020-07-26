import scopeClassMaker from "../classes";

describe('scopeClassMaker', () => {
    it('接受字符串或对象', () => {
        const sc = scopeClassMaker('sui-layout');
        expect(sc('')).toEqual('sui-layout')
        expect(sc('x')).toEqual('sui-layout-x')
        expect(sc({y: true, z: false})).toEqual('sui-layout-y')
        expect(sc({y: true, z: true})).toEqual('sui-layout-y gu-layout-z')
        expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('sui-layout-y sui-layout-z red')
    })
})