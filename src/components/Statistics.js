import React from 'react'
import "../assets/css/statistics.css"
import bjp from "../assets/image/bjp.png"
import inc from "../assets/image/inc.png"
import bpf from "../assets/image/bpf.png"
import ajp from "../assets/image/ajp.png"

function Statistics() {
    return (
        <>
            <section className="statistics">


                <section id="admin_stats_container">
                    <div className="stat-h2"><h2>Statistics</h2></div>
                    
                    <div className="admin_stat_box">

                        <div className="admin_stats_container_up , stat-box">
                            <img src={bjp} alt="BPF" />

                        </div>
                        <div className="admin_stats_container_mid , stat-box">
                            <p>5634</p>
                        </div>
                        <div className="admin_stats_container_lw , stat-box">
                            <p>39%</p>

                        </div>
                    </div>
                    <div className="admin_stat_box">
                        <div className="admin_stats_container_up , stat-box">
                            <img src={inc} alt="INC" />

                        </div>
                        <div className="admin_stats_container_mid , stat-box">
                            <p>3575</p>

                        </div>
                        <div className="admin_stats_container_lw , stat-box">
                            <p>29%</p>

                        </div>

                    </div>
                    <div className="admin_stat_box">
                        <div className="admin_stats_container_up ">
                            <img src={bpf} alt="BPF" />

                        </div>
                        <div className="admin_stats_container_mid ">
                            <p>5689</p>

                        </div>
                        <div className="admin_stats_container_lw ">
                            <p>25%</p>
                        </div>

                    </div>
                    <div className="admin_stat_box">


                        <div className="admin_stats_container_up">
                            <img src={ajp} alt="AJP" />

                        </div>
                        <div className="admin_stats_container_mid">

                            <p>5467</p>
                        </div>
                        <div className="admin_stats_container_lw">
                            <p>15%</p>

                        </div>

                    </div>
                    <div className="admin_stat_box">


                        <div className="admin_stats_container_up">
                            <img src={ajp} alt="AJP" />

                        </div>
                        <div className="admin_stats_container_mid">

                            <p>5467</p>
                        </div>
                        <div className="admin_stats_container_lw">
                            <p>15%</p>

                        </div>

                    </div>


                </section>


            </section>

        </>
    )
}
export default Statistics