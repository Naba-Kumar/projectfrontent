
import React from 'react'

import "../assets/css/applications.css"

function Votenow() {
    const m0={
        "margin":"0",
        "margin-top": "70px"

    }
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
            <div class="view" style={m0}>

                <section class="admin_option">

                    <section class="admin_approval_forms" style={clr}>
                        <div class="admin_option_head" style={bg}>
                            <h2 style={h2}><i class="far fa-address-card"></i>New Voter Application Form</h2>
                        </div>
                        <hr/>

                        <form class="modal-content">
                            <div class="input_cluster">
                                <div class="input_items">

                                    <label for="First Name">First Name :</label>

                                    <input type="text" placeholder="Enter First Name" name="First Name" required />


                                </div>

                                <div class="input_items">
                                    <label for="Last Name">Last Name :</label>
                                    <div class="inputs">

                                        <input type="text" placeholder="Enter Last Name" name="Last Name" required />
                                    </div>


                                </div>
                            </div>

                            <div class="input_cluster">
                                <div class="input_items">

                                    <label for="password">Create a password <span style={{color: "red"}}>*</span> :</label>
                                    <div class="inputs">

                                        <input type="password" placeholder="create a password"
                                            name="password" required />
                                    </div>
                                </div>
                                <div class="input_items">

                                    <label for="DOB">Date Of Birth :</label>

                                    <input type="date" placeholder="Enter DOB" name="DOB" required />
                                </div>
                            </div>



                            <div class="input_cluster">

                                <div class="input_items_gender">

                                    <p>Gender:</p>
                                    <div class="G_option">

                                        <label for="Gender">Male</label>

                                        <input type="radio" id="Gender" name="Gender" value="Male" required />

                                        <label for="Gender">Female</label>

                                        <input type="radio" id="Female" name="Gender" value="Female" required />
                                    </div>

                                </div>
                                <div class="input_items">

                                    <label for="Phone">Phone</label>

                                    <input type="number" placeholder="Enter Phone No" id="Phone" name="Phone" required />

                                </div>


                            </div>

                            <div class="input_cluster">

                                <div class="input_items">

                                    <label for="Email">Email:</label>

                                    <input type="email" placeholder="Enter Email" id="Email" name="Email" required />

                                </div>

                                <div class="input_items">

                                    <label for="State">State:</label>
                                    <select name="State" id="State" >
                                        <option value="ASSAM">ASSAM</option>
                                       
                                    </select>
                                </div>

                            </div>



                            <div class="input_cluster">


                                <div class="input_items">
                                    <label for="District">District:</label>
                                    <select name="District" id="District" name="District">
                                    <option value="DARRANG">DARRANG</option>
                                        </select>

                                </div>

                                <div class="input_items">
                                    <label for="Assembly constituency">Assembly constituency:</label>
                                    <select name="Assembly constituency" id="Assembly constituency" >
                                        <option value="65 KALAIGAON">65 KALAIGAON</option>
                                        <option value="66 SIPAJHAR">66 SIPAJHAR</option>
                                        <option value="67 MANGALDAI">67 MANGALDAI</option>
                                        <option value="68 DALGAON">68 DALGAON</option>
                            
                                    </select>
                                </div>

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

export default Votenow