
// Service
let swiggy = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            // API call
            setTimeout(() => {
                console.log('biryani ready...');
                resolve('Biryani...');
                //reject('No boys...');
            }, 5000);
        });
        return promise;
    }
};
let bar = {
    getDrink: function () {
        let promise = new Promise((resolve, reject) => {
            // API call
            setTimeout(() => {
                console.log('beer ready/reject...');
                resolve('KF beer');
                //reject('in chennai, we cant serve');
            }, 2000);
        });
        return promise;
    }
};



// UI
let tnr = {
    doTeach: function () {
        console.log('teaching.......');
        console.log('requesting swiggy.......for food');
        let promise1 = swiggy.getFood();
        let promise2 = bar.getDrink();
        console.log('got promise...deferring my actions to future');

        Promise.race([promise1, promise2]).then((result) => {
            console.log('yummy ' + result);
        }, (reasons) => {
            console.log('oops ' + reasons);
        });
        console.log('cont.. further teaching .... end');

    }
};

tnr.doTeach();