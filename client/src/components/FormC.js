import React,{useState,useEffect} from 'react'


function FormC() {
    
        let [day,setDay]=useState('Choose the day')
        let [toTime,setToTime]=useState('Choose to time')
        let [fromTime,setFromTime]=useState('Choose from time')
        let [name,setName]=useState('Choose band name')
        let [res,setRes]=useState('No band assigned')
    console.log('values are being set')
    
    let time=[10,11,12,13,14,15,16,17,18]

    let chooseF=()=>{
        return time.map((t)=>{
        return (t>12?<option key={t-12}>{t-12}</option>:<option key={t}>{t}</option>)
        })
    }

    let chooseT=()=>{
        let _fromTime=fromTime
        if(_fromTime=='Choose from time')
        return;
        if(fromTime<10)
        _fromTime=fromTime+12
        let counter=1

        return time.map((t)=>{
            if(t>_fromTime&&counter<=3){
                counter+=1;
                return (t>12?<option key={t-12}>{t-12}</option>:<option key={t}>{t}</option>)
            }
        })
    }

    function onChangeF(e){
        let val=parseInt(e.target.value)
        setFromTime(val)
    }
    function onChangeT(e){
        let val=parseInt(e.target.value)
        setToTime(val)
    }
    function onChangeN(e){
        setName(e.target.value)
    }
    function onChangeD(e){
        setDay(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        let err=false
        let _to=toTime<10?toTime+12:toTime
        let _from=fromTime<10?fromTime+12:fromTime
        err= day==='Choose the day'?true:err
        console.log(`after day check err value:${err}`)
        err= fromTime==='Choose from time'?true:err
        console.log(`after from check err value:${err} and val ${fromTime}`)
        err=(_to-_from)>3?true:err
        console.log(`after duration check err value:${err}`)
        if(err){
            console.log('something wrong')
            setRes("Not correct input options")
            e.target.reset()
            
        }else{
            
            setRes(`day:${day} from ${fromTime} :to ${toTime} Band name:${name}`)
            setDay('Choose the day')
            setFromTime('Choose from time')
            setToTime('Choose to time')
            setName('Choose band name')
            e.target.reset()
        }
        
    }
    
    return (
        <div id="formc">
            <form onSubmit={onSubmit}>
                <div id="day">
                    <select onChange={onChangeD}>
                        <option key="choose the day">Choose the day</option>
                        <option key="1">1</option>
                        <option key="2">2</option>
                        <option key="3">3</option>
                        <option key="4">4</option>
                        <option key="5">5</option>
                    </select>

                </div>
                <div id="time">
                    <select onChange={onChangeF}>
                        <option key="from" value="Choose from time">Choose from time</option>
                        {chooseF()}
                    </select>
                    <select onChange={onChangeT}>
                        <option key="to" value="Choose to time">Choose to time</option>
                        {chooseT()}
                    </select>
                </div>
                <div id="name">
                <select onChange={onChangeN}>
                        <option key="name band">Choose band name</option>
                        <option key="a">A</option>
                        <option key="b">B</option>
                        <option key="c">C</option>
                        <option key="d">D</option>
                        <option key="e">E</option>
                        <option key="f">F</option>
                        <option key="g">G</option>
                        <option key="h">H</option>
                    </select>

                </div>
                <button type="submit">+</button>
                
            </form>
            <div id="result">
                <h2>{res}</h2>
            </div>
            
            
        </div>
    )
}

export default FormC
