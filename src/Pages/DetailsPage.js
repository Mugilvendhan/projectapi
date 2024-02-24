import React from 'react'
import NavTitle from '../layouts/Header'
import Profile from '../components/profile/Mainprofile'
import Tabledata from '../components/profile/Tabledata'
import Footerblank from '../layouts/Footer'
import BackButton from '../components/BackButton'

function DetailsPage() {
  return (
    <div>
        
       <div>
   < NavTitle />
   </div>
  
  <Profile/>
<div style={{marginTop:'3rem'}}>
<Tabledata/>
</div>
<div style={{marginTop:'2rem', alignItems:'start'}}>
  <BackButton/>
  </div>
<div style={{marginTop:'2rem'}}>
    <Footerblank />
</div>

    </div>
  )
}

export default DetailsPage