"use client"
import React, { useEffect,useState } from 'react'
import PropertyListItem from './PropertyListItem'
import { api } from '@/api/axios'

const PropertyList = () => {
  const[properties,setProperties]=useState([])

  // const fetchProperties=async()=>{
  //   try{
  //       const response=await api.get("api/properties/")
  //       console.log(response.data)
  //   }catch(err){
  //     console.log("error:", err.message)
  //     console.log("an error occured")
  //   }
  // }
  const fetchProperties=async()=>{
    const url= 'http://localhost:8000/api/properties/'

    await fetch(url, {
      method: "GET",

    })
    .then(response=>response.json())
    .then((json)=>{
      setProperties(json.data)
    })
    .catch(error=>{
      console.log(error.message)
      console.log("fail to get api requested data")
    })
  }

  useEffect(()=>{
    fetchProperties()
  },[])
useEffect(()=>{
    console.log(properties)
  },[properties])
  return (
    <>
      {properties.map((property)=>{
      return(<PropertyListItem key={property.id} property={property}/>)
      })}
    </>
  )
}

export default PropertyList
