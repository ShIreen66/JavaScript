// creating promise
// using promise
// fetch async method
// api json placeholder

// promises are used to handle the error of async code

// fetch takes the api and returns the string data in first then, we convert the string data in to json by data.json() and we call another                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
// then which gives the final result/data after that we put catch for error handling

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((res) => console.log(res))
// .catch((err) => console.log(err));
// console.log("Application Start");

// convert async to sync

async function GetUsersData() {
    try {
        console.log("Start Application");
        const stringResult = await fetch (
            "https://jsonplaceholder.typicode.com/users"
        );
        const jsonResult = await stringResult.json();
        console.log(jsonResult);
        console.log("Application End");
    } catch (error) {
        console.log(error);
    }
}

GetUsersData();

