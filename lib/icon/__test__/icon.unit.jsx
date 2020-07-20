import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';

describe('icon', () => {
    it('icon是svg', () => {
        const json = renderer.create(<Icon name="alipay"/>).toJSON();
        //期待json是符合快照的
        expect(json).toMatchSnapshot();
    });
});

describe('onClick', () => {
    it('icon是svg', () => {
        const json = renderer.create(<Icon name="alipay"/>).toJSON();
        //期待json是符合快照的
        expect(json).toMatchSnapshot();
    });
});
