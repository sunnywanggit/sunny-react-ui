import * as React from 'react';
import Icon from '../icon/icon';
import './rate.scss'
import scopeClassMaker from '../helpers/classes';
import {useState} from 'react';
const scopedClass = scopeClassMaker('s-rate');
const sc = scopedClass;

const Rate: React.FunctionComponent = () => {
    const [voidColor,setVoidColor] = useState('#C6D1DE');

    return (
        <div className={sc()}>
            <Icon name="star" className={sc('above')}/>
            <Icon name="star" className={sc('bottom')}/>
        </div>
    );
};

export default Rate;
