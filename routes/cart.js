const Userschemadb = require("../models/user");

const CartDetails =async(req,res)=>{


    try {
      const updatedCart = req.body; 
      const user=req.user
      console.log(user)

      console.log(updatedCart,"updatecart");

        const check = await Userschemadb.findOne({email:user.email})

        console.log(check,"chekkkk")
        if(check){
          check.cart = updatedCart;
          const savedUser = await check.save();

        }
      
     
  
       
      res.status(200).send({ message: "Cart item added successfully" });
    } catch (error) {
      console.error("Error adding cart:", error);
      res.status(500).send({ message: "Error adding cart item", error });
    }
}

module.exports=CartDetails
