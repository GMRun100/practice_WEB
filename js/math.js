//导出多个函数
function add(a,b)
{
    return a+b;
}


function sub(a,b)
{
    return a-b;
}

function div(a,b)
{
    return a/b;
}

function mul(a,b) {
    return a*b;
}

module.exports.add=add;
module.exports.sub=sub;
module.exports.div=div;
module.exports.mul=mul;
