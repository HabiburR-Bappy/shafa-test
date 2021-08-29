import Link from "next/link";
import TestImg from '../public/assets/img/solution-details/image3.webp'


const SingleServicesCard = ({data}) => {

    return(
        <>
            <div className="specialities_card">
            {
                            data?
                <Link href={{ pathname: '/doctor-list', query: {id: data.id } }}>
                    <a href="">
                        <div className="specialities_list text-center">
                            <div className="specialities_img mb-3">   
                            {
                                data.file?<img src={"https://api-admin.shafa.care/api/v3/auth/publicFile/" + data.file.path} />:
                                <img src={TestImg} />
                            }                             
                                {/* <img src={TestImg} /> */}
                                <div className="overlay_img d-flex align-items-center justify-content-center">See Doctor List</div>
                            </div>
                            <p>{data.name}</p>
                        </div>
                        
                    </a>
                </Link>:null
            }
            </div>
        </>
    )
}


export default SingleServicesCard