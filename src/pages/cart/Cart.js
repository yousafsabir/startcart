import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
    remove,
    increment,
    decrement,
} from "../../store/features/productSlice";
import { Table, Button } from "reactstrap";

import "./Cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.value);
    return (
        <>
            <Navbar />
            <div className="cart-cont">
                <Table className="cart-table">
                    <tbody>
                        {product.map((value, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <img src={value.img} alt="" />
                                    </td>
                                    <td>{value.title}</td>
                                    <td>{value.price}</td>
                                    <td>{value.qty}</td>
                                    <td className="buttons-td">
                                        <Button
                                            onClick={() =>
                                                dispatch(remove(value.id))
                                            }
                                            color="danger"
                                        >
                                            Remove
                                        </Button>
                                        <Button
                                            color="success"
                                            onClick={() =>
                                                dispatch(increment(value.id))
                                            }
                                        >
                                            +
                                        </Button>
                                        <Button
                                            color="success"
                                            onClick={() =>
                                                dispatch(decrement(value.id))
                                            }
                                        >
                                            -
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Cart;
