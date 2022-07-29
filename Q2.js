function getUrlParameterValue(url, parameter) {
    //Todo: complete this code
    var urlParam = url.substring(url.indexOf("?") + 1);
    var ParamsArr = urlParam.split("&");
    for (let i = 0; i < ParamsArr.length; i++)
    {
        temp = ParamsArr[i].split('=')
        if (temp[0] == parameter)
            return temp[1];
    }
    return "Error: Not Found";
}

var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

console.log(getUrlParameterValue(url, "utm_medium"));