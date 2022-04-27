import React from 'react';
import { Field, reduxForm } from 'redux-form';
import MyButton from '../Ui/Mybutton/MyButton';
import  style from './formBasket.module.css'

const FormBasket = ({handleSubmit,onSubmit}) => {
    return <form 
        className={style.myForm}
        onSubmit={handleSubmit}>
            <div className={style.formWraper}>
                <Field className={style.input} placeholder='name' name='name' component = 'input' />
                <Field className={style.input} placeholder='surname' name='surname' component = 'input' />
                <Field className={style.input} placeholder='addres' name='addres' component = 'input' />
                <Field className={style.input} placeholder='phone' name='phone' component = 'input'/>
                <MyButton
                    style={{marginLeft:'100px'}}
                >Order</MyButton>
            </div>
    </form>
};

const ReduxForm = reduxForm({form: 'orderForm'})(FormBasket)
  

export default ReduxForm;