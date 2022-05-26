import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "../../components/header/Header";
import Trending from "../../components/trending/Trending";
import AllProducts from "../../components/allProducts/AllProducts";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Spinner from "react-spinner-material";
// import from  firebase
import { db, useAuth } from "../../config/firebase.config";
import {
    collection,
    doc,
    addDoc,
    setDoc,
    deleteDoc,
    query,
    getDocs,
    onSnapshot,
    where,
} from "firebase/firestore";

const Home = () => {
    const currentUser = useAuth();

    const [data, setData] = useState([]);
    useEffect(
        () =>
            onSnapshot(collection(db, "counter"), (snapshot) => {
                setData(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, data: doc.data() };
                    })
                );
            }),
        []
    );

    const addData = async () => {
        try {
            let value = prompt("add the value");
            let collectionRef = collection(db, "counter");
            await addDoc(collectionRef, { value });
            toast.success("value added successfully");
        } catch (error) {
            console.log(error);
        }
    };

    const editData = async (id) => {
        try {
            let value = prompt("add new value");
            let docRef = doc(db, "counter", id);
            await setDoc(docRef, { value });
            toast.success("value updated successfully");
        } catch (error) {
            console.log(error);
        }
    };
    const deleteData = async (id) => {
        try {
            let docRef = doc(db, "counter", id);
            await deleteDoc(docRef);
            toast.success("value deleted successfully");
        } catch (error) {
            console.log(error);
        }
    };

    const queryDelete = async () => {
        let signal = prompt("Enter the value");
        let collectionRef = collection(db, "counter");
        let q = query(collectionRef, where("value", "==", signal));
        // we have made query, now we are gonna get the docs
        const snapshot = await getDocs(q);
        // this is raw data, lets get wanted data
        let results = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        // now deleting the data
        results.forEach(async (result) => {
            let docRef = doc(db, "counter", result.id);
            await deleteDoc(docRef);
        });
    };

    return (
        <div>
            <Navbar />
            {data.map((item) => {
                return (
                    <div style={{ marginTop: "5rem" }}>
                        <button onClick={() => editData(item.id)}>edit</button>
                    </div>
                );
            })}
            <div>currently logged in as {currentUser?.email}</div>
            <button onClick={() => addData()}>new data</button>
            <button onClick={() => queryDelete()}>Query Delete</button>
            <Header />
            <Trending />
            <AllProducts />
            <Footer />
        </div>
    );
};

export default Home;
