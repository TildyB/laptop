import axios from "axios"
import React, { useEffect, useState } from "react"
import Laptop from "./components/Laptop"
import foProba from "./context/Proba"



const App = () => {

  const proba2 = React.createContext(null)

  const [loading,setLoading]=useState(true)
  const [laptops,setLaptops] =useState([])
  const [search,setSearch] = useState("")
  const [sort,setSort] = useState("ascending")
  const[sorted,setSorted]= useState(false)

  console.log(foProba)

  const getData = async() =>{
    const response =  await axios.get("https://demoapi.com/api/laptop")
    setLoading(false)
    setLaptops(response.data)
  }

  useEffect(()=>{
    getData() 
  },[])

 
  const teszteles = () =>{
    setSorted(current => !current)

  }

  const sortingDescending = () =>{
      laptops.sort( function( a ,b){
        if(a.weight > b.weight) {

          return 1;}
        if(a.weight < b.weight){

          return -1;}
    })
    setSort("ascending")   
};
const sortingAscending = () =>{
  laptops.sort( function( a ,b){
    if(a.weight < b.weight) {

      return 1;}
    if(a.weight > b.weight){

      return -1;}
})

setSort("descending")   
};

const filteredData = laptops.filter(laptop => laptop.name.includes(search))

  return (

      <proba2.Provider value={{
        kutya:"Vinnie",
        
        }}>
        <input placeholder="search Laptop" onInput={(e)=>{setSearch(e.target.value)}} value={search}></input>
        <button onClick={sort === "ascending" ? sortingAscending : sortingDescending}>Sort weight {sort}</button>
        <div style={{display:"flex",gap:"200px"}}>
          <h1>Laptops</h1>
          {loading && <h1>Loading..</h1>}
          {search.length ==0 
            ? laptops.map(laptop => <Laptop key={laptop.brand} {...{laptop}} />)
            : filteredData.map(laptop => <Laptop key={laptop.brand} {...{laptop}} />)
        }
        </div>
      </proba2.Provider>

   
  )
}

export default App
