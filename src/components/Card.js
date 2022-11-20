/* import React from 'react' */

/* https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw1I2_PrJl3YNTks83Gh8FjS&ust=1669009768961000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDv_MKIvPsCFQAAAAAdAAAAABAE */
/* to check card is taken different values or not  
const Card = (props)=>{   (function card())
    cosole.log(props.values);   (before retrn statement)
 */


/* function card() == const card = ()  =>*/

 /* const Card = (props)=>{
    console.log(props.values);
    /* props destructuring */
    /* const {_id, desc, url,productName}=props.values;
  return (
    <div class="card" >
  <img src={url} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title"> {props.values.productName}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary">Go somewhere</button>
  </div>
</div>
  );
};
export default Card; */ 


import React, { Component } from 'react';

 class Card extends Component {
  render() {
    console.log("logged via this" , this.props);
    const {_id, desc, url,productName}=this.props.values;
    this.state={btnText: "Buy" +_id,};
    return (
        <div class="card" >
      <img src={url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"> {productName}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-primary">Go somewhere</button>
      </div>
    </div>
      );
  }
}

export default Card;

