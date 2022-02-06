function Customerdetailback(props) {
    return (
        <div>
            <div>Customerid-{props.custid}</div>
            <div>Name-{props.custname}</div>
            <div>Address-{props.custaddress}</div>
            <div>Cylindertype-{props.custcylinder}</div>
            <div>Months-{props.custmonth}</div>
        </div>
    );
}

export default Customerdetailback;
