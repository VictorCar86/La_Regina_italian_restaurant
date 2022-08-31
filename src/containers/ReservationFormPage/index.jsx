import React from 'react'
import "./ReservationFormPage.css"
import Navbar from '../../components/Navbar'
import SecondaryNav from '../../components/SecondaryNav'
import ReservationSection from '../../components/ReservationSection'

const ReservationFormPage = () => {

    const pages = [
        {
            title: "Reservation",
            route: "/reservation"
        },
        {
            title: "Data",
            route: "/reservation/data"
        },
    ]

  return (
    <>
        <Navbar />
        <main className='ReservationFormPage__main'>
          <SecondaryNav pages={pages} titlePage='Form' />
          <ReservationSection special="true" >
            <section>
                <form action="#" onSubmit={event => event.preventDefault()}>
                  <h3>Wednesday, 10 May-19:00</h3>
                  <input type="text" placeholder='name' />
                  <input type="email" placeholder='e-mail' name="" id="" />
                  <input type="tel" placeholder='phone' name="" id="" />
                  <input type="date" name="" id="" />
                  <h3>Summary</h3>
                  <h3>Expect 2 guests on May 10 at 7:30 p.m.</h3>
                  <button type='submit'>Submit</button>
                </form>
            </section>
          </ReservationSection>
        </main>
    </>
  )
}

export default ReservationFormPage