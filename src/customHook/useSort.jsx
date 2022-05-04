import { useEffect, useState } from "react"

export const useSort=(listToSort,typeSort)=>{

    const [list,setList]=useState(listToSort)
    //definimos la función anterior pero sin especificar la lista ya que será la principal
    const sort_list=(value,inverse)=>
    //Ternaria fijarse bien en el cambio de variables
    inverse
    ? [...list].sort((b, a) => (a[value] > b[value] ? 1 : a[value] < b[value] ? -1 : 0))
    : [...list].sort((a, b) => (a[value] > b[value] ? 1 : a[value] < b[value] ? -1 : 0))
// ordenamos la lista con el useEffect
    useEffect(()=>{
        setList(sort_list(typeSort))
    },[])
// devolvemos el estado que contiene la lista
  // ..el método para actualizar el estado
  // ..y el método para ordenarla
    return [list,setList,sort_list]

}  