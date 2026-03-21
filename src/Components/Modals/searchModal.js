'use client'
import { useState } from "react"
import { Calendar,Range } from "react-date-range"
import UseSearchModel from "@/hooks/useSearchModel"
import Modals from "./modals"
import SelectCountry,{SelectCountryValue} from "../Forms/SelectCountry"
import CustomButton from "../Forms/CustomButton"

const SearchModel = () =>{
    const initialDateRange={
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
    }

    const[dateRange,setDateRange]=useState(initialDateRange)
    const[country,setCountry]=useState();
    const searchModel=UseSearchModel()

    //
    // Set date range
        const _setDateRange=(selection)=>{
            if(searchModel.step === 'checkin'){
                searchModel.openModel('checkout')
            }
        }
    //
    // Contents


    let content = (<></>)

    const contentLocation=(
        <>
            <h2 className="mb-6 text-2xl">
                Where do you want to go?
            </h2>
            <SelectCountry
                value={country}
                onChange={(value)=>setCountry(value)}
            />
            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label= "check in date ->"
                    onClick={()=> searchModel.openModal('checkin')}
                />
            </div>
        </>
    )
    const contentCheckin=(
        <>
         <h2 className="mb-6 text-2xl">
                When do you want to check in?
            </h2>
        </>
    )

    if(searchModel.step=="location"){
        content=contentLocation
    }else if(searchModel.step=="checkin"){
        content=contentCheckin
    }

    return(
        <Modals
            label='Search'
            content={content}
            isOpen={searchModel.isOpen}
            close={searchModel.close}
        />
    )
}
export default SearchModel