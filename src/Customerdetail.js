import React, { useState } from 'react';
import Customerdetailback from './Custdetailback';

function Customerdetail() {
    const [fcustno, setFcustno] = useState("")
    const [fname, setFname] = useState("")
    const [faddress, setFaddress] = useState("")
    const [fcylinder, setFcylinder] = useState("")
    const [fmonth, setFmonth] = useState("")
    const [customers, setCustomers] = useState([])
    const [showDetail, setShowDetail] = useState(false)
    const accno =(event)=>{
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
        let cname =  event.target.value
        let length = cname.length
        if(length <= 10){
            setFname(cname)
        }else if(length > 10){
            alert("You have crossed the given limit")
        }
    }
    
    const address =(event)=>{
        let caddress = event.target.value
        let length = caddress.length
        if (length <= 10){
            setFaddress(caddress)
        }else if (length > 10){
            alert("You have crossed the given limit")
        }
    }
    const cylinder =(event)=>{
        setFcylinder(event.target.value)
    }
    const months =(event)=>{
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
            setShowDetail(true)
            const page = {fcustno, fname, faddress, fcylinder, fmonth}
            setCustomers([...customers, page])
            console.log(customers);
        }
    }

    const reset =()=>{
        setFcustno("")
        setFname("")
        setFaddress("")
        setFcylinder("")
        setFmonth("")
        setShowDetail(false)
    }
    // const creteTable =()=>{
    //     console.log("createtable");
    //     let table =[]

    // }
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
                <select value={fcylinder} onChange={cylinder}>
                    <option>Choose Cylinder Types</option>
                    <option value="5Kg">5Kg</option>
                    <option value="14Kg">14Kg</option>
                    <option value="19Kg">19Kg</option>
                </select>
            </div>
            <div>
                <select value={fmonth} onChange={months}>
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
                {showDetail ?  <Customerdetailback custid={fcustno} custname={fname} 
                custaddress={faddress} custcylinder={fcylinder} custmonth={fmonth} />:'no data to show'}
               

            </div>
            <div>
                <button onClick={submit}>Submit</button>
                <button onClick={reset}>Reset</button>
            </div>
            <div>
                {showDetail &&  <table>
                    <thead>
                        <tr>
                            <th>Cust id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Cylinder</th>
                            <th>Months</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{fcustno}</td>
                            <td>{fname}</td>
                            <td>{faddress}</td>
                            <td>{fcylinder}</td>
                            <td>{fmonth}</td>
                        </tr>
                    </tbody>
                </table>}
               
            </div>
        </div>
    );
}

export default Customerdetail;