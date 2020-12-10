

function getUnique(arr){

    
    let uniqueArr = [...new Set(arr)];

    document.write(uniqueArr);
}

const array = [1, 2, 3, 2, 3, 4, 5, 4];


getUnique(array);
