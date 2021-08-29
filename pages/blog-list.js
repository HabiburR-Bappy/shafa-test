import React, {useEffect, useState} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from '../authAxios'
import BlogItem from '../Components/BlogItem';

import loading from '../public/assets/img/loading.gif'


export default function blog(){

    const getBlogList = async () => {
        return await axios.post('blog/blog-list')
            .then(response => {
                let status = 'status' in response
                if (!status) {
                    response.status = 401
                    return response
                }
                return response.data.data
            })
            .catch(err => {
                console.log(err)
                return []
            })
      }
    
  const [blog, setblog] = useState();  
  const [loadingData, setLoadingData] = useState(true);

  // load hospital data list
  useEffect(() => {
      if (loadingData) {
          getBlogList().then(res => {         
              setblog(res);
          }).catch((err) => { console.log(err) });
      }
  }, []); 

    if(blog)
    return (
        <>
            <Navbar />
            

            {/* Start Blog Area */}
            <section className="blog-area ptb-100">
                <div className="container-fluid home_blog_area pt-100">
                    <div className="row mb-5">
                        <h1 className="mb-3">Shafa Care Blog</h1>
                    </div>
                    <div className="row article_area">
                        {
                            blog?
                            blog.map((list) => {   
                            return(
                                <div className="col-md-4 mb-4">
                                    <BlogItem data={list} />
                                </div>
                            )
                            }):null
                        }
                            
                    </div>
                </div>
                        
            </section>
            {/* End Blog Area */}
            <Footer />
        </>
    )
    else return(
        <>

            <div className="pre__loader">
                <img src={loading} alt="loading" />
            </div>
        </>
    )
}