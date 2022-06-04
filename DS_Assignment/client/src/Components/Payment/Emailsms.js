import React from "react"


function EmailSMS() {

    function email() {

        alert("To:user@gmail.com \n" +

            "From:cinema@gmail.com \n" +

            "Subject:Payment Confirmation\n" +

            "Body:\n" +

            "Dear Customer,\n" +

            "Your Payment is Confirmed.Thank You for using our service!!!"

        )

    }

    function sms() {

        alert("Dear Customer, \n" +

            "Your Payment is Confirmed.Thank You for using our service!!!"

        )

    }

    return (

        <div>
             <nav class="navbar b">
                    <div class="container">
                        <form class="d-flex nav1 " role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" ></input>
                            &nbsp;
                            <button class="btn btn-outline-warning " type="submit">
                                Search</button>
                        </form>
                        <a class="navbar-brand" href="#">
                        </a>
                    </div>
                </nav>
            <nav class="navbar navbar-expand-lg ls ">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse ls1" id="navbarNav">



                        <button className="btn btn-lg btn-success" onClick={email}>Check Email</button>
                        &nbsp;&nbsp;
                        <button className="btn btn-lg btn-success" onClick={sms}>Check SMS</button>


                    </div>
                </div>
            </nav>



            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>

    );

}




export default EmailSMS;

