import React from 'react'
import "../assets/css/delete.css"

function Delete() {
    const width={
        width:"90%"
    }
    return (
        <>
        <div class="view">

            <section class="admin_option">

                <section class="admin_approval_forms">
                    <div class="admin_option_head">
                        <h2>Remove citizen</h2>
                    </div>

                    <form class="modal-content-delete">
                        
                            <div class="input_items" style={width}>

                                <label for="First Name">First Name :</label>

                                <input type="text" placeholder="Enter First Name" name="First Name" required />


                            </div>

                            <div class="input_items" style={width}>
                                <label for="Last Name">Last Name :</label>
                                <div class="inputs">

                                    <input type="text" placeholder="Enter Last Name" name="Last Name" required />
                                </div>


                            </div>
                        

                        
                            <div class="input_items" style={width}>

                                <label for="Epic Number">Assign a Epic Number <span>*</span></label>
                                <div class="inputs">

                                    <input type="text" placeholder="Assing Epic Number(ABC0000000-ABC9999999)"
                                        name="Epic Number" required />
                                </div>
                            </div>
                            <div class="input_items" style={width}>

                                <label for="DOB">Date Of Birth :</label>

                                <input type="date" placeholder="Enter DOB" name="DOB" required />
                            </div>
                        




                        <div class="input_cluster" id="admin_input_cluster">
                            <div id="remove_button">
                               
                                <input type="submit" value="Remove" />


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

export default Delete