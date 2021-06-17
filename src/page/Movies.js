import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Layout from '../structures/component/layout/Layout';

function Movies() {

    const [coming, setcoming] = useState([])
    const [current, setcurrent] = useState([])
    const [tvpopular, settvpopular] = useState([])
    const [tvtoprated, settvtoprated] = useState([])


    const getComing = ()=>{
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=00bd304b5f9f9b4cc3d0bf80d91aa475&language=en-US&page=3')
        .then((res)=>{
            console.log(res.data.results)
            setcoming(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const getCurrent = ()=>{
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=00bd304b5f9f9b4cc3d0bf80d91aa475&language=en-US&page=1')
        .then((res)=>{
            console.log(res.data.results)
            setcurrent(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const getTvPopular = ()=>{
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=00bd304b5f9f9b4cc3d0bf80d91aa475&language=en-US&page=1')
        .then((res)=>{
            console.log(res.data.results)
            settvpopular(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const getTvTop = ()=>{
        axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=00bd304b5f9f9b4cc3d0bf80d91aa475&language=en-US&page=1')
        .then((res)=>{
            console.log(res.data.results)
            settvtoprated(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        getComing()
        getCurrent()
        getTvPopular()
        getTvTop()
    }, [])

    return (
        <>
            <Layout>
                
            </Layout>
        </>
    )
}

export default Movies
