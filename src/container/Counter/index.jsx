import React from 'react';
import { connect } from 'react-redux';
import Header from "../../components/Header";
import Button from "../../components/Button";
import { increment, decrement, subtract, add, deleteResult, storeResult } from './../../store/actions/index';

import './style.css';

const Counter = props => (
    <div>
        <Header count={ props.counter }/>

        <div style={{textAlign:'center'}}>

            <Button
                title={'Increment'}
                clicked={ props.onIncrementCounter }
            />

            <Button
                title={'Decrement'}
                clicked={ props.onDecrementCounter }
            />

            <Button
                title={'Add 5'}
                clicked={ props.onAddCounter }
            />

            <Button
                title={'Subtract 5'}
                clicked={ props.onSubtractCounter }
            />

            <hr />

            <Button
                title={'Result'}
                clicked={ () => props.onStoreResult(props.counter) }
            />

            <ul className='List'>
                {
                    props.result.map((item,key) => (
                        <li key={key} onClick={ () => props.onDeleteResult(key) }>{ item }</li>
                    ))
                }
            </ul>

        </div>
    </div>
)

const mapStateToProps = (state) => ({
    counter: state.counter.counter,
    result: state.result.result
})

const mapDispatchToProps = (dispatch) => ({
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter:       () => dispatch(add()),
    onSubtractCounter:  () => dispatch(subtract()),
    onStoreResult:      counter => dispatch(storeResult(counter)),
    onDeleteResult:     key => dispatch(deleteResult(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
