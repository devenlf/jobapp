export function getRedirectPath({type,avatar}){
    //根据用户名跳转
    let url = (type==='boss')?'/boss':'/genius'
    if(!avatar){
        url +='/info'
    }
    return url
}