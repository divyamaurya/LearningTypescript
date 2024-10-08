"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "divya",
    email: "m@mail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "divya", isPaid: false });
function createCourse() {
    return { name: "ReactJS", price: 399 };
}
function createUser2(user) {
    return { name: "", email: "", isActive: true };
}
createUser2({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "h",
    email: "d@d.com",
    isActive: true,
};
