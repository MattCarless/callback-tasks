const booleanStatusChecker = (booleanValue, onSuccess, onError) => {
if(booleanValue === true) {
  let SuccessResponse =  onSuccess(booleanValue);
  console.log(SuccessResponse);
} else {
  let errorResponse = onError(booleanValue);
  console.log(errorResponse);
}

};

const onSuccess = (thisIsTheBooleanValue) => {
    return `Success! The boolean value is ${thisIsTheBooleanValue}`;
};

const onError = (thisIsTheBooleanValue) => {
    return `Error! The boolean value is ${thisIsTheBooleanValue}`;
};

booleanStatusChecker(true, onSuccess, onError);

let newBooleanStatusChecker = booleanStatusChecker(false, onSuccess, onError);

















































// const booleanStatusChecker = (booleanValue, onSuccess, onError) => {
// if (booleanValue === true) {
//     let response = onSuccess(booleanValue);
//     console.log(response);
//     console.log("boolean = true");
// } else {
//     let response = onError(booleanValue);
//     console.log(response);
//     console.log("boolean = false");
// }
// };

// const onSuccess = (callbackIsBooleanValue) => {
//     return `Success! The boolean value is ${callbackIsBooleanValue}`;
// };

// const onError = (callbackIsBooleanValue) => {
//     return `Error! The boolean value is ${callbackIsBooleanValue}`;
// };

// booleanStatusChecker(false, onSuccess, onError);

// // let booleanStatusCheckerValue = booleanStatusChecker();
// // console.log(booleanStatusCheckerValue);


// let booleanStatusCheckerValue = booleanStatusChecker(true,onSuccess,onError);
// console.log(booleanStatusCheckerValue);





// const booleanStatus = (booleanValue, onSuccess, onError) => {
// if (booleanValue === true) {
//     let successResponse = onSuccess(booleanValue);
//     console.log(successResponse);
//     return successResponse;

// } else {
//   let errorResponse = onError(booleanValue);
// console.log(errorResponse);
// return errorResponse;
// }

// };


// const onSuccess = (bvalue) => {
//     return `The boolean value is ${bvalue}`;

// };

// const onError = (bvalue) => { 
// return `The boolean value is ${bvalue}`;
// };


// // let returnResponse = onSuccess();

//  booleanStatus(true, onSuccess, onError);

// let booleanStatusValue = booleanStatus(true, onSuccess, onError);
// console.log(booleanStatusValue);





//(SECOND ATTEMPT)


// const booleanStatus = (value = true, onSuccess, onError) => {
//     onSuccess => {
//         console.log(`The boolean value is {value}`);
//     } 

//     onError => {
//         console.log(`the boolean value is {value}`);
//     }

//     if (value === true) {
//         onSuccess(value);
//     } else {
//         onError(value);
//     }
// }


// booleanStatus(value, onSuccess, onError);




//(FIRST ATTEMPT)

// const booleanStatusFunction = (booleanValue, onSuccess, onError) => {
//     if (boolean === true) {
//         onSuccess();
//     } else {
//         onError();
//     }
// };



// const onSuccess = () => {
//     console.log('need boolean');
// }

// const onError = () => {
// console.log('need boolean');
// };


// booleanStatusFunction(true, onSuccess, onError);



