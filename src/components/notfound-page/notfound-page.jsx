import "./notfound-page.scss"
import {Link} from "react-router-dom";

const NotfoundPage = () => {
  return (
    <div className="lostPage">
      <h1>404</h1>
      <p>
        It looks like there is no such page,<br/> go back to the <Link to="/">main page</Link>.
      </p>
    </div>
  )
}

export default NotfoundPage