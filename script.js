"use strict";

//1:

 let promise = new Promise(function (resolve, reject) {
   setTimeout(() => {
    resolve("done");
    reject (console.error("Error"));
    } , 5000); 
 });

//  promise.then((result) => console.log(result))
//         .catch((error) => console.error(error))
        // .finally(() => console.log("Promise was finished!"));

        async function getStudents() {
            try {
              const result = await promise;
              console.log(result);
            } catch (error) {
              console.error("Error");
            } finally {
              console.log("Promise was finished!");
            }
          }
          
          getStudents();