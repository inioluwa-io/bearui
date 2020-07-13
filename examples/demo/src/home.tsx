import React from "react"
import "./App.css"
import { Avatar } from "rap-ui"
import AdminPanel from "react-admin-panel"
import img from "./brooks-leibee-562087-unsplash.jpg"
import { Link } from "react-router-dom"

const Home: React.FC<any> = () => {
  return (
    <>
      <p>{AdminPanel}</p>
      <Avatar
        alt="avatar"
        text="LD"
        size="200px"
        src={img}
        withBadge
        badgeColor="warning"
        badgeText="10"
      />
      <Link to ="/login">login</Link>
    </>
  )
}

export default Home
