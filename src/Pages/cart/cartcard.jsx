import './cartcard.css'
import AuthContext from '../../Components/shared/authContext';
import { useContext } from 'react';
const Cartcard = (props) => {
    const {deletecart}=useContext(AuthContext);
   
    async function Deletecart(){
        const id=props.id;
        let payload={
            id
        }
        await deletecart(payload)
        .then((res)=>{
            console.log(res);
            window.location.reload(false);

        })
        .catch((err)=>{
            console.log(err);
        })
        
    }

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
                        
                       <button onClick={Deletecart} className="cart-remove">Remove Course</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Cartcard;