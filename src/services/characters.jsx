import CryptoJS from "crypto-js"

// Marca de tiempo -> TimeStamp = función salt
const timeStamp = new Date().getTime()

// fetch api marvel
const PRIVATE_API_KEY = '6a008b9ddbc650ba1f4ef05b68a02e20d4d90928'
const PUBLIC_API_KEY = 'aba945448a4b51023ffdea90b88707da'

const hash = CryptoJS.MD5(timeStamp + PRIVATE_API_KEY + PUBLIC_API_KEY).toString()

export const reqCharacters = async (page = 1, pageSize = 10) => {
    const offset = (page - 1) * pageSize; 
    const api_url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${hash}&limit=${pageSize}&offset=${offset}`;

    const resp = await fetch(api_url);
    const { data } = await resp.json();

    return data;
}
