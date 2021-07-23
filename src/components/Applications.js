import React from 'react'

import "../assets/css/applications.css"

function Applications() {
    return (
        <>
            <div class="view">

                <section class="admin_option">

                    <section class="admin_approval_forms">
                        <div class="admin_option_head">
                            <h2>Application Date :</h2>
                        </div>

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

                                    <label for="Epic Number">Assign a Epic Number <span>*</span></label>
                                    <div class="inputs">

                                        <input type="text" placeholder="Assing Epic Number(ABC0000000-ABC9999999)"
                                            name="Epic Number" required />
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

                                    <label for="">State:</label>
                                    <input type="text" placeholder="Enter State" id="State" name="State" required />
                                </div>

                            </div>



                            <div class="input_cluster">


                                <div class="input_items">
                                    <label for="">District:</label>
                                    <input type="text" placeholder="Enter District" id="District" name="District" required />

                                </div>

                                <div class="input_items">
                                    <label for="">Assembly constituency:</label>
                                    <input type="text" placeholder="Enter Assembly constituency" id="Assembly constituency"
                                        name="Assembly constituency" required />

                                </div>

                            </div>

                            <div class="input_cluster" id="admin_input_cluster">
                                <div class="input_item_button">
                                    <input type="submit" value="APPROVE" />

                                </div>
                                <div class="input_item_button">
                                    <input type="reset" value="REJECT" />

                                </div>

                            </div>

                        </form>

                    </section>
                </section>
            </div>
        </>
    )
}

export default Applications