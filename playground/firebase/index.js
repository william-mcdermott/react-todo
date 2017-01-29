import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD0oXmib6yV51NwHL5vcsrMA5eruYwP6WE",
    authDomain: "bills-todo-app.firebaseapp.com",
    databaseURL: "https://bills-todo-app.firebaseio.com",
    storageBucket: "bills-todo-app.appspot.com",
    messagingSenderId: "147380263780"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Bill',
    age: 43
  }
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({text: 'Walk the dog!'});
// console.log('Todo Id', newNoteRef.key);

var todoRef = firebaseRef.child('todos');
todoRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todoRef.push({text: 'Walk the dog'});
todoRef.push({text: 'Eat a pizza'});
