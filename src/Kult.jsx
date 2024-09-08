import React, {useState} from 'react';

function Kult(props) {
    const [verdi, setVerdi] = useState(0);

    function økverdi() {
        setVerdi(verdi - 1);
    }

    return (
        <div>
         <button className='knappelement' onClick={() => økverdi()}>{"Hvor kul er Aksel"}</button>
        <p>{verdi}</p>
        </div>
    )
}

export default Kult;