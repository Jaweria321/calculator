import React,{ useState} from 'react'
import Button from './Button';

const Calculator = () => {

    const [expression, setExpression] = useState("");
    const [answer, setAnswer] = useState(0);
    const [isCalculated,setIsCalculated] = useState(false);
    const handleClick = val => {
        switch(val) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case '.':
            case "+":
            case "-":
            case "*":
            case "/":
              if(isCalculated){
                setExpression(prev => ""); 
                setIsCalculated(prev => false);
                setAnswer(prev => 0);
              }
              setExpression(prev => {
               return prev.concat(val);
              });
              break;
            case "=":
              setAnswer(prev => 
                {
                    try {
                       return eval(expression);
                      }
                      catch(err) {
                        return "Syntax ERROR"
                      }
                    
                });
              setIsCalculated(prev => true);

              break;
            case "DEL":
                setExpression(prev => 
                    prev.substring(0, prev.length - 1));
                setAnswer(prev => 0)
            break;
            case "AC":
                setExpression(prev => "");
                setAnswer(prev => 0)
            break;
            default:
              // code block
          } 
    }
    const renderButton = val => {
        return (
        <Button value={val} 
            onClick={() => handleClick(val)}
        />
        );

    }

    return (
        <>
            <div className="textArea">
            <p> {expression=== "" ? "0": expression}</p>
            <h2>{answer}</h2>
            </div>
            
            <div className="clearButtons">
                      
                      {renderButton( "DEL" ) } 
                      {renderButton( "AC" ) } 
            </div>
            <div className="board">
                <div className="numarics">
                    <div className="numarics-row">
                        {renderButton( "7" ) } 
                        {renderButton( "8" ) } 
                        {renderButton( "9" ) }
                    </div> 
                    <div className="numarics-row">
                        {renderButton( "4" ) } 
                        {renderButton( "5" ) } 
                        {renderButton( "6" ) } 
                    </div>
                    <div className="numarics-row">
                        {renderButton( "1" ) } 
                        {renderButton( "2" ) } 
                        {renderButton( "3" ) }
                    </div>
                    <div className="numarics-row">
                        {renderButton( "0" ) }
                        {renderButton( "." ) } 
                        {renderButton( "=" ) }
                    </div>
                </div>
                <div className="operators">
                    {renderButton( "+" ) } 
                    {renderButton( "-" ) } 
                    {renderButton( "*" ) } 
                    {renderButton( "/" ) }    
                </div>
            </div>
            
        </>  
    )
}

export default Calculator
