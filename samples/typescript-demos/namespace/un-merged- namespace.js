var Animal;
(function (Animal) {
    var haveMuscles = true;
    function animalsHaveMuscles() {
        return haveMuscles;
    }
    Animal.animalsHaveMuscles = animalsHaveMuscles;
})(Animal || (Animal = {}));
(function (Animal) {
    function doAnimalsHaveMuscles() {
        return haveMuscles; // 错误！haveMuscles不可访问
    }
    Animal.doAnimalsHaveMuscles = doAnimalsHaveMuscles;
})(Animal || (Animal = {}));
