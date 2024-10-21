var car1 = {
    maker: 'toyota',
    model: 2023,
    color: 'black',
    working: true
};
var car2 = {
    maker: 'tesla',
    model: 2021,
    color: 'white',
    working: true
};
function burhan() {
    for (var keys in car1) {
        console.log(keys, car1[keys]);
    }
    for (var keys in car2) {
        console.log(keys, car2[keys]);
    }
}
burhan();
