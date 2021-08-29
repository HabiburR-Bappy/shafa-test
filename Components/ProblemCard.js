
const SingleServicesCard = ({ data }) => {

    return (
       <div className="d-flex align-items-center">
           <img src={data.image} alt=""/>
           <p className="ml-2">{data.description}</p>
       </div>
    )
}

export default  SingleServicesCard