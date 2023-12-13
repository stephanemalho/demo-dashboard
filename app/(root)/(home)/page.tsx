"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
// import { Card } from "@/components/ui/card"
// import { BarChart } from "recharts";

export default function page() {
  return (
    <>
    <SignedOut>
    <div className="w-[70vw] flex items-center align-center mx-auto mt-[200px] rounded-lg bg-white p-6 shadow-lg">
    <div className="m-auto py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Pricing plans for teams of all sizes</h1>
        <p className="text-gray-600 mb-10">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in.
          Explicabo id ut laborum.
        </p>
        <div className="flex justify-center gap-6">
          <Card className="w-[350px]">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Freelancer</h2>
              <p className="text-gray-600 mb-6">The essentials to provide your best work for clients.</p>
              <div className="text-4xl font-bold mb-4">
                $24
                <span className="text-lg">/month</span>
              </div>
              <ul className="text-left mb-6">
                <li>✔ 5 products</li>
                <li>✔ Up to 1,000 subscribers</li>
                <li>✔ Basic analytics</li>
                <li>✔ 48-hour support response time</li>
              </ul>
              <Button className="w-full">Buy plan</Button>
            </div>
          </Card>
          <Card className="w-[350px]">
            <div className="p-6">
              <Badge className="absolute top-4 right-4" variant="secondary">
                Most popular
              </Badge>
              <h2 className="text-2xl font-bold mb-4">Startup</h2>
              <p className="text-gray-600 mb-6">A plan that scales with your rapidly growing business.</p>
              <div className="text-4xl font-bold mb-4">
                $32
                <span className="text-lg">/month</span>
              </div>
              <ul className="text-left mb-6">
                <li>✔ 25 products</li>
                <li>✔ Up to 10,000 subscribers</li>
                <li>✔ Advanced analytics</li>
                <li>✔ 24-hour support response time</li>
                <li>✔ Marketing automations</li>
              </ul>
              <Button className="w-full bg-blue-600">Buy plan</Button>
            </div>
          </Card>
          <Card className="w-[350px]">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
              <p className="text-gray-600 mb-6">Dedicated support and infrastructure for your company.</p>
              <div className="text-4xl font-bold mb-4">
                $48
                <span className="text-lg">/month</span>
              </div>
              <ul className="text-left mb-6">
                <li>✔ Unlimited products</li>
                <li>✔ Unlimited subscribers</li>
                <li>✔ Advanced analytics</li>
                <li>✔ 1-hour, dedicated support response time</li>
                <li>✔ Marketing automations</li>
              </ul>
              <Button className="w-full">Buy plan</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
    </div>
    </SignedOut>
    <SignedIn>
    <div className=" h-[94vh] bg-gray-100 p-8">
      {/* <div className="grid grid-cols-4 gap-6">
        <Card className="flex flex-col justify-between rounded-lg bg-white p-4 shadow">
          <BookOpenIcon className="h-6 w-6 text-[#3B82F6]" />
          <div className="text-3xl font-semibold">281</div>
          <div className="text-sm text-gray-500">Bookings</div>
          <div className="text-xs text-green-500">+3% than last month</div>
        </Card>
        <Card className="flex flex-col justify-between rounded-lg bg-white p-4 shadow">
          <UsersIcon className="h-6 w-6 text-[#22C55E]" />
          <div className="text-3xl font-semibold">2,300</div>
          <div className="text-sm text-gray-500">Today's Users</div>
          <div className="text-xs text-green-500">+1% than yesterday</div>
        </Card>
        <Card className="flex flex-col justify-between rounded-lg bg-white p-4 shadow">
          <DollarSignIcon className="h-6 w-6 text-[#efdd10]" />
          <div className="text-3xl font-semibold">34k</div>
          <div className="text-sm text-gray-500">Revenue</div>
          <div className="text-xs">Just updated</div>
        </Card>
        <Card className="flex flex-col justify-between rounded-lg bg-white p-4 shadow">
          <HeartIcon className="h-6 w-6 text-[#EC4899]" />
          <div className="text-3xl font-semibold">+91</div>
          <div className="text-sm text-gray-500">Followers</div>
          <div className="text-xs">Just updated</div>
        </Card>
        <Card className="col-span-2 rounded-lg bg-white p-4 shadow">
          <BarCharts className="h-[50vh] w-full " />
          <div className="mt-4 text-sm text-gray-500">Website Views</div>
          <div className="text-xs text-gray-400">Last Campaign Performance</div>
          <div className="text-xs text-blue-500">campaign sent 2 days ago</div>
        </Card>
        <Card className="rounded-lg bg-white p-4 shadow">
          <div className="mt-4 text-sm text-gray-500">Daily Sales</div>
          <div className="text-xs text-gray-400">(+15%) increase in today sales.</div>
          <div className="text-xs text-gray-500">updated 4 min ago</div>
        </Card>
        <Card className="rounded-lg bg-white p-4 shadow">
          <div className="mt-4 text-sm text-gray-500">Completed Tasks</div>
          <div className="text-xs text-gray-400">Last Campaign Performance</div>
          <div className="text-xs text-gray-500">just updated</div>
        </Card>
        <Card className="col-span-2 rounded-lg bg-white p-4 shadow">
          <div className="mb-4 text-sm text-gray-500">Projects</div>
          <div className="text-xs text-blue-500">30 done this month</div>
          <div className="flex items-center justify-between py-2">
            <ClipboardCheckIcon className="h-4 w-4 text-blue-500" />
            <span className="text-sm">Material UI XD Version</span>
            <span className="text-sm">$14,000</span>
          </div>
        </Card>
        <Card className="rounded-lg bg-white p-4 shadow">
          <div className="mb-4 text-sm text-gray-500">Orders overview</div>
          <div className="text-xs text-green-500">24% this month</div>
          <div className="flex items-center justify-between py-2">
            <ShoppingCartIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm">$2400, Design changes</span>
            <span className="text-xs text-gray-400">22 DEC 7:20 PM</span>
          </div>
        </Card>
      </div> */}
    </div>
    </SignedIn>
    </>
  )
}

// function BarCharts(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
//   return (
//     <div {...props}>
//       <BarChart
//         data={[
//           {
//             name: "A",
//             data: 111,
//           },
//           {
//             name: "B",
//             data: 157,
//           },
//           {
//             name: "C",
//             data: 129,
//           },
//           {
//             name: "D",
//             data: 187,
//           },
//           {
//             name: "E",
//             data: 119,
//           },
//           {
//             name: "F",
//             data: 22,
//           },
//           {
//             name: "G",
//             data: 101,
//           },
//           {
//             name: "H",
//             data: 83,
//           },
//         ]}
//         keys={["data"]}
//         indexBy="name"
//         margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
//         padding={0.3}
//         valueScale={{ type: "linear" }}
//         indexScale={{ type: "band", round: true }}
//         colors={{ scheme: "paired" }}
//         borderWidth={1}
//         borderColor={{
//           from: "color",
//           modifiers: [["darker", 0.2]],
//         }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 5,
//           tickPadding: 5,
//           tickRotation: 0,
//           legend: "Name",
//           legendPosition: "middle",
//           legendOffset: 45,
//           truncateTickAt: 0,
//         }}
//         axisLeft={{
//           tickSize: 5,
//           tickPadding: 5,
//           tickRotation: 0,
//           legend: "Number",
//           legendPosition: "middle",
//           legendOffset: -45,
//           truncateTickAt: 0,
//         }}
//         theme={{
//           tooltip: {
//             container: {
//               fontSize: "12px",
//             },
//           },
//         }}
//         labelSkipWidth={12}
//         labelSkipHeight={12}
//         role="application"
//         ariaLabel="A bar chart showing data"
//       />
//     </div>
//   )
// }


// function BookOpenIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//       <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//     </svg>
//   )
// }


// function ClipboardCheckIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
//       <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
//       <path d="m9 14 2 2 4-4" />
//     </svg>
//   )
// }

// function DollarSignIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="12" x2="12" y1="2" y2="22" />
//       <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//     </svg>
//   )
// }


// function HeartIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
//     </svg>
//   )
// }



// function ShoppingCartIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="8" cy="21" r="1" />
//       <circle cx="19" cy="21" r="1" />
//       <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
//     </svg>
//   )
// }


// function UsersIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }
