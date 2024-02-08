import "../App.css";
export default function Navbar() {
  return (
    <>
      <div className="containerNavbar">
        <div className="logo">Y</div>
        <div className="title">Hacker News</div>
        <div>|</div>
        <div>
          <a href="">new</a>
        </div>
        <div>|</div>
        <div>
          <a href="">past</a>
        </div>
        <div>|</div>
        <div>
          <a href="">comments</a>
        </div>
        <div>|</div>
        <div>
          <a href="">ask</a>
        </div>
        <div>|</div>
        <div>
          <a href="">show</a>
        </div>
        <div>|</div>
        <div>
          <a href="">jobs</a>
        </div>
        <div>|</div>
        <div>
          <a href="">submit</a>
        </div>
        <div className="login">
          <a href="">login</a>
        </div>
      </div>
    </>
  );
}
