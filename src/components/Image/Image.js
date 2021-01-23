import React from 'react';

const pictures = ["https://t3.ftcdn.net/jpg/01/89/89/72/240_F_189897283_h5JyxhL6OyiQ71MIfzGVN0VJPIw0g4fE.jpg", 
"https://t3.ftcdn.net/jpg/03/26/22/48/240_F_326224870_vB8XRJbWr0qDG5bhAomLjVlKzcUXPdKA.jpg",
"https://t4.ftcdn.net/jpg/02/93/87/97/240_F_293879769_4hy7wFV8iatxb8KQMcBgbqLr161FPPHK.jpg", 
"https://t4.ftcdn.net/jpg/02/84/34/33/240_F_284343301_PF57hEQwYSmjx4CEQV2rgJ6kTJF3BxpQ.jpg"];

const Image = () => {
    return (
        <div>
            {pictures.map(picture => 
                <p><img className="images" src={picture} /></p>
            )}
        </div>
    )
}

export default Image;