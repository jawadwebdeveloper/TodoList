import React, { useEffect, useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
function Todolistapp() {

    const [inputdata , setInputdata] = useState('');
    const  [item , setItem] = useState([]);
    const [replacebutton , setReplaceButton] = useState(true);
    const [iseditdata , setIsEditData] = useState(null);

    const addItem = ()=>{
       if(!inputdata){

       }
       else if(inputdata && !replacebutton)
       {

          setItem(
                item.map((ellem)=>{
                    if(ellem.id === iseditdata)
                    {
                        return(
                               {...ellem, name:inputdata}
                            )
                    }
                    return ellem;
                })

            )
                setReplaceButton(true);
                setInputdata('');
                setIsEditData(null);
       }
       else
       {
        const allinputData = {id: new Date().getTime().toString() , name:inputdata}
        // setItem([...item, inputdata]);
        setItem([...item, allinputData]);
        setInputdata('');
       }
    }

    const deleteitem = (index)=>{
        const updateitem = item.filter((elem)=>{
            return index !== elem.id;
            
        });
        setItem(updateitem);
    }

    const Removeall = (()=>{
        setItem([]);
    })
    const edititem=(id)=>{
        let newEdititem = item.find((elem)=>{
           return elem.id === id; 
        });
        console.log(newEdititem);
        setReplaceButton(false);
        setInputdata(newEdititem.name);
        setIsEditData(id);
    };
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <>
     <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        
                    <div style={{ marginTop:'5%'}} >
                        <div  style={{textAlign:"center"}}>
                            <h5>Get In Touch</h5>
                            <h2>Add Me</h2>
                        </div>
                        <figcaption className="hero-text xyz-nested"  data-aos="flip-down" data-aos-offset="400"  data-aos-duration="1000">Hi Enter the data in todo list </figcaption>
                        <div className="row">
                            <div className="col-sm-6">
                                <input data-aos="fade-right" data-aos-offset="400" data-aos-duration="1000" type="text" placeholder='Enter the item in todo list' value={inputdata} onChange={(e)=>{setInputdata(e.target.value)}}/>
                            </div>
                            <div className="col-sm-6 mt-3">
                                {
                                    replacebutton ? <button className='btn btn-success'   onClick={addItem}>Add item</button> : <button className='btn btn-success' onClick={addItem}>Update item</button>
                                }
                            </div>
                        </div>
                        
                        
                        {/* <h1 data-aos="flip-up" data-aos-anchor-placement="top-center">Show item</h1> */}
                        {/* <h1 data-aos="flip-left" data-aos-delay="200" data-aos-anchor=".example-selector">Show item</h1> */}
                        <h1 data-aos="fade-zoom-in" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="1000">Show item</h1>
                        {/* <h1 data-aos="fade-zoom-in" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="1000">Show item</h1> */}
                        <hr />
                        {
                            // item.map((elem , ind)=>{
                            item.map((elem)=>{
                                return(
                                    // <div key={ind}> onClick={()=>deleteitem(ind)}
                                    <div key={elem.id}>
                                        
                                        {/* <h4>{elem.name}<button  onClick={()=>deleteitem(elem.id)}>delete</button><button onClick={()=>edititem(elem.id)}>Edit</button></h4> */}
                                        {/* <h4>{elem.name}<button  onClick={()=>deleteitem(elem.id)} className='btn btn-danger'>delete</button><button className='btn btn-primary' onClick={()=>edititem(elem.id)}>Edit</button></h4> */}
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <input type="text" name="" id=""  value={elem.name}/>
                                            </div>
                                            <div className="col-sm-8 mt-3">
                                                <button  onClick={()=>deleteitem(elem.id)} className='btn btn-danger'>delete</button><button style={{marginLeft:"5%"}} className='btn btn-primary' onClick={()=>edititem(elem.id)}>Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                            <br />
                        <button data-sm-link-text="Remove All" onClick={Removeall} className="btn btn-danger">Remove All</button>

                    </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
    </>
  )
}

export default Todolistapp