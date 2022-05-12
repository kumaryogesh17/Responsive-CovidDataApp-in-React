import React ,{useState,useEffect} from 'react'

const Statewise = () => {

   const [data, setData] = useState([]);

   const getCovidData =  async () => {
     const response = await fetch('https://data.covid19india.org/data.json', {mode:'cors'});
     const actualData = await response.json();
     console.log(actualData);
     setData(actualData.statewise);
   }

    useEffect(() => {
      getCovidData(); 
       
    }, []);

    

    return (
        
            <div className="container-fluid mt-2">
              
                <div className="main-heading">
                    <h1>COVID DATA PORTAL</h1>
                </div>
                 <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr className="headings">
                            <th> States </th>
                            <td> Confirmed </td>
                            <td> Recovered </td>
                            <td> Deaths </td>
                            <td> Active </td>
                            <td> LastUpdate </td>
                        </tr>
                    </thead>
                    
                    <tbody>
                     
                      { 
                         data.map((curElem, ind) => { 
                              return(
                            <tr key={ind}>
                                <th className="colhover1"> {curElem.state} </th>
                                <td className="colhover2"> {curElem.confirmed} </td>
                                <td className="colhover3"> {curElem.recovered} </td>
                                <td className="colhover4"> {curElem.deaths} </td>
                                <td className="colhover5"> {curElem.active} </td>
                                <td className="colhover6"> {curElem.lastupdatedtime} </td>
                            </tr>
                              )
                          })
                      }
                    </tbody>
                 </table>
                </div>
            </div>
        
    )
}

export default Statewise
