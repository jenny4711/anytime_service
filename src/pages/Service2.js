import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "../Service2.css"
const Service = () => {
  return (
    <>
    <div className='Service'>
      
      <Accordion className='Service-Accordion' defaultActiveKey={['0']} alwaysOpen >
        <h2 className='Service-h2'>Service</h2>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='Service-ah'>간단한 전화통역</Accordion.Header>
        <Accordion.Body className='Service-p'>
         예: 예약, 설정 또는 일반 문의-$20 (건당)<br/>**서비스는 같은 통화 내에서 완료되어야 합니다.** 
        
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" >
        <Accordion.Header className='Service-ah'>사건 검토 및 해결 통역</Accordion.Header>
        <Accordion.Body className='Service-p'>
        기본 $100부터 시작~
        요청하신 건 의 따라 가격이 변동 될수 있습니다.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>NJ의 USCIS 이민 관련 통역 서비스</Accordion.Header>
        <Accordion.Body className='Service-p'>
          담당자에게 문의 하여주시면 감사드리겠습니다.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>전화 상담을 통한 전문 의료 상담 통역 </Accordion.Header>
        <Accordion.Body className='Service-p'>
          기본 $100 부터 시작~
          요청하신 건 의 따라 가격이 변동 될수 있습니다.

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item bg="dark" eventKey="4">
        <Accordion.Header bg="dark">기타 재정 지원 신청 지원</Accordion.Header>
        <Accordion.Body className='Service-p'>
        기본 $150 부터 시작~
        요청하신 건 의 따라 가격이 변동 될수 있습니다.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>문서 검토/해석 서비스</Accordion.Header>
        <Accordion.Body className='Service-p'>
        담당자에게 문의 하여주시면 감사드리겠습니다.
        </Accordion.Body>
      </Accordion.Item>
      <div className='Service-disc'>
    서비스 제공 전에 지불이 선행되어야 합니다. 각 사례는 개별적으로 검토되며 적절한 요금이 부과됩니다. 
    문서에 대한 구두 통역 서비스를 제공하므로 번역 보고서는 제공하지 않습니다. 지불 전 서비스 내용에 대한 설명과 견적서를 받으실 수 있습니다.
    </div>
    </Accordion>

    </div>

    
    </>
  )
}

export default Service