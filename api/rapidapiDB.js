
// import axios from 'axios';
// import { RAPIDAPIKEY } from "../constants";

// const baseurl = 'https://exercisedb.p.rapidapi.com'

// const apicall = async (params,url)=>{
//     try {
//         const options = await axios.get(url, {
//             params,
//             headers: {
//                 'x-rapidapi-key': RAPIDAPIKEY,
//                 'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
//             }
//         })
//         const response = await axios.request(options)
//         return response.data;
//     } catch (error) {
//         throw error
//     }
// }

// export const fetchExercisedByApi = async ( Exercises)=>{
//     let data = apicall({
//         name: Exercises
//     }, baseurl+`exercises/bodyPart/${Exercises}`)
//     return data;
// }