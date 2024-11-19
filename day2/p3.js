const fetchdata = new Promise((resolve, reject) => {
    let data = { id: 1, name: "Krish", Age: 22 };
    setTimeout(() => {
        resolve(data);
    }, 3000);
});

fetchdata
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
