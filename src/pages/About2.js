import React from "react";

import "../About2.css";

const About = () => {
  return (
    <div className="About">
      <div className="About-info">
        <p className="About-p">
          
          <strong>Anytime Solution</strong> 은 각각의 고객의 필요에 맞게 다양한 서비스를 제공합니다. 
          <ul className='About-ulp'>
            <li>
              <strong>다양한 재정 지원 신청</strong>
              <ul>
                <li>Student Loan Financial Aid Application</li>
                <li>NJ Family Care</li>
                <li>Food Stamp</li>
                <li>Health Insurance</li>
              </ul>
            </li>
            <li><strong>의료 상담 전화</strong></li>
            <li><strong>동행 번역 서비스</strong></li>
            <li><strong>불공정한 미납 요금 해결</strong></li>
            <li><strong>메디컬 콜렉션 해결</strong></li>
            <li><strong>스몰 클레임 코트 신청 도움</strong></li>
            <li><strong>여권 및 이민국 신청서 작성 도움</strong></li>
          </ul>
          
          번역 서비스뿐만 아니라 개인적 경험을 토대로 얻은 유용한 지식을
          제공하고, 영어를 못 하거나 미국에서 문제를 해결하는 방법을 이해하지
          못해 미해결 문제에 대한 좌절감을 덜어줍니다. 우리는 법률적 조언을
          제공하지 않으며, 법적 서류 번역까지만 지원할 수 있습니다. 
         서비스에 대한 자세한 내용을 보려면 서비스 섹션 을 클릭하세요.
        </p>
      </div>
    </div>
  );
};

export default About;
