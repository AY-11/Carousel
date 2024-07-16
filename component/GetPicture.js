//arrow function
import React from 'react'

export const GetPicture = async() =>{
    const response = await fetch("https://api.unsplash.com/search/photos?page=1&query=car&per_page=4&client_id=PFxxiiZqxUmfC854dfR7h3A2Spl4wHcR-jQLHAUw5A8",{method:"GET",});
    
   
    return await response.json();
}
export default GetPicture;
