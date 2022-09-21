import React, { useState  } from "react";
import {Button, Form, InputGroup} from 'react-bootstrap'
export const OpenConversation = () => {
    const [text, setText]  = useState('');
    
    function handleSubmit(e) {
        e.prenventDefault();
        
    }
    
  return (
    <div className='d-flex pt-5'>
        <h1>OpenConversation</h1>
        <div>
            <Form>
                <Form.Group className="m-2" onSubmit={handleSubmit}>
                    <InputGroup>
                        <Form.Control 
                        as="textarea" 
                        required 
                        value={text} 
                        onChange= {e => setText(e.target.value )}
                        style={{height:"75px", resize:'none'}}
                        />
                        <InputGroup.Append>
                            <Button type="submit">Send </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    
                </Form.Group>
                
            </Form>
        </div>
    </div>
  )
}
