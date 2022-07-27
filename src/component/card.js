


export const Card = ({apiData}) => {
    return (
      
        <>
         <div className='main-card'> 
        {apiData.map((current)=>{
            return(
            <>

                <div className="card-item" >
        
        <span className="item-title">
            {current.name}
        </span>
        <span className="item-read">
                  {current.description}
        </span>
        <img src={current.image} alt="image loading" 
        className="item-media" />
      <button className='item-btn'>Order Now</button>
        </div>
        </>
            )
        })}

</div>
        </>
   
    )
}


