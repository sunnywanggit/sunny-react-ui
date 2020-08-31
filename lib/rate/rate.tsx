import * as React from 'react';
import './rate.scss';
import scopeClassMaker from '../helpers/classes';
import {useState, Fragment} from 'react';
import Icon from '../icon/icon';

const scopedClass = scopeClassMaker('s-rate');
const sc = scopedClass;

interface RateProps {
    //star数
    count?:string,
    //默认值
    defaultValue?:string,
    //是否允许只读
    disabled?:Boolean,
    //失去焦点时的回调
    // onBlur?:(index:number)=>void
    //TODO
    //支持失去焦点/获取焦点/选择时的回调
}



const Rate: React.FunctionComponent<RateProps> = (props) => {
    const [max] = useState(new Array(props.count && +props.count).fill(''));
    const [width, setWidth] = useState(props.defaultValue && +props.defaultValue*20);

    const decrease = (index: number) => {
        if(props.disabled) return;
        setWidth((index ) * 20);
    };
    const increase = (index: number) => {
        if(props.disabled) return;
        setWidth((index + 1) * 20);
    };

    return (
        <div className={sc()}>
            <div className={sc('icon')}>
                {max.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <Icon name="star" className={sc('above')}
                                  onClick={() => increase(index)}
                            />
                        </Fragment>
                    );
                })}
                <div className={sc('icon-active')} style={{width: width}}>
                    {max.map((item, index) => {
                        return (
                            <Icon key={index} name="star" className={sc('bottom')}
                                  onClick={() => decrease(index)}
                            />
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

Rate.defaultProps = {
    count:'5',
    defaultValue:'3',
    disabled:false
};

export default Rate;
