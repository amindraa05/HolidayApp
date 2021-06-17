import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Layout from '../structures/component/layout/Layout';

function Games() {

    const [shooter, setshooter] = useState([])
    const [battle, setbattle] = useState([])
    const [sports, setsports] = useState([])
    const [horror, sethorror] = useState([])

    const shooterGames = () =>{
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: 'shooter'},
            headers: {
              'x-rapidapi-key': '1060a4bc98mshabfda103e8cbddbp18de8ejsn0c5f73310db3',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setshooter(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    const battleRoyaleGames = ()=>{
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: 'battle-royale'},
            headers: {
              'x-rapidapi-key': '1060a4bc98mshabfda103e8cbddbp18de8ejsn0c5f73310db3',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setbattle(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    const sportsGames = ()=>{
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: 'sports'},
            headers: {
              'x-rapidapi-key': '1060a4bc98mshabfda103e8cbddbp18de8ejsn0c5f73310db3',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setsports(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    const horrorGames = ()=>{
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: 'horror'},
            headers: {
              'x-rapidapi-key': '1060a4bc98mshabfda103e8cbddbp18de8ejsn0c5f73310db3',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            sethorror(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        shooterGames()
        battleRoyaleGames()
        sportsGames()
        horrorGames()
    }, [])


    return (
        <>
            <Layout>
                
            </Layout>
        </>
    )
}

export default Games
