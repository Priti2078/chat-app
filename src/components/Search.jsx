import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user"/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/17945201/pexels-photo-17945201/free-photo-of-young-man-reading-a-book-on-the-balcony.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt=""/>
        <div className="userChatInfo">
          <span>chari</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
