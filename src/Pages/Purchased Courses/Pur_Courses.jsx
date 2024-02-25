import Navbar2 from "../../Components/nav2";
import AuthContext from "../../Components/shared/authContext";
import Card from "./Purchasedcard";
import Cartimage from "../images/Group (2).png"
import goto from "../images/goto.png"
import { useEffect,useContext,useState } from "react";
const Purchasedcourses = () => {

    const {purchasedcourses}=useContext(AuthContext);
    const[purchased,setPurchased]=useState([]);
    const[purchasedempty,setPurchasedempty]=useState(false);
    useEffect(()=>{
        Purchasedcourses();
    },[])

    async function Purchasedcourses(){
        await purchasedcourses()
        .then((res)=>{
            if(res.data.purchased_courses.length===0){
                setPurchasedempty(true);
            }
            else{
                setPurchasedempty(false);
            }
            setPurchased(res.data.purchased_courses);
            console.log(res.data.msg);

            
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
    
    return ( 
        <>
            <Navbar2/>
            <div>
                <div className="cartheader">
                    <h1>My Courses</h1>
                </div>   
            </div>
            <div className="cartcontent">
                {purchasedempty && <div className="cartcontent-child">
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


                {!purchasedempty && <div className="cartcontent2">

                    <section className="cartitems">
                        {purchased.map(createcart)}
                    </section>
                   
                    
                </div>}

            </div>
        </>
     );
}
 
export default Purchasedcourses;