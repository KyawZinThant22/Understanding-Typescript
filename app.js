var userInput;
var userName;
userInput = 5;
userInput = "Brian";
if (typeof userInput === "string") {
    userName = userInput;
}
//never
function generateError(message, code) {
    throw { message: message, errorCode: code };
    while (true) { }
}
generateError("An error occured", 404);
