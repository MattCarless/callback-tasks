const booleanStatus = (booleanValue = true, onSuccess, onError) => {
if (booleanValue === true) {
    onSuccess(booleanValue);
} else {
    onError(booleanValue)
}

};

const onSuccess = () => {
    return `The boolean value is {booleanValue}`;
};

const onError = () => {
return `The boolean value is {booleanValue}`;
};

booleanStatus(false, onSuccess, onError);






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



