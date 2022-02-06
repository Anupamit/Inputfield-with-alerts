import React, { useState } from 'react';
import Customerdetailback from './Custdetailback';

function Customerdetail() {
    const [fcustno, setFcustno] = useState("")
    const [fname, setFname] = useState("")
    const [faddress, setFaddress] = useState("")
    const [fcylinder, setFcylinder] = useState("")
    const [fmonth, setFmonth] = useState("")

    const accno =(event)=>{
        console.log("Account No-", event.target.value);
        let caccno = event.target.value
        let strcaccno =caccno+''
        let length = strcaccno.length
        if (length <= 5){
            setFcustno(strcaccno)
        }else if(length > 5){
            alert("More than 5 digits is not allowed")
        }
    }
    const name =(event)=>{
        console.log("Name-", event.target.value);
        let cname =  event.target.value
        let length = cname.length
        if(length <= 10){
            setFname(cname)
        }else if(length > 10){
            alert("You have crossed the given limit")
        }
    }
    
    const address =(event)=>{
        console.log("Village-", event.target.value);
        let caddress = event.target.value
        let length = caddress.length
        if (length <= 10){
            setFaddress(caddress)
        }else if (length > 10){
            alert("You have crossed the given limit")
        }
    }
    const cylinder =(event)=>{
        console.log("Cylinder-", event.target.value);
        setFcylinder(event.target.value)
    }
    const months =(event)=>{
        console.log("Months-", event.target.value);
        setFmonth(event.target.value)
    }
    const submit =()=>{
        let custstr = fcustno+''
        if (custstr.length !== 5){
            alert("customer id  is invalid")
        }
        else if(fname === ""){
            alert("Name text feild empty")
        } 
        else if((faddress.length === 0 || faddress.length > 10)){
            alert("address is invalid")

        }        
        else if(fcylinder === ""){
            alert("cyclinder is empty")

        }        
        
        else if(fmonth === ""){
            alert("month is empty")

        }
        

        if(custstr.length===5 && (fname.length>0 && fname.length<11) && faddress.length > 0 && fmonth.length>0 && fcylinder.length > 0){
            console.log(fcustno,fname,faddress,fcylinder,fmonth);
        }
        
    }
    
    return  (
        <div>
            <h2>Customer Details</h2>
            <div>
                <input placeholder='Acc.No' type="number" value={fcustno} onChange={accno}/>
            </div>
            <div>
                <input placeholder='Name' type="text" value={fname} onChange={name}/>
            </div>
            <div>
                <input placeholder='Village' type="text" value={faddress} onChange={address}/>
            </div>
            <div>
                <select onChange={cylinder}>
                    <option>Choose Cylinder Types</option>
                    <option value="5Kg">5Kg</option>
                    <option value="14Kg">14Kg</option>
                    <option value="19Kg">19Kg</option>
                </select>
            </div>
            <div>
                <select onChange={months}>
                    <option>Choose Months</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>
            <div>
                <Customerdetailback custid={fcustno} custname={fname} 
                custaddress={faddress} custcylinder={fcylinder} custmonth={fmonth} />
            </div>
            <div>
                <button onClick={submit}>Submit Detail</button>
            </div>
        </div>
    );
}

export default Customerdetail;