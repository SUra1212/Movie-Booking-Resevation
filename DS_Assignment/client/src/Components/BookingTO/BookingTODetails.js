// import React, { Component } from 'react';
// import axios from 'axios';

// export default class BookingTODetails extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       post: {}
//     };
//   }

//   componentDidMount() {

//     const id = this.props.match.params.id;

//     axios.get(`/booking/${id}`).then((res) => {
//       if (res.data.success) {
//         this.setState({
//           post: res.data.post
//         });

//         console.log(this.state.post);
//       }
//     });
//   }




//   render() {

//     const { theater,time,date,seat,category,amount,fname } = this.state.post;
//     return (

//           <form>

// <label>Theater Name</label>
//               <input className="form-control" type="text" placeholder={fname} aria-label="Disabled input example" disabled></input>
            
//               <label>Theater Name</label>
//               <input className="form-control" type="text" placeholder={theater} aria-label="Disabled input example" disabled></input>
            
            
//               <label>Time</label>
//               <input className="form-control" type="text" placeholder={time} aria-label="Disabled input example" disabled></input>
            
            
//               <label>Date</label>
//               <input className="form-control" type="text" placeholder={date} aria-label="Disabled input example" disabled></input>

//               <label>Number of Seat</label>
//               <input className="form-control" type="text" placeholder={seat} aria-label="Disabled input example" disabled></input>

//               <label>Category</label>
//               <input className="form-control" type="text" placeholder={category} aria-label="Disabled input example" disabled></input>
            
//               <label>Amount</label>
//               <input className="form-control" type="text" placeholder={amount} aria-label="Disabled input example" disabled></input>
            
            
                     
//           </form>

//     )

//   }

// }

