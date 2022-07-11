//error handling with try catch
try {
  //if these codes have error it sends the error to err
  //can send a custom error with " throw 'message' "
} catch (err) {
  //these codes will execute if codes from try has an error
} finally {
  //these codes will execute no matter what
}

//strict mode
/*
  write "use strict" in first line of js file 
  to prevent you from writing some old buggy codes
  can be written in first line of a scope 
  to just use strict mode in that scope instead of global
*/

//numeric seperator ES12
//we can use '_' sign in numbers to increase readablity
let number = 700000000;
let goodNumber = 700_000_000;
//browser ignores '_' and not working in strings

//this keyword
//on html element <li onclick="removeList(this)">li</li> 'this' send the tag element
//in functions this returns the onject of Window
//in Objects it points to the object itself
funcName.call(objName); //this code will call funcName with setting 'this' in funcName to points to objName  keyword
funcName.call(objName, funcInput1, funcInput2);
funcName.apply(objName, [funcInput1, funcInput2]); //like call
funcName.bind(objName, funcInput1, funcInput2); //like call and apply but it will not automatically call the function
//these are useful when two or more objects has same functions we write it in one of the with this then with call apply... we make 'this' points to the object we want
//this of a function within an object is not pointing to the object we should bind the function to the object but in arrow functions it bind it automatically

//proxy - we can make a proxy from an object to handle working with it - useful in big projects
let user = {
  id: 1,
  firstName: "Ali",
  age: 22,
};
let proxyUser = new Proxy(user, {
  //here we can handle CRUD works for Object
  get: function (targetObj, property) {
    //this will execute when read happens like proxyUser.firstName
    /*
    for proxyUser.firstName:
    targetObj is the object
    property is firstName
  */
    return targetObj[property]; // returns to the result of proxyUser.firstName - not its "ali"
    //return targetObj[property] ? targetObj[property] : "no value setted";//use sth like this to handle read of undefined properties like proxyUser.email
    //can use 'property in targetObj' instead of targetObj[property] to check if a property exist in the object
  },
  set: function (targetObj, property, value) {
    //this will execute when Updates happens like proxyUser.age='27'
    if (property === "age" && value > 18) {
      targetObj[property] = value;
    }
  },
});
console.log("user proxy: ", proxyUser.firstName);
//now we have access to user if we want it not to be accessible we creat the proxy in 'user' varible instead of let proxyUser

//Symbol ES6 - assign a uniqe value to variable so we make sure this variable is not equal to any other variables value
let symbol1 = symbol("sth"); // 'sth' is just a lable
let symbol2 = symbol(11);
let symbol3 = symbol("sth");
let symbol4 = symbol();
//symbol1===symbol3 -> false
//shared symbol
let symbol5 = symbol("sth");
let symbol6 = symbol("sth");
//symbol5===symbol6 -> true

