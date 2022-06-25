import React from "react";

function Cardscontainer() {
  return (
    <>
    

    {/* Card description */}

    <h1 id="description" class="container-heading">Trusted advice and insurance solutions to protect </h1>
    <div className="container" class="m-10 border-2 rounded-lg hover:border-slate-400 bg-slate-300 p-8" >
    <div class="p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
   
    <div class="rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-semibold text-2xl mb-6 text-zinc-800">Personal Insurance</div>
        <p class="text-gray-800 text-base ">
        Insurance purchased for personal or family protection purposes as contrasted with insurance of business property or interests.
        </p>
      </div>
    </div>
   
    <div class="rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-semibold text-2xl mb-6 text-zinc-800">Health Insurance</div>
        <p class="text-gray-800 text-base">
        Health insurance, on the other hand, helps pay for medical expenses such as doctor’s visits, hospital stays, medications, tests, and procedures.
        </p>
      </div>
    </div>

    <div class="rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-semibold text-2xl mb-6 text-zinc-800">Business Insurance</div>
        <p class="text-gray-800 text-base">
          Business insurance refers broadly to a class of insurance coverage intended for purchase by businesses rather than individuals.
        </p>
      </div>
    </div>

    <div class="rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-semibold text-2xl mb-6 text-zinc-800">Benefits Insurance</div>
        <p class="text-gray-800 text-base">
        Payments or services provided under stated circumstances under the terms of an insurance policy. Benefits are the services the programs
        </p>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Cardscontainer;