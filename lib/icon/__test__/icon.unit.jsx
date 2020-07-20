import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';

describe('icon', () => {
    it('测试 icon', () => {
        const json = renderer.create(<Icon/>).toJSON();
        expect(json).toMatchSnapshot();
    });
});
