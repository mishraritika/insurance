import React from 'react'

function HomePage() {
  return (
    <>
    <section class="HeroSection grid grid-cols-2 divide-x flex-wrap mt-6">
        <div class="HeroSectionDetails mt-8 mr-8 pt-8">
            <h1 class="text-slate-50 index-h1 mb-6">We are your trusted insurance agency</h1>
            <h3 class="text-blue-100 index-p">Life insurance offers you Long-term Savings which will give huge benefit later, feel allowed to make inquiry</h3>
        </div>
        <img class="image w-[50vw]"
            src="familyprotection.jpeg"/> 
    </section>
    </>  
  )
}

export default HomePage;