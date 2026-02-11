import { db } from './firebase-config.js';

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* GET SHOP COUNT */
export async function getShopCount(){
const snap=await getDocs(collection(db,"shops"));
return snap.size;
}

/* GET ALL SHOPS */
export async function getShops(){
const snap=await getDocs(collection(db,"shops"));
return snap.docs.map(d=>({id:d.id,...d.data()}));
}

/* GET OFFER COUNT */
export async function getOfferCount(){
const snap=await getDocs(collection(db,"offers"));
return snap.size;
}

/* GET PRODUCTS */
export async function getProducts(){
const snap=await getDocs(collection(db,"products"));
return snap.docs.map(d=>d.data());
}
import { db } from './firebase-config.js';

import {
collection,
addDoc,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ADD SHOP */
export async function addShopData(data){
await addDoc(collection(db,"shops"),data);
}

/* GET SHOPS */
export async function getShops(){
const snap=await getDocs(collection(db,"shops"));
return snap.docs.map(d=>({id:d.id,...d.data()}));
}

/* DELETE SHOP */
export async function deleteShopData(id){
await deleteDoc(doc(db,"shops",id));
}
