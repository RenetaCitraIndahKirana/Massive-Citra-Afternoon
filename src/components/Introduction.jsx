import React from 'react'
import Fotoo from '/public/fotoo.jpeg'
const Introduction = () => {
  return (
    <div class="flex mb-4 pb-24">
  <div class="w-1/2 pt-16 ml-8">
    <p>HELLO I'M CITRA! a student at Raja Ali Haji Maritime University in semester 6. I'm currently participating in an independent study activity at one of the partners in Batam, namely the infinite learning web development program.</p>
  </div>
  <div class="w-1/2 ">
    <img src={Fotoo} alt="" />
  </div>
</div>
  )
}

export default Introduction