import { Container, Row, Col } from 'react-bootstrap'
import Product from '../Product'
/*  
- Container 
  : 전체 레이아웃을 감싸는 박스 역할
  : 웹 화면의 가장 바깥 쪽 그리드 영역을 정의
  : 기본적으로 내부 내용을 패딩과 함께 정렬
  - <Container> : 반응형, 화면 크기에 따라 max-width가 달라짐
  - <Container fluid> : 항상 가로 전체(100%)를 차지
- Row
  : 한 줄을 의미
  : 내부에 <Col>들을 넣어야 의미가 있음
  : CSS 적으로는 display: flex; 기반, <Col>들이 가로로 나란히 배치
  : 기본적으로 12칸으로 구성
- Col
  : Row 안에서 칸을 차지하는 컴포넌트
  : 부트스트랩의 12칸 그리드 시스템을 기반으로 나눠짐
*/

function Main({product}){
  return(
    <div>
      <Container>
        <Row>
          {
            product.map((house, _) => {
              return (
                <Col key={house.id} className="text-center">
                  {/* Product 컴포넌트 자리 */}
                  <Product house={house} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}
export default Main;