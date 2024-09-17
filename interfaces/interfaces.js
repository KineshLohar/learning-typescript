var kinesh = {
    _id: 21121,
    email: 'kinesh',
    name: 'kinesh',
    userId: 2313,
    start: function () { return 'started'; },
    getCoupon: function (name) { return ({
        name: name,
        value: 10
    }); }
};
console.log(kinesh.getCoupon('kineshsdsdsd'));
