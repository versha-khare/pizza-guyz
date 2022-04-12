import React from 'react'

function Address(props) {
    const { buildingNumber, city, state, country, pinCode, streetName } = props
    return (
        <div>
            <strong>Address:</strong>
            <br />
            
           
                <p className="mb-0">4980, USAA BLVD, APT# 1024, San Antonio, TX 78240</p>
             
        </div>
    )
}

export default Address