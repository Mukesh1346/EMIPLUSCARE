             "use client"
import React from "react";
import "./ExtendedWarrantyPage.css"; // External CSS file
import Image from "next/image";
import icon1 from "@/app/Assist/Images/icon1.png"
import icon2 from "@/app/Assist/Images/icon2.png"
import icon3 from "@/app/Assist/Images/icon3.png"
import icon4 from '@/app/Assist/Images/verifiy.png'
import icon5 from '@/app/Assist/Images/device.png'

import app1 from '@/app/Assist/Images/app1.png'                                 
import app2 from '@/app/Assist/Images/app2.png'                                 
import app3 from '@/app/Assist/Images/app3.png'                                 
import app4 from '@/app/Assist/Images/app4.png'                                 
import app5 from '@/app/Assist/Images/app5.png'                                 
import app6 from '@/app/Assist/Images/app6.png'                                 
import app7 from '@/app/Assist/Images/app7.png'                                 
import app8 from '@/app/Assist/Images/app8.png'                                 
import app9 from '@/app/Assist/Images/app9.png'                                 
import app10 from '@/app/Assist/Images/app10.png'                                 
import app11 from '@/app/Assist/Images/app11.png'                                 
import app12 from '@/app/Assist/Images/app12.png'                                 
import app13 from '@/app/Assist/Images/app3.png'                                 
import app14 from '@/app/Assist/Images/app4.png'                                 

export default function ExtendedWarrantyPage() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };



  const application = [
    {id:1 , name: "Television" ,image:app1},
    {id:2 , name:  "Refrigerator" ,image:app2},
    {id:3 , name: "Air Conditioner" ,image:app3},
    {id:4 , name: "Washing Machine" ,image:app4},
    {id:5 , name: "Microwave Oven" ,image:app5},
    {id:6 , name: "Air Cooler",image:app6},
    {id:7 , name: "Fan" ,image:app7},
    {id:8 , name: "Geyser" ,image:app8},
    {id:9 , name:  "Food Processor" ,image:app9},
    {id:10 , name: "Kitchen Chimney" ,image:app10},
    {id:11 , name: "OTG",image:app11},
    {id:12 , name: "Vacuum Cleaner" ,image:app12},
    {id:13 , name:  "Water Heater" ,image:app13},
    {id:14 , name: "Water Purifier" ,image:app14},
    {id:15 , name: "Dish Washer" ,image:app2},
    {id:16 , name: "Dryer" ,image:app1},
    
       
  ]

  return (
    <div className="extended-page container py-4">
      {/* ===== Tabs ===== */}
      <nav className="navbar sticky-top bg-white border-bottom shadow-sm mb-5">
        <ul className="nav justify-content-center py-2 fw-medium">
          <li className="nav-item">
            <button onClick={() => handleScroll("why")} className="nav-link">Why Extended</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll("how")} className="nav-link">How It Works</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll("appliances")} className="nav-link">Appliances Covered</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll("reviews")} className="nav-link">Reviews</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll("faq")} className="nav-link">FAQ</button>
          </li>
        </ul>
      </nav>

      {/* ===== WHY EXTENDED ===== */}
      <section id="why" className="mb-5">
        <h3 className="section-title">Why Extended warranty?</h3>

        <div className="row gy-4 mt-3">
            <div className=" d-flex gap-3">
           <Image src={icon1}  alt="icon1" className="icons" width={34} height={34} />
            <div>
              <h6 className="fw-bold">Frequent Breakdowns are a reality</h6>
              <p className="text-muted mb-0">
                Avoid inconvenience by getting an extended Warranty for your device.
              </p>
            </div>
          </div>

          <div className=" d-flex gap-3">
           <Image src={icon2}  alt="icon1" className="icons" width={34} height={34} />
            <div>
              <h6 className="fw-bold">Repair costs are exorbitant</h6>
              <p className="text-muted mb-0">
                A damaged panel can cost you nearly 75% of your TV cost. Save on such unexpected costs.
              </p>
            </div>
          </div>

           <div className=" d-flex gap-3">
           <Image src={icon3}  alt="icon1" className="icons" width={34} height={34} />
            <div>
              <h6 className="fw-bold">Unqualified repairers are aplenty</h6>
              <p className="text-muted mb-0">
                Extended warranty plan benefits ensure your product is in safe hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" className="mb-5">
        <h3 className="section-title">How does it work?</h3>

        <ul className="list-group list-group-flush mt-3 steps-list">
          <li className="list-group-item">
         <Image src={icon5}  alt="icon1" className="icons me-4" width={34} height={34} /> Device breaks down
          </li>
          <li className="list-group-item">
 <Image src={icon3}  alt="icon1" className="icons me-4" width={34} height={34} /> Schedule an appointment anytime as per your convenience
          </li>
          <li className="list-group-item">
            <Image src={icon4}  alt="icon1" className="icons me-4" width={34} height={34} /> Verified technician visits as per appointment
          </li>
          <li className="list-group-item">
            <Image src={icon1}  alt="icon1" className="icons me-4" width={34} height={34} />  Pay nothing. Save time and hassles
          </li>
        </ul>
      </section>

      {/* ===== APPLIANCES COVERED ===== */}
      <section id="appliances" className="mb-5">
        <h3 className="section-title">Appliances Covered</h3>

        <div className="row text-center gy-4 mt-3">
          {application.map((item, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="appliance-card rounded h-100">
              <Image src={item.image} alt={item.name} className="appliance-image mb-2" width={40} height={40} />    
              <p className="mb-0 small">{item.name}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-primary fw-semibold mt-3">+16 more</p>
      </section>

      {/* ===== CUSTOMER REVIEWS ===== */}
      <section id="reviews" className="mb-5">
        <h3 className="section-title">Customer Reviews</h3>

        <div className="review-box mt-3">
          <p className="mb-1 fst-italic">
            “Great job. You guys know the key to customer satisfaction. Claim registration was very easy. I was updated of detail through phone, SMS and email.”
          </p>
          <strong>– P. SAGAR</strong>
        </div>

        <div className="review-box">
          <p className="mb-1 fst-italic">
            “This is the best service for home appliances with a good quality of spare parts. Glad to have this kind of service in India!”
          </p>
          <strong>– DEEPAL MEHTA</strong>
        </div>

        <div className="review-box">
          <p className="mb-1 fst-italic">
            “Really appreciate the service expert’s professionalism. He helped me understand the issue with my AC & repaired it very fast. Keep doing well!”
          </p>
          <strong>– VARADARAJ REDDY</strong>
        </div>

        <div className="review-box">
          <p className="mb-1 fst-italic">
            “Had a very pleasant experience with OneAssist. The help desk responded on time & assisted me with the required information. Thanks to team OneAssist.”
          </p>
          <strong>– SAURAV SINHA</strong>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq">
        <h3 className="section-title">Frequently Asked Questions</h3>

        <div className="accordion mt-3" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
                Q1. Why should I take a home appliances protection/extended warranty plan?
              </button>
            </h2>
            <div id="q1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Home Appliances allow you to enjoy life fully. A home warranty is a 1-year service contract that covers repair and replacement of major home appliances due to failure or damage.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
                Q2. What is an Extended Warranty Plan?
              </button>
            </h2>
            <div id="q2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Extended Warranty Plan (EWP) is a service agreement that extends the manufacturer’s warranty beyond a specified period. It covers repair and replacement due to product breakdowns.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
                Q3. Why should I buy Extended Warranty Pro offered by OneAssist?
              </button>
            </h2>
            <div id="q3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                OneAssist’s Extended Warranty Pro offers coverage for major mechanical and electrical failures along with 24x7 customer support and unlimited repairs during the coverage period.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
