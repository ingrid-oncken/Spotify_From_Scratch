import { Navbar, ListGroup } from "react-bootstrap"
import "../styles/sidebar.css"
import {
  IoHomeOutline,
  IoSearch,
  IoLibraryOutline,
  IoAddSharp,
  IoHeartOutline,
} from "react-icons/io5"

const Sidebar = () => (
  <Navbar expand="lg" className="navbar-dark fix-side">
    <Navbar.Brand href="#home">
      <img
        src="../assets/Spotify_Logo_White.png"
        width="140"
        // height="30"
        className="d-inline-block align-top"
        alt="Spotify white logo"
      />
    </Navbar.Brand>

    <ListGroup className="mr-auto inline-flex">
      <ListGroup.Item action>
        <spam>
          <IoHomeOutline />
        </spam>
        <div>Home</div>
      </ListGroup.Item>
      <ListGroup.Item action>
        <spam>
          <IoSearch />
        </spam>
        <div>Search</div>
      </ListGroup.Item>
      <ListGroup.Item action>
        <spam>
          <IoLibraryOutline />
        </spam>
        <div>Your Library</div>
      </ListGroup.Item>
      <ListGroup.Item action>
        <spam>
          <IoAddSharp />
        </spam>
        <div>Create Playlist</div>
      </ListGroup.Item>
      <ListGroup.Item action>
        <spam>
          <IoHeartOutline />
        </spam>
        <div>Liked Songs</div>
      </ListGroup.Item>
    </ListGroup>
  </Navbar>
)
export default Sidebar
