import React from 'react'
import GotoHome from "../Common/GotoHome";
const Temperature = () => {
    return (
        <div>
            <GotoHome />
            <div className="c-header"><h4>Temperature convertor</h4></div>
            <form onSubmit="" className="c-form">
                    <div className="c-f-input">
                        <input type="text" value="" name ="input" />
                        <input type="radio" name="celcius" id="celcius" />
                        <input type="radio" name="farenheit" id="farenheit" />
                        <input type="radio" name="kelvin" id="kelvin" />
                    </div>

                    <div className="c-f-output">
                        <input type="text" value="" name ="output" />
                        <input type="radio" name="celcius" id="celcius" />
                        <input type="radio" name="farenheit" id="farenheit" />
                        <input type="radio" name="kelvin" id="kelvin" />
                    </div>
                    <button type="submit">Convert</button>
                    
            </form>
        </div>
    )
}

export default Temperature;
