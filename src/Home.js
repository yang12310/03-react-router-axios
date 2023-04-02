import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
       <h1>HOME</h1>
        <p>가장 먼저 보여지는 페이지입니다.</p>   
        <ul>
            <li>
                <Link to = "/about">About</Link>  
            </li>
            <li>
                <Link to = "/profiles/someone">John Doe의 프로필</Link>  
            </li>
            <li>
                <Link to = "/profiles/gildong">Hong gildong의 프로필</Link>  
            </li>
            <li>
                <Link to = "/profiles/void">존재하지 않는 프로필</Link>  
            </li>
            <li>
                <Link to = "/articles">게시글 목록</Link>
            </li>
        </ul>
    </div>

  )
}

export default Home;