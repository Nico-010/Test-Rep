let array=[3, -7, 4, 21, 0, -21, -3];

function pos(a){
    let b=0
    for(let i=0; i<a.length; i++){
        if(a[i]>0)
        b=b+a[i] 
    }
    return b
};

console.log(pos(array));
