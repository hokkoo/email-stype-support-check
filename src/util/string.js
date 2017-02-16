export function trim(str){
    str = toString(str);
    return str.trim();
}
export function toString(str){
    if(isString(str)){
        return str;
    }else{
        return str + "";
    }
}