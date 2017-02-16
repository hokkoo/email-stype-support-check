import { trim } from './util/string.js';
import _ from 'loadsh';

const YAML = require('yamljs');
const supportData = YAML.load('./misc/client_support.yaml');



/*
    @desc 元素样式规则检测
    @return undefined或者匹配到的错误规则
    @param ele: {name, style}
 */
export const checkElement = (ele) => {
    let name = ele.name, style = ele.style || '';

    style = style.split(';').reduce((obj, val) => {
        val = val.split('=').map((a) => {
            return trim(a);
        });
        if(val[0] && val[1]){
            obj[val[0]] = val[1];
        }
        return obj;
    }, {})



}


export const checkElementValid = (name) => {
    return !supportData.elements[name];
}
// TODO 检测属性
export const checkAttributeValid = (attrs) => {

}

export const checkStylesValid = (ele, styles) => {
    let warnings = _.reduce(styles, (warnings, style) => {
        let warning = checkStyleValid(ele, style);
        if(warning){
            warnings.push(warning);
        }
    }, []);
    return warnings.length ? warnings : false;
}

export const checkStyleValid = (ele, style) => {
    
}