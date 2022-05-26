import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "../../components/header/Header";
import Trending from "../../components/trending/Trending";
import AllProducts from "../../components/allProducts/AllProducts";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Spinner from "react-spinner-material";
// import from  firebase
import { db } from "../../config/firebase.config";
import {
    collection,
    doc,
    addDoc,
    setDoc,
    deleteDoc,
    onSnapshot,
} from "firebase/firestore";

const Home = () => {
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

    return (
        <div>
            <Navbar />
            {data.map((item) => {
                return (
                    <div style={{ marginTop: "5rem" }}>
                        {item?.data.value}{" "}
                        <button onClick={() => editData(item.id)}>edit</button>
                    </div>
                );
            })}
            <button onClick={() => addData()}>new data</button>
            <Header />
            <Trending />
            <AllProducts />
            <Footer />
        </div>
    );
};

export default Home;
