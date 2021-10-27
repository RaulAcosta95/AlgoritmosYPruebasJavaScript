//Estructura
let mensaje = "Mi mensaje";
const miPromesa = new Promise((resolve, reject) => {
  if (mensaje) {
    resolve("El mensaje es " + mensaje);
  } else {
    reject("El mensaje no está definido aún");
  }
});

miPromesa
  .then((resolve) => {
    console.log("Resolve: " + resolve);
  })
  .catch((reject) => {
    console.log("Reject: " + reject);
  });

//Casos
let x = 0;
setTimeout(() => {
  x = 1;
  console.log("Ahora si x = 1");
}, 1000);
console.log("x es :" + x); //3
const miPromesa2 = new Promise((resolve, reject) => {
  if (x === 1) {
    resolve("X es igual a " + x);
  } else {
    reject("X es igual a " + x);
  }
});
miPromesa2
  .then((resolve) => {
    console.log("Resolve " + resolve);
  })
  .catch((reject) => {
    console.log("Reject " + reject);
  });
// --------------------
let x2 = 0;
console.log("x2 es :" + x2); //3
const miPromesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    x2 = 1;
    resolve("x2 es igual a " + x2);
    console.log("Ahora si x2 = 1");
  }, 1000);
});
miPromesa3
  .then((resolve) => {
    console.log("Resolve " + resolve);
    resolve += resolve; 
    return resolve;
  })
  .then((resolve)=>{
    console.log("Resolve Encadenado por si mismo " + resolve);
  })
  .catch((reject) => {
    console.log("Reject " + reject);
  });



// Encadenamiento de promesas
  function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get the user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'admin'
            });
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get the services of ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 3 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate the service cost of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 2 * 1000);
    });
}

getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);

// Promise ALL
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');

        resolve(10);
    }, 1 * 1000);

});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
    }, 3 * 1000);
});

Promise.all([p1, p2, p3])
    .then(results => {
        const total = results.reduce((p, c) => p + c);

        console.log(`Results: ${results}`);
        console.log(`Total: ${total}`);
    });

// Promise Race
    
    
const p11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved RACE');
        resolve(10);
    }, 1 * 1000);

});

const p22 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved RACE');
        resolve(20);
    }, 2 * 1000);
});


Promise.race([p11, p22])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));
