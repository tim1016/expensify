import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// eslint-disable-next-line no-unused-vars


// function Expense(title = 'Anonymous', amount = 0, createdAt = moment(0), note = '') {
//   this.title = title;
//   this.amount = amount;
//   this.createdAt = moment(createdAt).valueOf();
//   this.note = note;
// }

// const exp1 = new Expense('Bill1', 250, 10, 'junk');
// const exp2 = new Expense('Cill1', 350, 15, 'kunk');
// const exp3 = new Expense('Dill1', 450, 55, 'lunk');
// const exp4 = new Expense();
// const exp5 = new Expense('Rendezvous Trail', 10050, 0, 'firebase');

// database.ref('expenses').push(exp5);

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// const expenses = [exp1, exp2, exp3];
// expenses.forEach((element) => { database.ref('expenses').push(element); });
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     let expenses2 = [];
//     snapshot.forEach(childSnapshot =>   {expenses2.push( { id:  childSnapshot.key, ...childSnapshot.val()} ) }
//     );
//     console.log(expenses2);
//   });

// database.ref('expenses').on('value', snapshot =>{
//   let expenses2 = [];
//   snapshot.forEach(childSnapshot => {expenses2.push({id:childSnapshot.key, ...childSnapshot.val()})});
//   console.log(expenses2);
// })


// const notes = [
//   { title: '1', subtitle: 'a' },
//   { title: '2', subtitle: 'b' }
// ];

// database.ref('notes').push(notes[0]);
// database.ref('notes').push(notes[1]);


// database.ref().set({
//   name: 'Inkant Awasthi',
//   age: 26,
//   isMarried: true,
//   location: {
//     city: 'Philadelphia',
//     state: 'NY'
//   },
//   stressLevel: 6,
//   job: {
//     title: 'software developer',
//     city: 'seattle'
//   }
// }).then(() => {
//   console.log('data was saved');
// }).catch((error) => { console.log(error); });

// database.ref('isSingle').set(false);

// database.ref('attributes').set({ height: '5 ft. 9 inches', weight: '135 lbs' })
//   .then(() => {
//     console.log('attributes changed');
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Got it');
//   })
//   .catch((e) => {
//     console.log(`Couldn't do that ${e}`);
//   });

// database.ref().update({
//   name: 'Mile',
//   age: 23,
//   job: 'Developer',
//   location: {
//     city: '234'
//   }
// })
//   .then(() => {
//     console.log('got it ');
//   })
//   .catch((e) => {
//     console.log(`No ${e}`);
//   });

// database.ref().update({
//   stressLevel: 8.9,
//   'job/city': 'Lucknow',
//   'job/company': 'Google'
// });

// database.ref('job/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data: ', e);
//   });


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })

// setTimeout(() => {
//   database.ref('age').set(68);
// }, 5000);

// setTimeout(() => {
//   database.ref('age').set(50);
// }, 10000);

// setTimeout(() => {
//   database.ref('age').set(51);
// }, 15000);

// database.ref().on('value', (snapshot) => {
//   const val=snapshot.val();
//   const age = val.age;
//   console.log(age);
//   const name = val.name;
//   const city = val.job.city;
//   const company = val.job.company;
//   console.log(`${name} works for ${company} at ${city}. He is ${age}.`);
// });

// database.ref().update({
//   name: 'Mike',
//   'job/city': 'Chicago',
//   age:38
// }).then(()=>{console.log('yes')}).catch((e)=>{console.log(`There was an error : ${e}`)});

// database.ref('age').set(50);
