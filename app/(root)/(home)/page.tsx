import { SignedIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="slide-in-right text-dark500_light700 flex w-full flex-col justify-between gap-4 ">
      <SignedIn>
        {/* <div className="w-[220px]">
          <Average />
        </div> */}
      </SignedIn>
    </div>
  );
};

export default page;


// "use client";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { SignedIn, SignedOut } from "@clerk/nextjs";
// import React from "react";
// // import { Card } from "@/components/ui/card"
// // import { BarChart } from "recharts";

// export default function page() {
//   return (
//     <>
//     <SignedOut>
//     <div className="w-[70vw] flex items-center align-center mx-auto mt-[200px] rounded-lg bg-white p-6 shadow-lg">
//     <div className="m-auto py-12">
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-4xl font-bold mb-2">Pricing plans for teams of all sizes</h1>
//         <p className="text-gray-600 mb-10">
//           Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in.
//           Explicabo id ut laborum.
//         </p>
//         <div className="flex justify-center gap-6">
//           <Card className="w-[350px]">
//             <div className="p-6">
//               <h2 className="text-2xl font-bold mb-4">Freelancer</h2>
//               <p className="text-gray-600 mb-6">The essentials to provide your best work for clients.</p>
//               <div className="text-4xl font-bold mb-4">
//                 $24
//                 <span className="text-lg">/month</span>
//               </div>
//               <ul className="text-left mb-6">
//                 <li>✔ 5 products</li>
//                 <li>✔ Up to 1,000 subscribers</li>
//                 <li>✔ Basic analytics</li>
//                 <li>✔ 48-hour support response time</li>
//               </ul>
//               <Button className="w-full">Buy plan</Button>
//             </div>
//           </Card>
//           <Card className="w-[350px]">
//             <div className="p-6">
//               <Badge className="absolute top-4 right-4" variant="secondary">
//                 Most popular
//               </Badge>
//               <h2 className="text-2xl font-bold mb-4">Startup</h2>
//               <p className="text-gray-600 mb-6">A plan that scales with your rapidly growing business.</p>
//               <div className="text-4xl font-bold mb-4">
//                 $32
//                 <span className="text-lg">/month</span>
//               </div>
//               <ul className="text-left mb-6">
//                 <li>✔ 25 products</li>
//                 <li>✔ Up to 10,000 subscribers</li>
//                 <li>✔ Advanced analytics</li>
//                 <li>✔ 24-hour support response time</li>
//                 <li>✔ Marketing automations</li>
//               </ul>
//               <Button className="w-full bg-blue-600">Buy plan</Button>
//             </div>
//           </Card>
//           <Card className="w-[350px]">
//             <div className="p-6">
//               <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
//               <p className="text-gray-600 mb-6">Dedicated support and infrastructure for your company.</p>
//               <div className="text-4xl font-bold mb-4">
//                 $48
//                 <span className="text-lg">/month</span>
//               </div>
//               <ul className="text-left mb-6">
//                 <li>✔ Unlimited products</li>
//                 <li>✔ Unlimited subscribers</li>
//                 <li>✔ Advanced analytics</li>
//                 <li>✔ 1-hour, dedicated support response time</li>
//                 <li>✔ Marketing automations</li>
//               </ul>
//               <Button className="w-full">Buy plan</Button>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//     </div>
//     </SignedOut>
//     <SignedIn>
//     <div className=" h-[94vh] bg-gray-100 p-8">
//     </div>
//     </SignedIn>
//     </>
//   )
// }