import { useNavigate } from "react-router-dom";
/* 
- useNavigate
  : navigate라는 함수를 꺼내 쓸 수 있게 해줌
- navigate()
  : 자바스크립트 코드 안에서 특정 경로로 이동할 수 있음.
  : 즉, <Link>처럼 클릭이 아니라, 이벤트나 조건에 따라 강제로 페이지 이동을 할 수 있음.
* Link와 차이점
  : <Link to="/about" /> → HTML 태그처럼 클릭해야 이동
  : useNavigate → 자바스크립트 코드에서 조건에 따라 이동 가능

=> 코드 안에서 페이지 이동을 직접 제어할 수 있게 해주는 코드
*/
function Product({house}) {
  const image = `/images/room${house.id}.jpg`
  const navigate = useNavigate();
  return (
    <>
      <img
      onClick={()=>{
        navigate(`/detail/${house.id}`)
      }}
      src={image} width="80%" />
      <h4>{house.title}</h4>
      <p>{house.content}</p>
    </>
  );
}
export default Product;