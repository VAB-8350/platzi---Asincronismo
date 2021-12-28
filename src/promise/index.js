const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Upss');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {resolve('funcionaaaa en 2000ms')},2000)
        } else {
            const error = new Error('Whooops');
            reject(error);
        }
    })
}
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.log(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('array of results', response);
    })
    .catch(error => console.error(error));