// import React, { useEffect, useState } from 'react'
// import db from "../firebase"
import "./PlanScreen.css"

function PlansScreen( 
    ) {
    // const [products,setProducts]  = useState([])
    // useEffect(() => {
    //     db.collections('products')
    //     .where("active","==", true)
    //     .get().then(querySnapshot =>{
    //         const products ={};
    //         querySnapshot.array.forEach(async (productDoc) => {
    //     products[productDoc.id]=productDoc.data()
    //     const priceSnap = await productDoc.ref.collection("prices").get();                
    //             priceSnap.docs.forEach(price => {
    //                 products [productDoc.id].prices = {
    //                     priceId: price.id,
    //                     priceData: price.data(),
    //                 };
    //             });
    // });
    // setProducts(products);
    //     })
    // },[])
    // console.log(products);
  return (
    <>
    <div className="plansScreen_plan">
        <div className="planScreen_info">
            <h5>Premium</h5>
            <h6>4K + 1080p</h6>
        </div>
        <button>
        Subscribe            
        </button>
    </div>
    <div className="plansScreen_plan">
        <div className="planScreen_info">
            <h5>Standard</h5>
            <h6>720p + 1080p</h6>
        </div>
        <button>
        Subscribe            
        </button>
    </div>
    <div className="plansScreen_plan">
        <div className="planScreen_info">
            <h5>Basic</h5>
            <h6>340p</h6>
        </div>
        <button>
        Subscribe            
        </button>
    </div>
    </>
  )
}

export default PlansScreen