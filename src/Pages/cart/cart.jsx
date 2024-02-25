import Navbar2 from "../../Components/nav2";
import './cart.css';
import Card from "./cartcard"
import Cartimage from "../images/Group (1).png"
import goto from "../images/goto.png"
import AuthContext from "../../Components/shared/authContext";
import { useEffect,useContext,useState } from "react";
const Mycart = () => {


    const {cartitems,checkout}=useContext(AuthContext);
    const[cart,setCart]=useState([]);

    const[price,setPrice]=useState(false);
    const[cartempty,setCartempty]=useState(false);

    useEffect(()=>{
        Cartitems();

    },[])

    async function handlecheckout(){
        await checkout()
        .then((res)=>{
            console.log("Checkout Successful !")
            window.location.reload(false);
            

        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function createcart(cartdata){
        console.log(cartdata);
        return(
            <Card
                key={cartdata._id}
                id={cartdata._id} 
                imgpath={cartdata.imgpath}
                topic={cartdata.topic}
                description={cartdata.description}
                categories={cartdata.categories}
                price={cartdata.price}
                lesson={cartdata.lesson}
                vidpath={cartdata.vidpath}
            />
        )
    }

    async function Cartitems(){
        await cartitems()
        .then((res)=>{
            if(res.data.cart.length===0){
                setCartempty(true);
            }
            else{
                setCartempty(false);
            }
            setCart(res.data.cart);
            setPrice(res.data.price);
            console.log("Cart details sent !")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return ( 
        <>
            <Navbar2/>
            <div>
                <div className="cartheader">
                    <h1>My Cart</h1>
                </div>   
            </div>
            <div className="cartcontent">
                {cartempty && <div className="cartcontent-child">
                    <div>
                        <img src={Cartimage} alt="" />

                    </div>
                    <div className="cart-content-grandchild">
                        <div className="cartgoto">
                            <img className="goto_image" src={goto} alt="" />
                            <p>Return to home</p>
                        </div>

                    </div>
                </div>}


                {!cartempty && <div className="cartcontent2">

                    <section className="cartitems">
                        {cart.map(createcart)}
                    </section>
                    <section className="total">
                        <div className="total-child">
                            <div>
                                <h1 className="total-child-first">Total</h1>
                            </div>
                            <div>
                                <h1>${price}</h1>
                            </div>
                            <div>
                                <button onClick={handlecheckout} className="cart-buy-now" style={{height:"56px", width:"300px",borderRadius:"5px"}}>Checkout</button>
                            </div>
                        </div>
                    </section>
                    
                </div>}

            </div>
            
        </>
     );
}
 
export default Mycart;