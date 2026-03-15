"use client"

import React, { useEffect, useState } from "react"
import PropertyListItem from "./PropertyListItem"
import apiService from "@/services/ApiService"

const PropertyList = ({ landlord_id,favorites}) => {

  const [properties, setProperties] = useState([])
  const [loadingFavorite, setLoadingFavorite] = useState(null)

  const fetchProperties = async () => {
    let url = "/api/properties/"

    if (landlord_id) {
      url += `?landlord_id=${landlord_id}`
    }else if(favorites){
      url += '?is_favorites=true'
    }

    try {
      const response = await apiService.get(url)

      const properties = response.data || []
      const favorites = response.favorites || []

      const propertiesWithFavorite = properties.map((property) => ({
        ...property,
        is_favorite: favorites.includes(property.id)
      }))

      setProperties(propertiesWithFavorite)

    } catch (error) {
      console.error("Failed to fetch properties:", error)
    }
  }

  const markFavorite = async (id, is_favorite) => {

    if (loadingFavorite === id) return

    setLoadingFavorite(id)

    const updated = properties.map((property) =>
      property.id === id ? { ...property, is_favorite } : property
    )

    setProperties(updated)

    // try {
    //   await apiService.post(`/api/properties/${id}/toggle_favorite/`)
    // } catch (error) {

    //   const reverted = updated.map((property) =>
    //     property.id === id ? { ...property, is_favorite: !is_favorite } : property
    //   )

    //   setProperties(reverted)

    //   console.error("Favorite update failed:", error)
    // }

    setLoadingFavorite(null)
  }

  useEffect(() => {
    fetchProperties()
  }, [landlord_id])

  return (
    <>
      {properties.map((property) => (
        <PropertyListItem
          key={property.id}
          property={property}
          loadingFavorite={loadingFavorite}
          markFavorite={markFavorite}
        />
      ))}
    </>
  )
}

export default PropertyList