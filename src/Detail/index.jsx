import { useNavigate, useParams } from "react-router-dom";

function Detail({ product }) {
  let { id } = useParams();
  /* url에 있는 id 값을 꺼냄 */
  const navigate = useNavigate();
  /* navigate 함수를 변수에 담아두고 나중에 호출 가능할 수 있도록 함 */
  const findProduct = product.find(item => {
    /* 배열에서 조건에 맞는 첫 번째 항목을 찾음 */
    return item.id === Number(id);
    /* 찾은 후 item.id에 넣어줌 */
  })

  if (findProduct == null) {
    alert(`찾는 상품이 없습니다.`)
    navigate(-1);
    return null;
    /* 찾은 상품이 없다면 -> navigate(-1)로 이전 페이지로 이동 */
  }
  return (
    <div className="container">
      <img src={`/images/room${findProduct.id}.jpg`}
        width="100%" />
      <h4>{findProduct.title}</h4>
      <p>{findProduct.content}</p>
      <p>{findProduct.price}만원</p>
      <p>☎ 허위매물 신고</p>
    </div>
  )
}
export default Detail;
/* Detail 내보내기 */

/*
- 레이아웃 관련 클래스 -
container 
  : 전체 레이아웃을 감싸는 기본 박스
  : 좌우 패딩이 들어감
  : 반응형으로 max-width가 화면 크기에 따라 달라짐
container-fluid
  : 항상 100% 폭 차지(좌우 여백 없이 전체 꽉 채움)
row 
  : 가로 한줄을 만듦
  : display: flex; + flex-wrap: wrap; 적용
  : 그 안에서 col 들이 자동으로 옆으로 나열됨
col 
  : 남은 공간을 균등 분할(자동 크기)
col-1 ~ col-12
  : 12칸 중 몇 칸 차지할지 지정

sm : 576px 이상
md : 768px 이상
lg : 992px 이상
xl : 1200px 이상
xxl : 1400px 이상

text-start : 왼쪽 정렬
text-center : 가운데 정렬
text-end : 오른쪽 정렬

d-flex : flexbox 켜기
justify-content-center : 가로 가운데 정렬
align-items-center : 세로 가운데 정렬

m-3 : 모든 방향 마진 1rem
mt-3 : 마진 탑 1rem
mb-3 : 마진 바텀 1rem
ms-3 : 마진 레프트(start) 1rem
me-3 : 마진 라잇트(end) 1rem

p-3 : 모든 방향 패딩 1rem
pt-3 : 패딩 탑 1rem
pb-3 : 패딩 바텀 1rem
ps-3 : 패딩 레프트(start) 1rem
pe-3 : 패딩 라잇트(end) 1rem

숫자 크기 : 0 ~ 5 -> 0, 0.25rem, 1rem, 1.5rem, 3rem

w-100 : 가로 100%
h-100 : 세로 100%

fw-bold : font-weight 굵게
fw-light : font-weight 얇게
fst-italic : 폰트 기울임
text-muted : 흐리게
fs-1 ~ fs-6 : 글자 크기

글자색 종류
text-primary : #0d6efd (파란색)
text-danger : #dc3545 (빨간색)
text-success : #198754 (초록색)
text-dark : #212529 (거의 검정)
...

배경색
bg-primary : #0d6efd (파란색)
bg-warning : #ffc107 (노랑/주황)
bg-light : #f8f9fa (흰색에 가까운 연회색)
bg-dark : #212529 (거의 검정)
*/