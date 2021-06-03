import React, { useEffect, useState } from "react"
import newspic from "../home/img/image 2.png"
import "./css/facultycard.scss"
import { Link } from "gatsby"

const Facultycard = props => {
  const [research, setResearch] = useState()
  useEffect(() => {
    if (props.research != null) {
      setResearch(props.research.split(","))
    }
  }, {})

  return (
    <>
      <div className="facultycard">
        <div className="faculty1">
          {props.extn != 0 ? (
            <p className="extn">Extn:{props.extn}</p>
          ) : null}
          <div className="row fimg">
            <div className="facimg">
              <img
                src={
                  props.image != undefined ? `${props.image}` : "/faculty.png"
                }
                alt=""
              />
            </div>
            <h2>{props.name}</h2>
            <h3>{props.desg}</h3>
            <p>{props.email}</p>
          </div>
        </div>
        <div className="faculty2">
          {research && <p>Research Interests:-</p>}
          {research && research.map(item => <p>{item}</p>)}
          <p>
            <Link to={`/profile?id=${props.email}`}>View Profile</Link>
          </p>
        </div>
      </div>
    </>
  )
}
export default Facultycard
