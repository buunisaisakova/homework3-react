import React from 'react';

function FormPage() {

    const sayHello = ()=>{
        alert ("Привет!")
    }
    return (
        <div>

            <button onClick={sayHello}>Click</button>

        </div>
    );
}

export default FormPage;