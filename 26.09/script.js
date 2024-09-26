// default parameter
// rest parameter

function dets(firstname, batchcode = "MERN12"){
    console.log(firstname, batchcode);
}

dets("John1");
dets("John1");
dets("John2", "B28");
dets("John1", "MERN12");

//1. default parameter must be the last parameter of the function
//2. there should only 1 default parameter in the function