
//run this file from within Week2Folder - from the prompt: node basicexample

console.log(1+1)

//notice the below does not work -- see explanation below

        // const $ = function(selector) {
        //     return document.querySelector(selector);
        // };
        
        // const joinList = evt => {                 // Event object
        //     if (document.querySelector("#email_1").value == "") { 
        //  
        //         // notify user of error
        //         alert("Email is required.");
        //  
        //         // don't allow form to be submitted
        //         evt.preventDefault();  
        //     } 
        //     else {
        //         const email1 = $("#email_1").value;
        //         alert(email1);
        //         console.log(email1)
        //     }
        // };
        //  
        // document.addEventListener("DOMContentLoaded", () => {
        //     $("#join_list").addEventListener("click", joinList);
        // });

// note that running: node basicexample will not work
//explanation: 

// "document" relates to the DOM (Document Object Model) in a web browser.

// Node.js, however, is not a browser environment. It is a server environment, much like PHP or Perl, and as such, you can’t access the browser’s DOM or do anything specific to browser-hosted JavaScript.

        