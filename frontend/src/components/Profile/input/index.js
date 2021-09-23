import React from 'react'
import './style.css'

function index(props) {

    return (
        <div class="row">
            <div class="col-md-3 label-inp">
                <label>{props.name}</label>
            </div>
            <div class="col-md-9">
                <div class="input-group input-group-sm mb-3">
                    <input value={props.value} type={props.type} style={{height: 'calc(1.8em + 1rem + 0px)'}} placeholder={props.placeholder} class="form-control inp-data" aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled={props.disabled}/>
                </div>
            </div>
        </div>
    )
}

export default index
