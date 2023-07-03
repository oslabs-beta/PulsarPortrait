import React from 'react'

const Example = () => {
    let expression: string = 'I am an example';
    // expression = 100;
    // function 
    function exampleFunc (input: string): string {
      return input.slice(5);
    }

    let result: string = exampleFunc(expression);

    
  return (
    <div id='example-id' className='example-class'>{result}</div>
  )
}

export default Example