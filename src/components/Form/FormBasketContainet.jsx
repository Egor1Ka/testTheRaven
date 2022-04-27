import { async } from '@firebase/util';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Context } from '../..';
import FormBasket from './FormBasket';
import { addDoc, collection } from 'firebase/firestore';

const FormBasketContainet = () => {
    const { firestore,app } = useContext(Context)

    const data = useSelector((state)=>state.cartReduser)
    
    const colRef = collection(firestore,'orders')
    

    const onSubmit = async (formData) => {
        debugger
        const {addres,name,phone,surname} = formData

        await addDoc(colRef,{
            ...formData,
            order:data.items,
            totalCost:data.totalCost
        })
    
    }
    return <FormBasket
        onSubmit={onSubmit}
    />
};

export default FormBasketContainet;