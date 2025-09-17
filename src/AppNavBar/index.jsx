import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
// import './AppNavBar.css'
// Route : 페이지(컴포넌트) 이동 처리
// Routes : Route를 감싸는 용도
// Link : 실제로 페이지를 보여주는 역할, Link위치에 컴포넌트 뿌려줌
// userNavigate : 스크립트 영역에서 링크처리를 하는 훅
import { Link, useNavigate } from "react-router-dom";

function AppNavBar(){
  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>Main</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/login')}}>로그인</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/signup')}}>회원가입</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  )
}
export default AppNavBar;
/* 이 파일에서 기본으로 내보낼 대상은 AppNavBar라는 컴포넌트임을 말해줌
- 이것을 App.jsx에서 불러올때 
- import AppNavBar form "./AppNavBar"; 이렇게 불러옴 
- import Nav <-- 바꾸어도 상관없음 from "./AppNavBar"; 이렇게 불러올 수도 있음 */