function rgbtuples(tuplergb) {
    var r = tuplergb[0], g = tuplergb[1], b = tuplergb[2];
    return "the red is".concat(r, " the green is").concat(g, " the blue is").concat(b);
}
var color = [34, 221, 12];
console.log(rgbtuples(color));
