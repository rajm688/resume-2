import * as React from "react";
export function Profile() {
  return (
    <div id="Profile" className="profile">
      <div className="content">
        <img
          id="profilepic"
          src="https://avatars.githubusercontent.com/u/90443069?v=4"
          alt="Rajkumar"
        />
        <p id="text">
          Raj here, Enthusiastic web developer. I adore creating beautiful and
          functional webpages that intuitively solve problems.
        </p>
      </div>
    </div>
  );
}
