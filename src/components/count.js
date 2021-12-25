import React, { useState, useEffect } from 'react'
import { Form, Button, Input } from 'antd';

const Count = () => {
   
    // const state = useState(1234)
    // console.log(state);
    // let [name,second,third] = ['pragya','jaiswal','sargun']
    // console.log(name);
    
    const [post , setPost] = useState ({})

    const initialvalue = 0;
    const [counts, setCounts] = useState(initialvalue)
    console.log('state:', counts);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => setPost(json))
    })

    return (
        <div className='text-center mt-5 mb-5'>
            <h6>Current time now:{new Date().toLocaleTimeString()} </h6>
            <h2>React hooks</h2>
            <h3>{counts}</h3>
            <button className='btn btn btn-info' onClick={() => setCounts(counts + 1)}> click me</button>
            <hr />
            <button className='btn btn btn-info' onClick={() => setCounts(counts - 1)}> click me</button>
            <br /> <br />
            <button className='btn btn btn-info' onClick={() => setCounts(initialvalue)}> click me</button>

            <br />  <br />  <br /> 
            <h3>{JSON.stringify(post)}</h3>  

            <Form
                name="basicform"
                onFinishFailed={() => alert('Failed to submit')}
                onFinish={() => alert('Form Submitted')}
                initialValues={{ remember: true }}
            >       
                <Form.Item
                    label="Enter username"
                    name="Username"
                    rules={[{ required: true, message: 'Please enter username' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item>
                    <Button type="success" htmlType="submit">
                        Submit Username
                    </Button>
                </Form.Item>
            </Form>
       
        </div>
    )
}

export default Count