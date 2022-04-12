import React from 'react'

import PageInfo from '../../UI/PageInfo/PageInfo'

function Disclaimer() {
    return (
        <>
            <PageInfo>
                DISCLAIMER
            </PageInfo>
            <div className="container my-5 py-2">
                <h4>
                    <strong>
                        Copyrights
                    </strong>
                    <hr />
                </h4>
                <p>
                     Pizza Guyz grants you permission to view this website and to print individual pages from this website for your own personal, non-commercial use.
                </p>
                <br />
                <h4>
                    <strong>
                        30 Minutes or Free
                    </strong>
                    <hr />
                </h4>
                <p>
                     We at pizza guyz promise to deliver the pizza within 30 minutes from you placing the order.
                </p>
                <br />
                <h4>
                    <strong>
                        Contacting Us
                    </strong>
                    <hr />
                </h4>
                <p>
                     email: no-email@pizza-guys.com
                </p>
            </div>
        </>
    )
}

export default Disclaimer