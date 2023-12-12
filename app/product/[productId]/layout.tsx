'use client'
import {Button} from "@/components/ui/button";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/Store";
import {decrement, increment} from "@/slices/counterSlice";


export default function ProductDetailLayout({children}: {
    children: React.ReactNode;
}) {
    const {value} = useSelector((state: RootState) => state.counter);
    console.log(value);
    const dispatch = useDispatch();

    return (
        <>
            {children}
            <h2>Product Details Layout </h2>
            <Button onClick={() => dispatch(increment())}>+</Button>
            {value}
            <Button onClick={() => dispatch(decrement())}>-</Button>
        </>
    )
}

