import React from 'react'

function Votingpage() {
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
                            <h2 style={h2}><i class="fas fa-vote-yea"></i> &nbsp;Voting Page</h2>
                            <hr style={{ "background-color": "black" }} />
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

                                    <label for="Epic Number"> Epic Number <span>*</span></label>
                                    <div class="inputs">

                                        <input type="text" placeholder="Epic Number(ABC0000000-ABC9999999)"
                                            name="Epic Number" required />
                                    </div>
                                </div>
                                <div class="input_items">

                                    <label for="DOB">Date Of Birth :</label>

                                    <input type="date" placeholder="Enter DOB" name="DOB" required />
                                </div>
                            </div>




                            <div class="input_cluster">

                                <div class="input_items">

                                    <label for="pw">Password:</label>

                                    <input type="password" placeholder="Enter password" id="pw" name="pw" required />

                                </div>

                                <div class="input_items">

                                    <label for="">State:</label>
                                    <select type="text" placeholder="Enter State" id="State" name="State" required>
                                        <option>Assam</option>
                                        </select>
                                </div>

                            </div>



                            <div class="input_cluster">


                                <div class="input_items">
                                    <label for="">Election:</label>
                                    <select type="text" placeholder="Enter District" id="District" name="District" required >
                                        <option>State Assembly Assam 2021</option>
                                        </select>
                                </div>

                                <div class="input_items">
                                    <label for="">Select Party : </label>
                                    <select type="text" placeholder="Select Party" id="Assembly constituency"
                                        name="Assembly constituency" required >
                                            <option>None</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                            <option>D</option>
                                            </select>

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

export default Votingpage