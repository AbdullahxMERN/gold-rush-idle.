import React, { useActionState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyitem, coinplus, sellitem } from "../gameSlice";

function Usedash() {
  const coin = useSelector((state) => state.game.coin);
  const sword = useSelector((state) => state.game.inventory.sword)
  const diamond = useSelector((state) => state.game.inventory.diamond)
  const ball = useSelector((state) => state.game.inventory.ball)
    const amount  = useSelector((state) => state.game.amount);
const a= ()=>{
  console.log("hi")
}

 const dispatch = useDispatch()
  return (
    <div className="w-full h-screen flex-col gap-4 ">
    <div className="flex   inset-0  w-full h-20  justify-center items-start z-50 ">
      {/* Background layer */}
      <div className='w-full  md:mx-22 md:border md:bg-blue-600  md:rounded-3xl h-full bg-[url("/image.png")] bg-cover bg-center flex items-center justify-around'>
        <span className="text-xl md:text-2xl text-white font-bold">
          coins : {coin}
        </span>
         <span className="text-xl md:text-2xl  text-white font-bold">
          amount : {amount}
        </span>
      </div>
    </div>
    
                                   {/*middle part*/}
<div className="w-full h-auto flex-1 mt-4">

<div className=" w-full h-70  rounded-3xl bg-[url('D:\react\reduxtlt\src\assets\image.png')] pt-2 bg-amber-800 bg-cover bg-center flex items-center justify-around ">

<div className="w-22 h-43 md:w-30 rounded-3xl flex-col justify-center  bg-white">
<div className="w-full flex justify-center items-center  h-1/2"><img src="https://cdn-icons-png.flaticon.com/128/12877/12877077.png" className="
h-19"/></div>
<div className="font-bold ">steel sword</div>
<div className="font-light">price : 900</div>
<div> <button className="bg-blue-700 text-white h-8 w-14 rounded-xl"
onClick={() => dispatch(buyitem({ cost: 900, type: "sword" }))}>
  Buy
</button>
</div>

</div>

<div className="w-22 h-43 md:w-30 rounded-3xl flex-col justify-center  bg-white">
<div className="w-full flex justify-center items-center  h-1/2"><img src="https://cdn-icons-png.flaticon.com/128/765/765093.png" className="
h-19"/></div>
<div className="font-bold ">diamond</div>
<div className="font-light">price : 1200</div>
<div> <button className="bg-blue-700 text-white h-8 w-14 rounded-xl" onClick={() => dispatch(buyitem({ cost: 1200, type: "diamond" }))}
>buy</button></div>
</div>

<div className="w-22 h-43 md:w-30 rounded-3xl flex-col justify-center  bg-white">
<div className="w-full flex justify-center items-center  h-1/2"><img src="https://cdn-icons-png.flaticon.com/128/1165/1165187.png" className="
h-19"/></div>
<div className="font-bold ">football</div>
<div className="font-light">price : 400</div>
<div> <button className="bg-blue-700 text-white h-8 w-14 rounded-xl"
onClick={() => dispatch(buyitem({ cost: 400, type: "ball" }))}>buy</button></div>
</div>

</div>
</div>

                                {/*middle part*/}
<div className="w-full h-auto flex-1 mt-4">

<div className=" w-full h-70  rounded-3xl bg-[url('D:\react\reduxtlt\src\redux\components\image.png')] pt-2 bg-amber-800 bg-cover bg-center ">
<div className="flex items-center justify-around ">
<div className="w-22 h-43 md:w-30 rounded-3xl flex-col justify-center  bg-white">
<div className="w-full flex justify-center items-center  h-1/2"><img src="https://cdn-icons-png.flaticon.com/128/12877/12877077.png" className="
h-19"/></div>
<div className="font-bold ">steel sword</div>
<div className="font-light">quantity : {sword}</div>
<div> <button className="bg-blue-700 text-white h-8 w-14 rounded-xl"
onClick={() => dispatch(sellitem({ cost: 900, type: "sword" }))}>sell</button></div>
</div>

<div className="w-22 h-43 md:w-30 rounded-3xl flex-col justify-center  bg-white">
<div className="w-full flex justify-center items-center  h-1/2"><img src="https://cdn-icons-png.flaticon.com/128/765/765093.png" className="
h-19"/></div>
<div className="font-bold ">diamond</div>
<div className="font-light">quantity : {diamond}</div>
<div> <button className="bg-blue-700 text-white h-8 w-14 rounded-xl" onClick={() => dispatch(sellitem({ cost: 1200, type: "diamond" }))}>sell</button></div>
</div>

<div className="w-22 h-43 md:w-30 rounded-3xl flex-col justify-center  bg-white">
<div className="w-full flex justify-center items-center  h-1/2"><img src="https://cdn-icons-png.flaticon.com/128/1165/1165187.png" className="
h-19"/></div>
<div className="font-bold ">football</div>
<div className="font-light">quantity : {ball}</div>
<div> <button className="bg-blue-700 text-white h-8 w-14 rounded-xl" onClick={() => dispatch(sellitem({ cost: 400, type: "ball" }))}>sell</button></div>
</div>
</div>
<div className="mt-5 font-bold" >
  <button className="bg-amber-400 text-white h-9 w-20 rounded-xl"
   onClick={() => dispatch(coinplus())}>coins +50</button>
</div>
</div>

</div>
</div>
    
  );
}

export default Usedash;
