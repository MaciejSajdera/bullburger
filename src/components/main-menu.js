import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/menu.scss"

export const MainMenu = (props) => {

    const data = useStaticQuery(graphql`
    query MainMenuQuery {
        LangPL: allDatoCmsMenuItem(filter: {locale: {eq: "pl"}}) {
            nodes {
              burger {
                ... on DatoCmsBurgerName {
                  name
                }
                ... on DatoCmsBurgerDescription {
                  description
                }
                ... on DatoCmsPrice {
                  burgerPrice
                }
              }
              position
            }
          }

          LangEN: allDatoCmsMenuItem(filter: {locale: {eq: "en"}}) {
            nodes {
              burger {
                ... on DatoCmsBurgerName {
                  name
                }
                ... on DatoCmsBurgerDescription {
                  description
                }
                ... on DatoCmsPrice {
                  burgerPrice
                }
              }
              position
            }
          }
      }
    `)

    const currensy = ' zł'
    let allData;

    props.langChosen ? allData = data.LangEN : allData = data.LangPL;

 return (
  
  <div className={`main-menu`}>

    <div className={`menu-items`}>
    {
    allData.nodes.sort(
                                          (a, b) => {
                                          const positionA = a.position;
                                          const positionB = b.position;
                                          let comparision = 0;
                                            if(positionA > positionB) {
                                              comparision = 1;
                                            } else if (positionA < positionB) {
                                              comparision = -1
                                            }
                                            return comparision
                                          }
                                          )
                
                .map((block, index) => (
                        <div key={index} className={`burger`}>
                        <p>{block.burger[0].name}</p>
                        <p>{block.burger[1].description}</p>
                        <p>{block.burger[2].burgerPrice}{currensy}</p>
                        </div>
            ))
                }
    </div>

  </div>
 )
}

export default MainMenu



