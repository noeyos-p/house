/* 
- Hook(훅) : 함수형 컴포넌트 안에서 쓸 수 있게 해주는 특별한 함수, 반드시 use로 시작
  - useState 
    : 상태를 관리
    : 값이 바뀌면 화면도 다시 렌더링
  - useEffect
    : 컴포넌트가 렌더링될 때, 값이 바뀔 때, 또는 사라질 때 특정 작업 실행
    : ex) API 불러오기, 타이머 설정/해제
  - useContext
    : 컴포넌트 트리안에서 전역 상태 공유
  - useRef
    : DOM 요소나 값(렌더링과 무관한 값)을 직접 참조할 때 사용
  - useReducer
    : 복잡한 상태 관리 (Redux 같은 구조를 컴포넌트 내부에서 구현할 때 유용)
*/
import AppNavBar from "./AppNavBar";
// assets 폴더 내의 이미지 사용법 -> import 해서 사용
import { Routes, Route } from "react-router-dom";
import data from "./data/data";
import { useState } from "react";
import Main from "./Main/Main";
import Detail from "./Detail";

function App() {
  // 상품정보를 갖는 product 스테이트를 만든다.
  const [product, setProduct] = useState(data);
  /* 
  - useState 
    : 리액트의 hook 중 하나
    : 컴포넌트 안에서 변하는 값을 만들 때 사용
  - product : 현재 상태 값을 담고 있음
  - setProduct : 상태값을 바꿀 때 사용하는 함수
  - = useState(data) 
    : data라는 값을 상태로 초기화 한다는 의미
    : 처음 product 라는 상태에는 data가 들어감
  
  -> 컴포넌트가 처음 실행될 때 prduct에는 data 값이 저장
  -> 이후 setProduct(...)를 호출하면 product 값이 바뀌며, 화면도 다시 그려짐 
  */

  return (
    <>
      {/* 네비게이션 바 영역 시작 */}
      <AppNavBar />
      {/* 네비게이션 바 영역 끝 */}
      {/* Routing 정보를 한꺼번에 모아놓는 장소 */}
      {/* 스프링에서 사용하는 컨트롤러 클래스 */}
      <Routes>
        <Route path="/" element={<Main product={product}/>}/>
        {/* 
        - product
          : useState로 App이 만듦
          : App (부모 컴포넌트)가 주인
          : setProduct로 변경 가능
          : 컴포넌트 내부의 상태 데이터
        - props
          : 부모가 자식에게 전달할 때 만들어짐
          : 자식 입장에서 외부에서 들어오는 값
          : 변경 불가능
          : 외부에서 주어진 입력값
        */}
        {/* /detail/2 -> PathVariable 설정 법 */}
        <Route path="/detail/:id" element={<Detail product={product}/>}/>
        <Route path="/login" element={<div>로그인 페이지</div>} />
        <Route path="/signup" element={<div>회원가입 페이지</div>} />
        <Route path="*" element={<div>Page Not Found 404 Error</div>}></Route>
        {/* 
        - path="*" 
          : 와일드카드(wildcard) 경로
          : 정의되지 않은 모든 경로
        => 리액트 라우터에서 404 페이지(잘못된 경로 처리)를 구현하는 방법
        */}
      </Routes>
    </>
  );
}

export default App;