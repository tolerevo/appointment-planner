import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  const [time, setTime] = useState("");
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(name, contact, date, time);
    setName("");
    setContact("");
    setDate("");
    setTime("");
    /*
    Add contact info and clear data  
    */
  };

  return (
    <>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          name={name}
          setTitle={setName}
          contact={contact}

          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}

          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </>
  );
};