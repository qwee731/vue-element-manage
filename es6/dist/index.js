'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// let [a, b, c] = [1, 2, 3];
// console.log(a + b + c)

// let [a, b = "JSPang"] = ['技术胖']
// console.log(a + b);

// let [a, b = "JSPang"] = ['技术胖', undefined];
// console.log(a + b);

// let [a, b = "JSPang"] = ['技术胖', null];
// console.log(a + b);

// let {
//   foo,
//   bar
// } = {
//   foo: 'JSPang',
//   bar: '技术胖'
// };
// console.log(foo + bar);

var _jspang = 'jspang',
    _jspang2 = _slicedToArray(_jspang, 6),
    a = _jspang2[0],
    b = _jspang2[1],
    c = _jspang2[2],
    d = _jspang2[3],
    e = _jspang2[4],
    f = _jspang2[5];

console.log(a, b, c, d, e, f);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
