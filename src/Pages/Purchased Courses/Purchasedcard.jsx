import './purchasedcard.css'

const Cartcard = (props) => {
    

    const cardimage="http://localhost:4000";
    return ( 

        <>
            <div className="cartcard">
                <div className="cart-cardimage">
                    <img src={`${cardimage}/${props.imgpath}`} alt="" />
                </div>
                <div className="cart-card-details">
                    <div className="cart-card-details-title-div">
                        <p className="cart-card-details-title">{props.topic}</p>
                        
                    </div>
                    <div className="cart-card-details-title-div">
                        <p className="cart-card-details-description">{props.description}</p>    
                    </div>
                    <div className="cart-card-details-price">
                        ${props.price}
                    </div>
                    <div className='card-buttons'>
                        
                       <button className="purchased-remove">Watch Course</button>
                       <button className="purchased-review">Review Course</button>

                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Cartcard;