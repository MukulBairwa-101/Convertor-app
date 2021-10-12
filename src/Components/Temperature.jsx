import React,{useState} from 'react'
import GotoHome from "../Common/GotoHome";
const Temperature = () => {
    const[input,setInput] = useState(0.0);
    const[output,setOutput] = useState(0.0);

    const[celciusradioI,setCelciusradioI]=useState(false);
    const[farenheitradioI,setFarenheitradioI]=useState(false);
    const[kelvinradioI,setKelvinradioI]=useState(false);

    const[celciusradio,setCelciusradio]=useState(false);
    const[farenheitradio,setFarenheitradio]=useState(false);
    const[kelvinradio,setKelvinradio]=useState(false);

    const [error,setError]= useState(false);

    const handleChange=(e)=>{
       setInput(parseFloat(e.target.value));
    }

    const handleOutput =()=>{

        if(celciusradioI){
            if(farenheitradio){
                const F = (input *(9/5)) +32;
                setOutput(F);
                
            }
            else if(kelvinradio){
                const K = (input + 273.15) ;
                setOutput(K);
            }   
            else setError(true);
        }
        else if(farenheitradioI){
             if(celciusradio){
                const C = (input - 32 )* 5/9;
                setOutput(C);
            }
            else if(kelvinradio){
                const K = (input - 32) *(5/9) + 273.15 ;
                setOutput(K);
            }   
            else setError(true);
        }
        else if (kelvinradioI){
            if(celciusradio){
                const C = input - 273.15;
                setOutput(C);
            }
            else if(farenheitradio){
                const K = (input - 273.15) *(9/5) + 32 ;
                setOutput(K);
            }   
            else setError(true);

        }
        else setError(false);
        
    }
    const handleUnit=(e)=>{
        const cid = "celcius"
        const fid = "farenheit"
        const kid = "kelvin"

        const celid = "cel"
        const faid = "faren"
        const kelid = "kel"
        
        // set input unit 
        if(e.target.id === faid){
            setFarenheitradioI(true);

            console.log("click i f , ", farenheitradioI)

            setKelvinradioI(false);
            setCelciusradioI(false);

        }
        else if(e.target.id === celid){
            setCelciusradioI(true);
            
            console.log("click i c , ", celciusradioI)
            setFarenheitradioI(false);
            setKelvinradioI(false);

        }
        else if(e.target.id === kelid){
            setKelvinradioI(true);

            console.log("click i  k , ", kelvinradioI)
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
            <div className="c-header"><h4>Temperature convertor</h4></div>
           
                    <div className="c-f-input">
                        <input type="number" value={input} onChange={handleChange} name ="input" />
                        <input type="radio" name="temp-i" value={celciusradioI} onClick={handleUnit}    id="cel" />
                        Celcius
                        <input type="radio" name="temp-i" value={farenheitradioI}  onClick={handleUnit}   id="faren" />
                        Farenheit
                        <input type="radio" name="temp-i"value={kelvinradioI} onClick={handleUnit}   id="kel" />
                        Kelvin
                    </div>

                    <div className="c-f-output">
                        <input type="text" value={output} name ="output" />
                        <input type="radio" name="temp-o" onClick={handleUnit}  value ={celciusradio}  id="celcius"  />
                        Celcius
                        <input type="radio" name="temp-o" onClick={handleUnit} value ={farenheitradio}  id="farenheit" />
                        Farenheit
                        <input type="radio" name="temp-o" onClick={handleUnit} value ={kelvinradio} id="kelvin" />
                        Kelvin
                    </div>
                    <button onClick={handleOutput}>Convert</button>                               
        </div>
    )
}

export default Temperature;
