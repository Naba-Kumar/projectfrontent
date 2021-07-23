import React from 'react'

import "../assets/css/applications.css"

function Userquestion() {
    const clr = {
        "background-image": "linear-gradient(to right, rgb(255, 84, 0), #f7ff00)",
        "border": "none"
    }
    const bg = {
        "background-color": "rgb(0,0,0,0)"
    
    }
    const h2 = {
        color: "#000",
    }
    return (
        <>
            <div class="view" style={{ "margin-left": " 0px" }}>

                <section class="admin_option">

                    <section class="admin_approval_forms" style={clr}>
                        <div style={bg} class="admin_option_head">
                            <h2 style={h2}><i class="far fa-address-card"></i>Ask Question Here</h2>
                        </div>
                        <hr/>

                        <form class="modal-content">
                            {/* <div class="input_cluster"> */}
                            <div class="input_items" style={{"width":"100%","display":"flex","justifyContent":"center","flexDirection":"column"}}>

                            <label for="">Assembly constituency:</label>
                                    <input type="text" placeholder="Enter Assembly constituency" id="Assembly constituency"
                                        name="Assembly constituency" required />
                                <label for="First Name">Full Name :</label>

                                <input type="text" placeholder="Enter Fullt Name" name="Full Name" required />


                                <label for="Email">Email:</label>

                                <input type="email" placeholder="Enter Email" id="Email" name="Email" required />


                               

                                <label for="Complain">Enter Question :</label>

                                <textarea style={{"display":"block", "height": "100px" }} type="textarea" placeholder="Enter your Question under 150 Characters" name="complain" required />
                                {/* </div> */}


                            </div>




                            <div class="input_cluster" id="admin_input_cluster">
                                <div class="input_item_button">
                                    <input type="submit" value="Submit" />

                                </div>
                                <div class="input_item_button">
                                    <input type="reset" value="Reset" />

                                </div>

                            </div>

                        </form>

                    </section>
                </section>
            </div>
        </>
    )
}

export default Userquestion