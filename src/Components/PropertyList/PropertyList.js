"use client"
import React, { useEffect,useState } from 'react'
import PropertyListItem from './PropertyListItem'
import { api } from '@/services/ApiServices'
import apiService from '@/services/ApiService'

const PropertyList = ({landlord_id}) => {
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

  const markFavorite=(id,is_favorite)=>{
      const tmpProperties=properties.map((property)=>{
        if(property.id == id){
          property.is_favorite=is_favorite
          if(is_favorite==true){
            console.log('added to list of Favourite properties')
          }
          }else{
            console.log('removed from list')
        }

        return property;

      })

      setProperties(tmpProperties);

  }
/*
  const fetchProperties=async()=>{
    let url='/api/properties/'
    if (landlord_id){
      url +=`?landlord_id=${landlord_id}`
    }
    //
    // const tmpProperties=await apiService.get(url)
    // setProperties(tmpProperties.data)
    //

    //
    //
      const response = await apiService.get(url)
      const propertiesWithFavorite = response.data.map((property) => ({...property,is_favorite: response.favorites.includes(property.id)
      }))

      setProperties(propertiesWithFavorite)
    //
    //

  }
*/
const fetchProperties = async () => {
  let url = '/api/properties/'

  if (landlord_id) {
    url += `?landlord_id=${landlord_id}`
  }

  const response = await apiService.get(url)

  const properties = response.data.data
  const favorites = response.data.favorites

  const propertiesWithFavorite = properties.map((property) => ({
    ...property,
    is_favorite: favorites.includes(property.id)
  }))

  setProperties(propertiesWithFavorite)
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
      return(<PropertyListItem key={property.id} property={property} markFavorite={(is_favorite)=>markFavorite(property.id,is_favorite)}/>)
      })}
    </>
  )
}

export default PropertyList
