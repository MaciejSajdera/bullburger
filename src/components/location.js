import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/location.scss"

const Location = (props) => {
  const data = useStaticQuery(graphql`
  query MyLocationQuery {
    LangPL: datoCmsLocation(locale: {eq: "pl"}) {
      locationHeader
      locationSlogan
      adress
    }
    LangEN: datoCmsLocation(locale: {eq: "en"}) {
      locationHeader
      locationSlogan
      adress
    }
    LangPLInfo: allDatoCmsSchedule(filter: {locale: {eq: "pl"}}) {
      nodes {
        day
        hours
      }
    }
    LangENInfo: allDatoCmsSchedule(filter: {locale: {eq: "en"}}) {
      nodes {
        day
        hours
      }
    }
  }
  `)

  let allData;
  let allDataInfo;

  props.langChosen ? allData = data.LangEN : allData = data.LangPL;
  props.langChosen ? allDataInfo = data.LangENInfo : allDataInfo = data.LangPLInfo;

  return (
    <section id={`location`} className={`section-location`}>
      <div className={`location-wrapper`}>
      <h4>
        {allData.locationSlogan}
      </h4>
      <h2>
        {allData.locationHeader}
      </h2>

      <div className={`location-items`}>
      {
      allDataInfo.nodes.map((block, index) => (
                        <div key={index} className={`days-hours`}>
                        <p>{block.day}</p>
                        <p>{block.hours}</p>
                        </div>
      ))
      }
      </div>
      <p className={`adress-info`}>
        {allData.adress}
      </p>
      </div>
    </section>
  )

  

}

export default Location
