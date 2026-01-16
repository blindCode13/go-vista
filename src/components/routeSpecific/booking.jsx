"use client";

import useAuth from "@/hooks/useAuth";

export default function Booking() {
  const {isLoggedIn} = useAuth();
  return (
    <div className="mt-6">
    {
      isLoggedIn ?
      <button className="btn-primary cursor-pointer" onClick={() => {
        alert("Successfully Booked.");
        window.location.href = "/"
      }}>Book</button> :
      <h3>Please Login to Book this.</h3>
    }
    </div>
  );
}