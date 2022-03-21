function failure(err){
   console.log('failure person');
}

function successfull(result){
    console.log('successfull person');
}

function validate(name, successfull, failure){
   if(name == 'adbc'){
    successfull('yes sucessfull')
   } else {
    failure('not faliar')
   }
}

validate('abc', successfull, failure)