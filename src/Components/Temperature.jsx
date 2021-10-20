import React,{useState} from 'react'
import "../Style/Unit.css";
import GotoHome from "../Common/GotoHome";
const Temperature = () => {
    const[input,setInput] = useState("");
    const[output,setOutput] = useState("");

    const[celciusradioI,setCelciusradioI]=useState(false);
    const[farenheitradioI,setFarenheitradioI]=useState(false);
    const[kelvinradioI,setKelvinradioI]=useState(false);

    const[celciusradio,setCelciusradio]=useState(false);
    const[farenheitradio,setFarenheitradio]=useState(false);
    const[kelvinradio,setKelvinradio]=useState(false);

    const [error,setError]= useState(false);

    const handleChange=(e)=>{
       setInput(parseFloat(e.target.value));
       handleOutput();
    //    let getInput = parseFloat(e.target.value) ;
    //    if(celciusradioI) setInput(getInput + "deg celcius");
    //    else if(farenheitradioI) setInput(getInput + "Farenheit");
    //    else  setInput(getInput + "Kelvin" );
    //    celciusradioI ? input + "deg celcius": farenheitradioI ? input + "Farenheit" : kelvinradioI ? input + "Kelvin" : "" 
    }

    const handleOutput =()=>{

        if(celciusradioI){
            if(farenheitradio){
                const F = (input *(9/5)) +32;
                setOutput(F.toFixed(2));
                
            }
            else if(kelvinradio){
                const K = (input + 273.15) ;
                setOutput(K.toFixed(2));
            }   
            else setError(true);
        }
        else if(farenheitradioI){
             if(celciusradio){
                const C = (input - 32 )* 5/9;
                setOutput(C.toFixed(2));
            }
            else if(kelvinradio){
                const K = (input - 32) *(5/9) + 273.15 ;
                setOutput(K.toFixed(2));
            }   
            else setError(true.toFixed(2));
        }
        else if (kelvinradioI){
            if(celciusradio){
                const C = input - 273.15;
                setOutput(C.toFixed(2));
            }
            else if(farenheitradio){
                const K = (input - 273.15) *(9/5) + 32 ;
                setOutput(K.toFixed(2));
            }   
            else setError(true);

        }
        else setError(false);
        
    }
    const handleUnit=(e)=>{
//  output id's
        const cid = "celcius"
        const fid = "farenheit"
        const kid = "kelvin"
//  output id's

//  input id's
        const celid = "cel"
        const faid = "faren"
        const kelid = "kel"
//  input id's

        // set input unit 
        if(e.target.id === faid){
            setFarenheitradioI(true);

            setKelvinradioI(false);
            setCelciusradioI(false);

        }
        else if(e.target.id === celid){
            setCelciusradioI(true);
            
            setFarenheitradioI(false);
            setKelvinradioI(false);

        }
        else if(e.target.id === kelid){
            setKelvinradioI(true);

            setCelciusradioI(false);
            setFarenheitradioI(false);

        }
        else setError(true); 


        // set input unit 


        // set output unit handler
        if(e.target.id === fid){
            setFarenheitradio(true);

            console.log("click o f , ", farenheitradio)
            setKelvinradio(false);
            setCelciusradio(false);


        }
        else if(e.target.id === cid){
            setCelciusradio(true);
            
            console.log("click o c , ", farenheitradio)
            setFarenheitradio(false);
            setKelvinradio(false);

        }
        else if(e.target.id === kid){
            setKelvinradio(true);

            console.log("click o k , ", farenheitradio)
            setCelciusradio(false);
            setFarenheitradio(false);
        }
        else setError(true); 

    }
    return (
        <div>
            <GotoHome />
            <div className="component-wrapper">
            <div className="c-header"><h4>Temperature convertor</h4></div>
            <div className="math-wrapper">
                    <div className="c-f-input">
                        <div>
                        <input type="number" 
                        value={ input} 
                        onChange={handleChange} 
                        placeholder={celciusradioI ? "degree celcius": farenheitradioI ? "Farenheit" : kelvinradioI ? "Kelvin" : ""} name ="input" />
                            <p className="input_smalltext">
                                {
                                    celciusradioI ? "deg celcius": farenheitradioI ? "Farenheit" : kelvinradioI ? "Kelvin" : "" 
                                }
                            </p>
                        </div>
                        <h6>Select Your Input</h6>
                        <div>
                        <input type="radio" name="temp-i" value={celciusradioI} onClick={handleUnit}    id="cel" />
                        Celcius
                        <input type="radio" name="temp-i" value={farenheitradioI}  onClick={handleUnit}   id="faren" />
                        Farenheit
                        <input type="radio" name="temp-i"value={kelvinradioI} onClick={handleUnit}   id="kel" />
                        Kelvin
                        </div>
                       
                    </div>
                    <p>=</p>
                    <div className="c-f-output">
                    <h6>Select Your output</h6>
                    <div>
                        {celciusradioI ? 
                            <>
                             <input type="radio" name="temp-o" onClick={handleUnit} className="disabledRadioButton" value ={celciusradio}  disabled id="celcius"  /> Celcius
                            </>
                             : 
                             <>
                             <input type="radio" name="temp-o" onClick={handleUnit}  value ={celciusradio}  id="celcius"  /> Celcius
                             </>
                         }
                        {farenheitradioI ? 
                            <>
                             <input type="radio" name="temp-o" onClick={handleUnit} value ={farenheitradio} className="disabledRadioButton"  disabled id="farenheit" /> Farenheit
                            </>
                             : 
                             <>
                             <input type="radio" name="temp-o" onClick={handleUnit} value ={farenheitradio}   id="farenheit" /> Farenheit
                             </>
                         }
                        {kelvinradioI ?
                               <>
                                <input type="radio" name="temp-o" onClick={handleUnit} className="disabledRadioButton"  disabled value ={kelvinradio} id="kelvin" />Kelvin
                               </>
                               : 
                               <>
                               <input type="radio" name="temp-o" onClick={handleUnit}  value ={kelvinradio} id="kelvin" />Kelvin
                               </>
                        }
                       
                         </div>
                    <div>
                        <input type="text" value={output} placeholder ="Result" name ="output" />
                        <p className="output_smalltext">
                                {
                                    output ?
                                    celciusradio ? "deg celcius": farenheitradio? "Farenheit" : kelvinradio ? "Kelvin" : "" :""
                                }
                        </p>
                    </div>          
                </div>
                    <div className="button-holder">
                        <button onClick={handleOutput}
                            className={input  !== "" ? "enabledButtonTemp button" : "disabledButton button"}
                         >Convert</button>    
                    </div>    
                </div>                       
        </div>
        </div>
    )
}

export default Temperature;
