import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/extra-menu-info.scss"


export const ExtraMenuInfo = (props) => {

   const data = useStaticQuery(graphql`
   query MyExtraMenuQuery {
      LangPL: allDatoCmsExtraMenuItem(filter: {locale: {eq: "pl"}}) {
        nodes {
          extraMenuItem {
            ... on DatoCmsExtraItemName {
              name
            }
            ... on DatoCmsExtraItemPrice {
              price
            }
          }
          position
        }
      }

      LangEN: allDatoCmsExtraMenuItem(filter: {locale: {eq: "en"}}) {
         nodes {
           extraMenuItem {
             ... on DatoCmsExtraItemName {
               name
             }
             ... on DatoCmsExtraItemPrice {
               price
             }
           }
           position
         }
       }

       LangPLInfo: allDatoCmsExtraMenuInfo(filter: {locale: {eq: "pl"}}) {
         nodes {
           extraMenuInfo
         }
       }
       LangENInfo: allDatoCmsExtraMenuInfo(filter: {locale: {eq: "en"}}) {
         nodes {
           extraMenuInfo
         }
       }
    }

   `)


   let allData;
   let allDataInfo;

   props.langChosen ? allData = data.LangEN : allData = data.LangPL;
   props.langChosen ? allDataInfo = data.LangENInfo : allDataInfo = data.LangPLInfo;

   const currensy = ' zł'

 return (
    <>
    <span id={`border-top`}></span>
    <div className={`extra-menu-info`}>



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
                        <div key={index} className={`extra-menu-item`}>
                        <p>{block.extraMenuItem[0].name}</p>
                        <p>{block.extraMenuItem[1].price}{currensy}</p>
                        </div>
   ))

   }

   {
   allDataInfo.nodes.map((block, index) => (
      <div key={index} className={`extra-info`}>
      <p id={`text-info`}>{block.extraMenuInfo}</p>
      </div>
   ))
   }

   </div>
   </>
 )
}

export default ExtraMenuInfo



