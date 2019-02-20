import firebase from './firebase-init';


function createUser(email, password){
	firebase.auth().createUserWithEmailAndPassword(email, password)

}

export {
	createUser

};