import React,{useState} from 'react'
import GotoHome from "../Common/GotoHome";
import "../Style/Unit.css";
const Unit = () => {
    const[input,setInput] = useState("");
    const[output,setOutput] = useState("");

    const[meterIradio,setMeterIradio]=useState(false);
    const[centiIradio,setCentiIradio]=useState(false);
    const[kilometerIradio,setKilometerIradio]=useState(false);
    const[decimeterIradio,setDecimeterIradio]=useState(false);
    const[footIradio,setFootIradio]=useState(false);
    const[inchIradio,setInchIradio]=useState(false);

    const[meter,setMeter]=useState(false);
    const[centi,setCenti]=useState(false);
    const[kilometer,setKilometer]=useState(false);
    const[decimeter,setDecimeter]=useState(false);
    const[foot,setFoot]=useState(false);
    const[inch,setInch]=useState(false);

    const [error,setError]= useState(false);

    const handleChange=(e)=>{        
        setInput(parseFloat(e.target.value));
    }

    const handleInputUnit=(e)=>{
        const m ="m"
        const c = "cm"
        const k = "km"
        const d = "dm"
        const f = "ft"
        const i = "ic"

        // set input unit 
        if(e.target.id === m){

            setMeterIradio(true);
            
            setCentiIradio(false);
            setKilometerIradio(false);
            setDecimeterIradio(false);
            setFootIradio(false);
            setInchIradio(false);
        }
        else if(e.target.id === c){
            setCentiIradio(true);

            setMeterIradio(false);
            setKilometerIradio(false);
            setDecimeterIradio(false);
            setFootIradio(false);
            setInchIradio(false);
            

        }
        else if(e.target.id === k){
            setKilometerIradio(true);

            setCentiIradio(false);
            setMeterIradio(false);
            setDecimeterIradio(false);
            setFootIradio(false);
            setInchIradio(false);

        }
        else if(e.target.id === d){
            setDecimeterIradio(true);

            setCentiIradio(false);
            setMeterIradio(false);
            setKilometerIradio(false);
            setFootIradio(false);
            setInchIradio(false);

        }
        else if(e.target.id === f){
            setFootIradio(true);

            setCentiIradio(false);
            setMeterIradio(false);
            setKilometerIradio(false);
            setDecimeterIradio(false);
            setInchIradio(false);

        }
        else if(e.target.id === i){
            setInchIradio(true);

            setFootIradio(false);
            setCentiIradio(false);
            setMeterIradio(false);
            setKilometerIradio(false);
            setDecimeterIradio(false);

        }
        else setError(true); 

        // set input unit 

           } 
    const handleOutputUnit =(e)=>{
        const midO ="mo"
        const cidO = "cmo"
        const kidO = "kmo"
        const didO = "dmo"
        const fidO = "fto"
        const iidO = "ico"
          // set output unit 

          if(e.target.id === midO){
            setMeter(true);

            setCenti(false);
            setKilometer(false);
            setDecimeter(false);
            setFoot(false);
            setInch(false);
        }
        else if(e.target.id === cidO){
            setCenti(true);

            setMeter(false);
            setKilometer(false);
            setDecimeter(false);
            setFoot(false);
            setInch(false);
            

        }
        else if(e.target.id === kidO){
            setKilometer(true);

            setCenti(false);
            setMeter(false);
            setDecimeter(false);
            setFoot(false);
            setInch(false);

        }
        else if(e.target.id === didO){
            setDecimeter(true);

            setCenti(false);
            setMeter(false);
            setKilometer(false);
            setFoot(false);
            setInch(false);

        }
        else if(e.target.id === fidO){
            setFoot(true);

            setCenti(false);
            setMeter(false);
            setKilometer(false);
            setDecimeter(false);
            setInch(false);

        }
        else if(e.target.id === iidO){
            setInch(true);

            setFoot(false);
            setCenti(false);
            setMeter(false);
            setKilometer(false);
            setDecimeter(false);

        }
        else setError(true); 

        // set output unit 

    }
    
    const handleOutput=()=>{

        if(meterIradio){
            if(centi){
                let res = input * 100 ;
                setOutput(res);
                
            }
            else if(kilometer){
                let res = input / 1000  ;
                setOutput(res.toFixed(3));
            }
            else if(decimeter){
                let res = input * 10  ;
                setOutput(res);
            }    
            else if(foot){
                let res = input * 3.281  ;
                setOutput(res);
            }  
            else if(inch){
                let res = input *  39.37 ;
                setOutput(res);
            }      
            else setError(true);

        }
        else if(centiIradio){
             if(meter){
                let res = input / 100 ;
                setOutput(res.toFixed(2));
            }
            else if(kilometer){
                let res = input / 10000 ;
                setOutput(res.toFixed(3));
            }
            else if(foot){
                let res = input /  30.48 ;                
                setOutput(res.toFixed(3));
            }   
            else if(inch){
                let res = input /  2.54 ;                
                setOutput(res.toFixed(3));
            }
            else if(decimeter){
                let res = input /  10 ;                
                setOutput(res.toFixed(3));
            }   
            else setError(true);
        }
    else if(kilometerIradio){
            if(meter){
               let res = input * 1000 ;
               setOutput(res.toFixed(2));
           }
           else if(centi){
               let res = input * 100000 ;
               setOutput(res.toFixed(6));
           }
           else if(foot){
               let res = input*3281 ;                
               setOutput(res.toFixed(6));
           }   
           else if(inch){
               let res = input * 39370 ;                
               setOutput(res.toFixed(6));
           }
           else if(decimeter){
               let res = input *  10000 ;                
               setOutput(res.toFixed(3));
           }   
           else setError(true);
       }
    else if(decimeterIradio){
            if(meter){
                let res = input / 10 ;
                setOutput(res);
            }
            else if(centi){
                let res = input * 10 ;
                setOutput(res);
            }
            else if(foot){
                let res = input /  3.048;                
                setOutput(res.toFixed(3));
            }   
            else if(inch){
                let res = input * 3.937 ;                
                setOutput(res.toFixed(2));
            }
            else if(kilometer){
                let res = input /  10000 ;                
                setOutput(res.toFixed(3));
            }   
            else setError(true);
        }
     else if(footIradio){
            if(meter){
                let res = input / 3.281 ;
                setOutput(res.toFixed(4));
            }
            else if(kilometer){
                let res = input / 3281 ;
                setOutput(res.toFixed(3));
            }
            else if(centi){
                let res = input * 30.48 ;                
                setOutput(res.toFixed(2));
            }   
            else if(inch){
                let res = input * 12 ;                
                setOutput(res.toFixed(3));
            }
            else if(decimeter){
                let res = input * 3.048 ;                
                setOutput(res.toFixed(3));
            }   
            else setError(true);
            }

     else if(inchIradio){
            if(meter){
                let res = input / 39.37 ;
                setOutput(res.toFixed(4));
            }
            else if(kilometer){
                let res = input / 39370 ;
                setOutput(res.toFixed(7));
            }
            else if(centi){
                let res = input * 2.54 ;                
                setOutput(res.toFixed(2));
            }   
            else if(foot){
                let res = input / 12 ;                
                setOutput(res.toFixed(3));
            }
            else if(decimeter){
                let res = input / 3.937 ;                
                setOutput(res.toFixed(3));
            }   
            else setError(true);
            }
        else setError(false);
        

    }
    
    return (
        <>
         <GotoHome />
        <div className="component-wrapper">
            <div className="c-header"><h4>Unit convertor</h4></div>
            <div className="math-wrapper">
           <div className="c-f-input">
               <div>
               <input type="number" value={input} onChange={handleChange} placeholder="0.00" name ="input" />
               </div>
               <h6>Select Your Input</h6>
              <div>
                 
               <input type="radio" name="unit-i" value={meterIradio} onClick={handleInputUnit}    id="m" />
               Meter
               <input type="radio" name="unit-i" value={centiIradio} onClick={handleInputUnit}   id="cm" />
               Centimeter
               <input type="radio" name="unit-i"  value={kilometerIradio} onClick={handleInputUnit}   id="km" />
               Kilometer
               <input type="radio" name="unit-i"  value={decimeterIradio} onClick={handleInputUnit}   id="dm" />
               Decimeter
               <input type="radio" name="unit-i"  value={footIradio} onClick={handleInputUnit}   id="ft" />
               Foot
               <input type="radio" name="unit-i"  value={inchIradio} onClick={handleInputUnit}   id="ic" />
               Inch
               </div>
           </div>
           
                <p>=</p>
           <div className="c-f-output">   
           <h6>Select Your output</h6> 
           <div>   
               <input type="radio" name="unit-o" value={meter} onClick={handleOutputUnit}    id="mo"  />
               Meter
               <input type="radio" name="unit-o" value={centi} onClick={handleOutputUnit}  id="cmo" />
               Centimeter
               <input type="radio" name="unit-o" value={kilometer} onClick={handleOutputUnit}  id="kmo" />
               Kilometer
               <input type="radio" name="unit-o" value={decimeter} onClick={handleOutputUnit}    id="dmo" />
               Decimeter
               <input type="radio" name="unit-o" value={foot} onClick={handleOutputUnit}   id="fto" />
               Foot
               <input type="radio" name="unit-o"  value={inch} onClick={handleOutputUnit}  id="ico" />
               Inch
            </div>
               <div>
               <input type="text" value={output} name ="output" autoComplete="off" placeholder="0.00" />
               </div>
        </div>
            <div className="button-holder">
               <button onClick={handleOutput} 
                   className={input  !== "" ? "enabledButton button" : "disabledButton button"} >Convert
                </button>   
            </div>  
           </div>
                                    
    </div>
    </>
    )
}

export default Unit;

