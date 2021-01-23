import checkIcon from './check-img.png';
import React from 'react';

function Publication(post) {
    return (
        <div className="postInfo">
            <div className="aligned">
                <img className="authorPhoto" src={post.author.photo} />
                <div className="groupedInfo">
                    <p className="authorInfo">{post.author.name}</p>
                    <img className='checkIcon' src={checkIcon} />
                    <p className="authorInfo" id="authorInfoId">{post.author.nickname}</p>
                    <p className="authorInfo" id="dot" >.</p>
                    <p className="authorInfo" id="authorInfoId">{post.date}</p>
                    <p className="content">{post.content}</p>
                    <img className="postImage" src={post.image} />
                </div>
            </div>
        </div>
    )
}

export default Publication;