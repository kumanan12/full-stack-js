const { ESPIPE } = require("constants");

var student = {
    firstName: "Kumanan",
    lastName: "Murugesan",
};

function getStudentFullName(personObject) {
    return `${personObject.firstName} ${personObject.lastName}`;
}


var studentFullName = getStudentFullName(student);
console.log(studentFullName);

ECMAScript - ES

ES 6 (ES2015)
ES2016
ES2017


