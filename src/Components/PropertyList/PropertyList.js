"use client"
import React, { useEffect,useState } from 'react'
import PropertyListItem from './PropertyListItem'
import { api } from '@/services/ApiServices'
import apiService from '@/services/ApiService'

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
    const tmpProperties=await apiService.get('/api/properties/')
    setProperties(tmpProperties.data)

  }

  useEffect(()=>{
    apiService.get('/api/properties')
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
