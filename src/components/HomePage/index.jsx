import React from 'react'

function HomePage() {
  return (
    <>



    <div class="flex mt-16">
      <div class="basis-1/2 p-12 justify-items-l mt-24">
      <h1 class="text-slate-50 index-h1 mb-6 ">We are your trusted insurance agency</h1>
            <h3 class="text-blue-100 index-p">Life insurance offers you Long-term Savings which will give huge benefit later, feel allowed to make inquiry</h3>

          <div class="homepage-button w-48">
            Learn more
          </div>
      </div>
      <div class=" basis-1/2 align p-24">
      <img class="w-[30vw] rounded-2xl homepage-image "
            src="familyprotection.jpeg"/> 
      </div>
    </div>



    {/* <div class="flex">
        <div class="order-1 basis-1/2">
            <h1 class="text-slate-50 index-h1 mb-6">We are your trusted insurance agency</h1>
            <h3 class="text-blue-100 index-p">Life insurance offers you Long-term Savings which will give huge benefit later, feel allowed to make inquiry</h3>
        </div>
        <div claa="order-2 basis-1/2">
        <img class="w-[10vw]"
            src="familyprotection.jpeg"/> 
    </div>
    </div> */}
    </>  
  )
}

export default HomePage;