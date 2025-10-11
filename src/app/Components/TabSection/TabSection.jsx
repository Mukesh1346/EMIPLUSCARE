import React from 'react'
import HearFromUs from '../HereFormUs/HereFormUs'
import QuickServices from '@/app/Components/QuickServices/QuickServices'
import "./tabsection.css"

export default function TabSection() {
  return (
   <>
   <div className="TabSuperSection" style={{backgroundColor:" #f6f6f6"}}>
   <div className='container'>
        <div className="TabSectionMain">
            <div className="row">
                <div className="col-md-7">
                      <QuickServices/>
                </div>
                <div className="col-md-5">
                    <div className='hear-section'>
                        <HearFromUs/>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
   </div>
   </>
  )
}
