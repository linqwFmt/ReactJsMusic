import {API_URL,MUSIC_INDEX} from '../Const'

export default class HttpUtils{
    
}
HttpUtils.getMusicIndex=function(){
    return this.post('',API_URL+MUSIC_INDEX)
}

HttpUtils.post = function (body, url) {
    var bodys = body ? JSON.stringify(body) : ''
    //曲线救国
    var heads = {

    }
    return fetch(url, {
        method: "post",
        body: bodys,
    })
        .then((response) => response.json())
        .then((response) => handleResponse(response))
}


function handleResponse(data) {
    var d = data
    if (data.code == 200) {
        if(data.data==undefined||data.data==null){
            d = data
            d.success=true
            return d
        }
        d = data.data
        if (d instanceof Object)
            d.success = true
    } else if (data.code == 203) {
       
    }
    return d;
}
