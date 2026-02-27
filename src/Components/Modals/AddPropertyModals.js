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
  const[dataTitle,setDataTitle]=useState("")
  const[dataDescription,setDataDescription]=useState("")
  const[dataPrice,setDataPrice]=useState('')
  const[dataBedrooms,setDataBedrooms]=useState('')
  const[dataBathrooms,setDataBathrooms]=useState('')
  const[dataGuests,setDataGuests]=useState('')



  //
  //
  const addPropertyModals=UsePropertyModal();
  
  //
  //Set datas
  const setCategory=(category)=>{
    setDataCategory(category)
    console.log('category set to ',category)
  }

  const content=[
      <>
        {currentstep === 1 ? 
          (
          <>
          <h2 className="mb-6 text-2xl">Choose category</h2>
          <Categories dataCategory={dataCategory} setCategory={(category)=>setCategory(category)}/>
          <CustomButton
            label='Next'
            onClick={()=> setCurrentStep(2)}
        />
          </>
          ):currentstep === 2 ? (
          <>
          <h2 className="mb-6 text-2xl"> Describe Your place</h2>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e)=>setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Description</label>
              <textarea
                type="text"
                value={dataDescription}
                onChange={(e)=>setDataDescription(e.target.value)}
                className="w-full  h-[150px] p-4 border border-gray-600 rounded-xl"
              ></textarea>
            </div>
            
          </div>
          <CustomButton
            label="Previous"
            className="text-white text-center w-full py-4 rounded-xl mb-2 bg-black hover:bg-gray-800"
            onClick={()=>setCurrentStep(1)}
          />
          <CustomButton
            label="Next"
            onClick={()=>setCurrentStep(3)}
          />
          </>
          ):currentstep === 3 ? (
            <>
            <h2 className="mb-6 text-2xl"> Description</h2>
            <div className="pt-3 pb-6 space-y-4">
              <div className="flex flex-col space-y-2">
                <label>Price per night</label>
                <input
                  type="number"
                  value={dataPrice}
                  onChange={(e)=>setDataPrice(e.target.value)}
                  className="w-full p-4 border border-gray-600 rounded-xl"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Bedrooms</label>
                <input
                  type="number"
                  value={dataBedrooms}
                  onChange={(e)=>setDataBedrooms(e.target.value)}
                  className="w-full p-4 border border-gray-600 rounded-xl"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Bathrooms</label>
                <input
                  type="number"
                  value={dataBathrooms}
                  onChange={(e)=>setDataBathrooms(e.target.value)}
                  className="w-full p-4 border border-gray-600 rounded-xl"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Maximum number of guests</label>
                <input
                  type="number"
                  value={dataGuests}
                  onChange={(e)=>setDataGuests(e.target.value)}
                  className="w-full p-4 border border-gray-600 rounded-xl"
                />
              </div>
            </div>
            <CustomButton
              label="Previous"
              className="text-white text-center w-full py-4 rounded-xl mb-2 bg-black hover:bg-gray-800"
              onClick={()=>setCurrentStep(2)}
            />
            <CustomButton
              label="Next"
              onClick={()=>setCurrentStep(4)}
            />
         
            </>
          ):(
            <>
            kas'dfdr
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
