import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Layout from '../structures/component/layout/Layout';

function Books() {

    const [books, setbooks] = useState([])

    const getBooks = ()=>{
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=utRs6xq2KmbdGDPULPZodSlBiz7ACvSO')
        .then((res)=>{
            console.log(res.data.results.books)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <>
            <Layout>
                
            </Layout>
        </>
    )
}

export default Books
