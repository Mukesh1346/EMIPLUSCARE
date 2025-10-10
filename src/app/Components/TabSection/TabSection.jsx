import React from 'react'
import HearFromUs from '../HereFormUs/HereFormUs'
import QuickServices from '@/app/Components/QuickServices/QuickServices'

export default function TabSection() {
  return (
    <div className='container'>
        <div className="TabSectionMain">
            <div className="row">
                <div className="col-md-7">
                      <QuickServices/>
                </div>
                <div className="col-md-5">
                    <div>
                        <HearFromUs/>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
