"use client"

import Image from "next/image"
import UsePropertyModal from "@/hooks/usePropertyModal"
import LoginModal from "./LoginModal"

import Modals from "./modals"
import CustomButton from "../Forms/CustomButton"
import { useState } from "react"
import Categories from "../addproperty/categories"

const AddPropertyModals = () => {
  //
  // STATES
  const [currentstep,setCurrentStep]=useState(1)
  const[dataCategory,setDataCategory]=useState("")


  //
  //
  const addPropertyModals=UsePropertyModal();
  
  //
  //Set datas
  const setCategory=(category)=>{
    setDataCategory(category)
  }

  const content=[
      <>
        {currentstep ===1 ? 
          (
          <>
          <h2 className="mb-6 text-2xl">Choose category</h2>
          <Categories dataCategory={dataCategory} setCategory={(category)=>setCategory(category)}/>
          <CustomButton
            label='Next'
            onClick={()=> setCurrentStep(2)}
        />
          </>
          ):(
          <>
          <p>Step 2 </p>
          </>
          )
        }
        
      
      </>
  ]
  return (
    <div>
        <Modals
        isOpen={addPropertyModals.isOpen} 
        close={addPropertyModals.closeModal} 
        label='Add property' 
        content={content} 
        />
      
    </div>
  )
}

export default AddPropertyModals
