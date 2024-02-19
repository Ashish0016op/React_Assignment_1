import React from 'react'

export const List = ({list}) => {
  return (
    <div>
        {
            list.map((item,index)=>{
                return (
                    <li key={index}>{item}</li>
                )
            })
        }
    </div>
  )
}
