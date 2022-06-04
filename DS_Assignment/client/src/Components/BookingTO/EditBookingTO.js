// import React, { Component } from 'react'
// import axios from 'axios'            

// export default class EditBookingTO extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//             fname:"",
//             theater:"",
//                 time:"",
//                 date:"",
//                 seat:"",
//                 category:"",
//                 amount:""
//         }
//     }
    
//     handleInputChange = (e) =>{
//         const {name,value} = e.target;
    
//         this.setState({
//             ...this.state,
//             [name]:value
//         })
//     }
    
//     onSubmit = (e) =>{  
//     e.preventDefault();
//     const id = this.props.match.params.id;
//     const {fname,theater,time,date,seat,category,amount} = this.state;


//     const data ={
//         fname:fname,
//         theater:theater,
//         time:time,
//         date:date,
//         seat:seat,
//         category:category,
//         amount:amount
    
//     }
    
//     // console.log(data)

//     // const SenderContact = /^[0-9\b]+$/;
//     // const ReceiverContact = /^[0-9\b]+$/;
//     // const ReceiverEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     // const SenderEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     // if ((!SenderContact.test(String(senderContact))) || (senderContact.length != 10)) {
//     //     swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
//     // } else if ((!ReceiverContact.test(String(receiverContact))) || (receiverContact.length != 10)) {
//     //     swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
//     // } else if ((!ReceiverEmail.test(String(receiverEmail)))) {
//     //     swal("Invalid email address !", "Please enter valid email address", "error");
//     // } else if ((!SenderEmail.test(String(senderEmail)))) {
//     //     swal("Invalid email address !", "Please enter valid email address", "error");
//     // } else if (serialNumber.length === 0 || receiverName.length === 0 || receiverContact.length === 0 ||
//     //     receiverEmail.length === 0 || receiverAddress.length === 0 || senderName.length === 0 || senderContact.length === 0 ||
//     //     senderEmail.length === 0 || senderAddress.length === 0 || pNo.length === 0 || pType.length === 0 || pWeight.length === 0 || pShippingCost.length === 0) {
//     //     swal("Please fill all the details")
//     // }else {
    
//     axios.put(`/booking/update/${id}`,data).then((res) =>{
//         let path = "/HBT";
//         if(res.data.success){
//             alert("Data Updated Successfully")
//             this.props.history.push(path);
//             this.setState(
//                 {
//                     fname:"",
//                 theater:"",
//                 time:"",
//                 date:"",
//                 seat:"",
//                 category:"",
//                 amount:""
                
//                 }
            
//             )
        
//         }
    
//     })
// }
    
// componentDidMount(){

//     const id = this.props.match.params.id;

//     axios.get(`/booking/${id}`).then((res) =>{
//         if(res.data.success){
//             this.setState({
//                 fname:res.data.post.fname,
//                 theater:res.data.post.theater,
//                 time:res.data.post.time,
//                 date:res.data.post.date,
//                 seat:res.data.post.seat,
//                 category:res.data.post.category,
//                 amount:res.data.post.amount,
                                
//             });
//             console.log(this.state.post);
//         }
//     });
// }





//     render(){
//         return (
//             <div >
//             <form>
//              <br/>
//              <br/>
//              <br/>
//              <br/>
//              <div className="form-group">
//                                 <div className="form-group col-md-12" style={{ marginBottom: '15px' }}>
//                                     <lable style={{ marginBottom: '5px' }}>Movie Name</lable>
//                                     <input type="text"
//                                         className="form-control"
//                                         name="fname"
//                                         placeholder="Enter Movie Name"
//                                         value={this.state.fname}
//                                         onChange={this.handleInputChange} />
//                                 </div>
//                             </div>
//              <div className="form-group col-md-12" autocomplete="on" style={{marginBottom:'15px'}}>
//                  <lable style={{marginBottom:'5px'}}>Theater</lable>
//                  <select name="theater" onChange={this.handleInputChange} value={this.state.theater} defaultValue="Select theater" className="form-group col-md-12">
//                            <option defaultValue>Select desired theater</option>
//                            <option >SkyLights 3D Cinema</option>
//                            <option >Liberty By Scope Cinemas</option>
//                            <option >Scope Cinemas - CCC </option>
//                            <option >Savoy 3D Cinema</option>
//                            <option >Eros Cinema </option>
//                            <option >Majestic Cineplex </option>
//                            <option >Empire Cineplex</option>
//                            <option >Excel World Cinema Theater </option>
//                            <option >Savoy Premier - Rajagiriya</option>
//                            </select>
            
//              </div>

//              <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
//                  <lable style={{marginBottom:'5px'}}>Time</lable>
//                  <input type="time"
//                  className="form-control"
//                  name="time"
//                  placeholder="Enter Time"
//                  value={this.state.time}
//                  onChange={this.handleInputChange}/>
//              </div>


//              <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
//                  <lable style={{marginBottom:'5px'}}>Date</lable>
//                  <input type="date"
//                  className="form-control"
//                  name="date"
//                  placeholder="Enter Date"
//                  value={this.state.date}
//                  onChange={this.handleInputChange}/>
//              </div>
//              <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
//                  <lable style={{marginBottom:'5px'}}>Seat</lable>
//                  <input type="number"
//                  className="form-control"
//                  name="seat"
//                  placeholder="Enter numebr of seats"
//                  value={this.state.seat}
//                  onChange={this.handleInputChange}/>
//              </div>
//              <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
//                  <lable style={{marginBottom:'5px'}}>Category</lable>
//                  <select name="category" onChange={this.handleInputChange} value={this.state.category} defaultValue="Select Category" className="form-group col-md-12">
//                            <option defaultValue>Select Category</option>
//                            <option >ODC Full</option>
//                            <option >ODC Half</option>
//                            </select>
//              </div>
//              <div className="form-group col-md-12" style={{marginBottom:'15px'}}>
//                  <lable style={{marginBottom:'5px'}}>Amount</lable>
//                  <input type="text"
//                  className="form-control"
//                  name="amount"
//                  placeholder="Total Amount"
//                  value={this.state.amount}
//                  onChange={this.handleInputChange}/>
//              </div>

//          </form>
//           <br></br>
//             <center>
//             <a className="btn btn-warning " type="submit"  style={{marginTop:'15px'}} onClick={this.onSubmit}>
//                       <i className="far fa-check-square" ></i>
//                       &nbsp; save
//                       </a>   
//                   </center>
         
//           </div>      
   
//        )
//    }
//    }