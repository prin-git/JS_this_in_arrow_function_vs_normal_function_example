/* in normal function this will pont to any object wehich CALLED that function.
In arrow function the this will always  pont to  that  object that DEFINED  that arrow function*/

function norArro() {
  this.name = "p";
  this.age = 12;
  this.normal = function () {
    console.log("nor", this.name);
  };
  this.arrow = () => {
    console.log("arrow", this.name);
  };
}

let x = new norArro();
x.normal();
x.arrow();
const anotherObj = {
  name: "anothername",
  age: "anotheage"
};
x.normal.call(anotherObj);
/* in normal function with call() .
the  'this' will pont to the "anotherObj"
thats why it print a"anothername" in console */
x.arrow.call(anotherObj);
/* arrow function this will still 
ponrt to the object it defined "norArro".
 not to any object it called by that is the reason still 
it WONT print "another age" in console with call()  */

/* =============== */
