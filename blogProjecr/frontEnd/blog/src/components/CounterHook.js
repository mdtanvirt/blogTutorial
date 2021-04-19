import React, {useState} from 'react'

function CounterHook() {

    const [count, setCount] = useState(0)
    const [txt, setTxt] = useState('initial text')
    const [info, setinfo] = useState({name:'', email:''})

    return (
        <div>
            <h2>{count}</h2>
            <button onClick = {() => setCount(count+1)} className='btn btn-primary'>Click Here</button>
            <h2>{txt}</h2>
            <button onClick = {() => setTxt('Change the full text')} className='btn btn-primary'>Click</button>
            <input type='text' className='form-control' value={info.name}
            onChange = {e => setinfo({...info, name:e.target.value})}
            />
            <input type='text' className='form-control' value={info.email}
            onChange = {e => setinfo({...info, email:e.target.value})}
            />
            <h2>Name: {info.name}</h2>
            <h2>Email: {info.email}</h2>
        </div>
    )
}

export default CounterHook
