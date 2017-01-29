import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyD0oXmib6yV51NwHL5vcsrMA5eruYwP6WE",
      authDomain: "bills-todo-app.firebaseapp.com",
      databaseURL: "https://bills-todo-app.firebaseio.com",
      storageBucket: "bills-todo-app.appspot.com",
      messagingSenderId: "147380263780"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
