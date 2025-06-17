
function mbtiReckoning() {
	
	// 페이지 이동 시 값이 초기화 되어서 sessionStorage로 저장
	// var로 할 시 stringd으로 저장 되어서 계산 안되서 parseInt이용하여 초기값 0 처리
	var I_check = parseInt(sessionStorage.getItem('I_check')) || 0;
	var E_check = parseInt(sessionStorage.getItem('E_check')) || 0;
	var S_check = parseInt(sessionStorage.getItem('S_check')) || 0;
	var N_check = parseInt(sessionStorage.getItem('N_check')) || 0;
	var T_check = parseInt(sessionStorage.getItem('T_check')) || 0;
	var F_check = parseInt(sessionStorage.getItem('F_check')) || 0;
	var J_check = parseInt(sessionStorage.getItem('J_check')) || 0;
	var P_check = parseInt(sessionStorage.getItem('P_check')) || 0;

	var result = "";	// mbti 결과값 담는 변수
	
	// 1페이지 계산식 시작
	this.onePage= function() {
		try {
			var questions = [];		// 페이지에 있는 10개 항목의 값을 배열에 저장
			// 값 가져올 시 E1, I3 이런 식으로 2글자씩 가져오기
			// 1번 질문
			questions.push(document.querySelector('input[type=radio][name=onePage_one_question]:checked').value);
			// 2번 질문
			questions.push(document.querySelector('input[type=radio][name=onePage_two_question]:checked').value);
			// 3번 질문
			questions.push(document.querySelector('input[type=radio][name=onePage_three_question]:checked').value);
			// 4번 질문
			questions.push(document.querySelector('input[type=radio][name=onePage_four_question]:checked').value);
			// 5번 질문
			questions.push(document.querySelector('input[type=radio][name=onePage_five_question]:checked').value);
			// 6번 질문
			questions.push(document.querySelector('input[type=radio][name=onePage_six_question]:checked').value);
			// 7번 질문
			questions.push(document.querySelector('input[type=radio][name=onePage_seven_question]:checked').value);
			// 8번 질문
			questions.push(document.querySelector('input[type=radio][name=onePage_eight_question]:checked').value);
			// 9번 질문
			questions.push(document.querySelector('input[type=radio][name=onePage_nine_question]:checked').value);
			// 10번 질문
			questions.push(document.querySelector('input[type=radio][name=onePage_ten_question]:checked').value);
			

			this.calculator(questions, 'N');		// 질문값 리스트, (N, Y)
			
			location.href='twoPage.html';			// 2페이지로 이동
			
		}catch {
			alert("모든 문항을 선택해 주세요.");
		}
		
	}
	// 1페이지 계산식 끝
	
	
	// 2페이지 계산식 시작
	this.twoPage= function() {
		try {
			var questions = [];		// 페이지에 있는 10개 항목의 값을 배열에 저장
			// 값 가져올 시 E1, I3 이런 식으로 2글자씩 가져오기
			// 1번 질문
			questions.push(document.querySelector('input[type=radio][name=twoPage_one_question]:checked').value);
			// 2번 질문
			questions.push(document.querySelector('input[type=radio][name=twoPage_two_question]:checked').value);
			// 3번 질문
			questions.push(document.querySelector('input[type=radio][name=twoPage_three_question]:checked').value);
			// 4번 질문
			questions.push(document.querySelector('input[type=radio][name=twoPage_four_question]:checked').value);
			// 5번 질문
			questions.push(document.querySelector('input[type=radio][name=twoPage_five_question]:checked').value);
			// 6번 질문
			questions.push(document.querySelector('input[type=radio][name=twoPage_six_question]:checked').value);
			// 7번 질문
			questions.push(document.querySelector('input[type=radio][name=twoPage_seven_question]:checked').value);
			// 8번 질문
			questions.push(document.querySelector('input[type=radio][name=twoPage_eight_question]:checked').value);
			// 9번 질문
			questions.push(document.querySelector('input[type=radio][name=twoPage_nine_question]:checked').value);
			// 10번 질문
			questions.push(document.querySelector('input[type=radio][name=twoPage_ten_question]:checked').value);
			

			this.calculator(questions, 'N');		// 질문값 리스트, (N, Y)
			
			location.href='threePage.html';			// 3페이지로 이동
			
		}catch {
			alert("모든 문항을 선택해 주세요.");
		}
		
	}
	// 2페이지 계산식 끝	


	// 3페이지 계산식 시작
	this.threePage= function() {
		try {
			var questions = [];		// 페이지에 있는 10개 항목의 값을 배열에 저장
			// 값 가져올 시 E1, I3 이런 식으로 2글자씩 가져오기
			// 1번 질문
			questions.push(document.querySelector('input[type=radio][name=threePage_one_question]:checked').value);
			// 2번 질문
			questions.push(document.querySelector('input[type=radio][name=threePage_two_question]:checked').value);
			// 3번 질문
			questions.push(document.querySelector('input[type=radio][name=threePage_three_question]:checked').value);
			// 4번 질문
			questions.push(document.querySelector('input[type=radio][name=threePage_four_question]:checked').value);
			// 5번 질문
			questions.push(document.querySelector('input[type=radio][name=threePage_five_question]:checked').value);
			// 6번 질문
			questions.push(document.querySelector('input[type=radio][name=threePage_six_question]:checked').value);
			// 7번 질문
			questions.push(document.querySelector('input[type=radio][name=threePage_seven_question]:checked').value);
			// 8번 질문
			questions.push(document.querySelector('input[type=radio][name=threePage_eight_question]:checked').value);
			// 9번 질문
			questions.push(document.querySelector('input[type=radio][name=threePage_nine_question]:checked').value);
			// 10번 질문
			questions.push(document.querySelector('input[type=radio][name=threePage_ten_question]:checked').value);
			

			this.calculator(questions, 'N');		// 질문값 리스트, (N, Y)
			
			location.href='fourPage.html';			// 4페이지로 이동
			
		}catch {
			alert("모든 문항을 선택해 주세요.");
		}
		
	}
	// 3페이지 계산식 끝
	

	// 4페이지 계산식 시작
	this.fourPage= function() {
		try {
			var questions = [];		// 페이지에 있는 10개 항목의 값을 배열에 저장
			// 값 가져올 시 E1, I3 이런 식으로 2글자씩 가져오기
			// 1번 질문
			questions.push(document.querySelector('input[type=radio][name=fourPage_one_question]:checked').value);
			// 2번 질문
			questions.push(document.querySelector('input[type=radio][name=fourPage_two_question]:checked').value);
			// 3번 질문
			questions.push(document.querySelector('input[type=radio][name=fourPage_three_question]:checked').value);
			// 4번 질문
			questions.push(document.querySelector('input[type=radio][name=fourPage_four_question]:checked').value);
			// 5번 질문
			questions.push(document.querySelector('input[type=radio][name=fourPage_five_question]:checked').value);
			// 6번 질문
			questions.push(document.querySelector('input[type=radio][name=fourPage_six_question]:checked').value);
			// 7번 질문
			questions.push(document.querySelector('input[type=radio][name=fourPage_seven_question]:checked').value);
			// 8번 질문
			questions.push(document.querySelector('input[type=radio][name=fourPage_eight_question]:checked').value);
			// 9번 질문
			questions.push(document.querySelector('input[type=radio][name=fourPage_nine_question]:checked').value);
			// 10번 질문
			questions.push(document.querySelector('input[type=radio][name=fourPage_ten_question]:checked').value);
			

			this.calculator(questions, 'N');		// 질문값 리스트, (N, Y)
			
			location.href='fivePage.html';			// 5페이지로 이동
			
		}catch {
			alert("모든 문항을 선택해 주세요.");
		}
		
	}
	// 4페이지 계산식 끝


	// 5페이지 계산식 시작
	this.fivePage= function() {
		try {
			var questions = [];		// 페이지에 있는 10개 항목의 값을 배열에 저장
			// 값 가져올 시 E1, I3 이런 식으로 2글자씩 가져오기
			// 1번 질문
			questions.push(document.querySelector('input[type=radio][name=fivePage_one_question]:checked').value);
			// 2번 질문
			questions.push(document.querySelector('input[type=radio][name=fivePage_two_question]:checked').value);
			// 3번 질문
			questions.push(document.querySelector('input[type=radio][name=fivePage_three_question]:checked').value);
			// 4번 질문
			questions.push(document.querySelector('input[type=radio][name=fivePage_four_question]:checked').value);
			// 5번 질문
			questions.push(document.querySelector('input[type=radio][name=fivePage_five_question]:checked').value);
			// 6번 질문
			questions.push(document.querySelector('input[type=radio][name=fivePage_six_question]:checked').value);
			// 7번 질문
			questions.push(document.querySelector('input[type=radio][name=fivePage_seven_question]:checked').value);
			// 8번 질문
			questions.push(document.querySelector('input[type=radio][name=fivePage_eight_question]:checked').value);
			// 9번 질문
			questions.push(document.querySelector('input[type=radio][name=fivePage_nine_question]:checked').value);
			// 10번 질문
			questions.push(document.querySelector('input[type=radio][name=fivePage_ten_question]:checked').value);
			

			this.calculator(questions, 'N');		// 질문값 리스트, (N, Y)
			
			location.href='sixPage.html';			// 6페이지로 이동
			
		}catch {
			alert("모든 문항을 선택해 주세요.");
		}
		
	}
	// 5페이지 계산식 끝	

	// 6페이지 계산식 시작
	this.sixPage= function() {
		try {
			var questions = [];		// 페이지에 있는 10개 항목의 값을 배열에 저장
			// 값 가져올 시 E1, I3 이런 식으로 2글자씩 가져오기
			// 1번 질문
			questions.push(document.querySelector('input[type=radio][name=sixPage_one_question]:checked').value);
			// 2번 질문
			questions.push(document.querySelector('input[type=radio][name=sixPage_two_question]:checked').value);
			// 3번 질문
			questions.push(document.querySelector('input[type=radio][name=sixPage_three_question]:checked').value);
			// 4번 질문
			questions.push(document.querySelector('input[type=radio][name=sixPage_four_question]:checked').value);
			// 5번 질문
			questions.push(document.querySelector('input[type=radio][name=sixPage_five_question]:checked').value);
			// 6번 질문
			questions.push(document.querySelector('input[type=radio][name=sixPage_six_question]:checked').value);
			// 7번 질문
			questions.push(document.querySelector('input[type=radio][name=sixPage_seven_question]:checked').value);
			// 8번 질문
			questions.push(document.querySelector('input[type=radio][name=sixPage_eight_question]:checked').value);
			// 9번 질문
			questions.push(document.querySelector('input[type=radio][name=sixPage_nine_question]:checked').value);
			// 10번 질문
			questions.push(document.querySelector('input[type=radio][name=sixPage_ten_question]:checked').value);
			

			this.calculator(questions, 'Y');		// 질문값 리스트, (N, Y)
			
			document.getElementById("mainImage").style.display = "none";	// 메인 이미지 비노출
			document.getElementById("questionList").style.display = "none"; // 질문 비노출
			document.getElementById("myBarDiv").style.display = "none"; // 게이지바 비노출
			
			var mbtiPng = "";				// mbti에 맞게 이미지 변경
			var mbtiNickName = "";			// mbti에 맞게 별칭 변경
			var mbtiExplanation = "";		// mbti에 맞게 설명 변경
			
			if(result == "INTJ") {
				mbtiPng = "images/INTJ.jpg";
				mbtiNickName = "전략가";
				mbtiExplanation = "최고가 되는 것은 외로운 일입니다. 매우 희귀한 성격이면서도 뛰어난 능력을 지닌 전략가(INTJ)는 이러한 말의 의미를 잘 알고 있습니다.<br>전략가는 이성적이면서도 두뇌 회전이 빠른 성격으로, 자신의 뛰어난 사고 능력을 자랑스러워하며 거짓말과 위선을 꿰뚫어 보는 능력이 있습니다.<br>하지만 이로 인해 끊임없이 생각하고 주변의 모든 것을 분석하려는 자신의 성향을 이해할 수 있는 사람을 찾는 데 어려움을 겪기도 합니다.";
				
			}else if(result == "INTP") {
				mbtiPng = "images/INTP.jpg"
				mbtiNickName = "논리술사";
				mbtiExplanation = "논리술사(INTP)는 자신의 독특한 관점과 활기 넘치는 지성에 자부심을 느끼며, 우주의 미스터리에 대해 깊이 생각하곤 합니다.<br>유명한 철학자와 과학자 중 논리술사 성격이 많은 것도 이 때문일 것입니다.<br>논리술사는 상당히 희귀한 성격이지만 뛰어난 창의성과 독창성으로 많은 사람 사이에서 존재감을 드러내곤 합니다.<br>이렇게 논리적이면서도 마술사와 같은 창의력을 발휘하는 성격이기에 ‘논리술사’라고 부르게 되었습니다.";
				
			}else if(result == "ENTJ") {
				mbtiPng = "images/ENTJ.jpg"
				mbtiNickName = "통솔자";
				mbtiExplanation = "통솔자(ENTJ)는 타고난 리더라고 할 수 있습니다.<br>이들은 카리스마와 자신감을 지니고 있으며 자신의 권한을 이용해 사람들이 공통된 목표를 위해 함께 노력하도록 이끕니다.<br>또한 이들은 냉철한 이성을 지닌 것으로 유명하며 자신이 원하는 것을 성취하기 위해 열정과 결단력과 날카로운 지적 능력을 활용합니다.<br>이들은 전체 인구의 3%에 불과하지만, 다른 많은 성격을 압도하는 존재감을 뽐내며 다양한 비즈니스와 단체를 이끄는 역할을 할 때가 많습니다.";
				
			}else if(result == "ENTP") {
				mbtiPng = "images/ENTP.jpg"
				mbtiNickName = "변론가";
				mbtiExplanation = "변론가(ENTP)는 두뇌 회전이 빠르고 대담한 성격으로 현재 상황에 이의를 제기하는 데 거리낌이 없습니다.<br>변론가는 어떤 의견이나 사람에 반대하는 일을 두려워하지 않으며, 논란이 될 만한 주제에 대해 격렬하게 논쟁하는 일을 즐깁니다.";
				
			}else if(result == "INFJ") {
				mbtiPng = "images/INFJ.jpg"
				mbtiNickName = "옹호자";
				mbtiExplanation = "옹호자(INFJ)는 매우 희귀한 성격임에도 불구하고 세상에 큰 영향력을 발휘하곤 합니다.<br>이들은 이상주의적이고 원칙주의적인 성격으로, 삶에 순응하는 대신 삶에 맞서 변화를 만들어 내고자 합니다.<br>이들에게 성공이란 돈이나 지위가 아니라 자아를 실현하고 다른 사람을 도우며 세상에서 선을 실천하는 일입니다.";
				
			}else if(result == "INFP") {
				mbtiPng = "images/INFP.jpg"
				mbtiNickName = "중재자";
				mbtiExplanation = "중재자(INFP)는 언뜻 보기에 조용하고 자신을 내세우지 않는 것처럼 보이지만, 사실은 에너지와 열정이 넘치는 마음을 지닌 성격입니다.<br>이들은 창의적이고 상상력이 뛰어나며 몽상을 즐기는 성격으로 머릿속에서 수많은 이야기를 만들어 내곤 합니다.<br>또한 음악과 예술과 자연에 대한 감수성이 뛰어나며 다른 사람의 감정을 빠르게 알아차립니다.";
				
			}else if(result == "ENFJ") {
				mbtiPng = "images/ENFJ.jpg"
				mbtiNickName = "선도자";
				mbtiExplanation = "선도자(ENFJ)는 삶에서 위대한 사명을 위해 힘써야 한다는 느낌을 받곤 합니다.<br>사려 깊고 이상주의적 성향을 지닌 선도자는 다른 사람과 주변 세상에 긍정적인 영향력을 발휘하기 위해 최선을 다하며, 어려운 상황에서도 올바른 일을 할 기회를 마다하지 않습니다.";
				
			}else if(result == "ENFP") {
				mbtiPng = "images/ENFP.jpg"
				mbtiNickName = "활동가";
				mbtiExplanation = "활동가(ENFP)는 진정으로 자유로운 영혼이라고 할 수 있으며 외향적이고 솔직하며 개방적인 성격입니다.<br>이들은 활기차고 낙관적인 태도로 삶을 대하며 다른 사람들 사이에서 돋보이곤 합니다.<br>그러나 신나는 인생을 보내는 것처럼 보인다고 해서 즐거움만을 좇는 성격은 아니며, 다른 사람과 감정적으로 깊고 의미 있는 관계를 맺는 일을 추구합니다.";
				
			}else if(result == "ISTJ") {
				mbtiPng = "images/ISTJ.jpg"
				mbtiNickName = "현실주의자";
				mbtiExplanation = "현실주의자(ISTJ)는 진솔하게 행동하는 자신의 모습에서 자부심을 느끼며, 자기 생각을 솔직하게 이야기하고 어떤 것에 헌신하기로 한 경우 최선을 다합니다.<br>화려한 삶이나 다른 사람의 주의를 끄는 일에는 관심이 없으며 안정된 사회를 위해 자신의 몫보다 많은 기여를 하곤 합니다.";
				
			}else if(result == "ISFJ") {
				mbtiPng = "images/ISFJ.jpg"
				mbtiNickName = "수호자";
				mbtiExplanation = "수호자(ISFJ)는 겸손한 자세로 세상을 지탱하는 역할을 합니다.<br>이들은 근면하고 헌신적인 성격으로 주변 사람들에 대한 깊은 책임감을 느낍니다.<br>이들은 마감 기한을 철저히 지키고 동료와 친구의 생일과 기념일을 챙기며, 기존 질서를 유지하고 주변 사람을 배려하는 동시에 기꺼이 도움의 손길을 건넵니다.<br>또한 감사를 요구하기보다는 뒤에서 묵묵히 헌신하는 성격이라고 할 수 있습니다.";
				
			}else if(result == "ESTJ") {
				mbtiPng = "images/ESTJ.jpg"
				mbtiNickName = "경영자";
				mbtiExplanation = "경영자(ESTJ)는 전통과 질서를 중시하는 성격으로, 자신이 생각하는 옳고 그름과 사회적 기준에 따라 가족과 공동체가 화합할 수 있도록 노력합니다.<br>이들은 정직과 헌신과 존엄성을 중시하며, 어려운 길을 기꺼이 앞장서고 다른 사람들에게 명확한 조언과 지도를 제공합니다.";
				
			}else if(result == "ESFJ") {
				mbtiPng = "images/ESFJ.jpg"
				mbtiNickName = "집정관";
				mbtiExplanation = "집정관(ESFJ)에게 인생이란 다른 사람과 함께할 때 가장 달콤한 것입니다.<br>이들은 많은 공동체의 기반이 되며 친구와 연인과 이웃을 열린 마음으로 대합니다.<br>관대하고 신뢰할 수 있는 성격으로 작은 일이든 큰 일이든 가족과 공동체를 하나로 모으기 위해 스스로 책임을 짊어질 때가 많습니다.";
				
			}else if(result == "ISTP") {
				mbtiPng = "images/ISTP.jpg"
				mbtiNickName = "장인";
				mbtiExplanation = "장인(ISTP)은 이성과 호기심을 통해 세상을 바라보며 눈과 손으로 직접 탐구하는 일을 즐깁니다.<br>이들은 타고난 손기술을 지니고 있으며, 다양한 프로젝트에서 유용하고 재미있는 물건을 만들어 내고 주변 환경에서 배울 점을 찾습니다.";
				
			}else if(result == "ISFP") {
				mbtiPng = "images/ISFP.jpg"
				mbtiNickName = "모험가";
				mbtiExplanation = "모험가(ISFP)는 진정한 의미의 예술가라고 할 수 있습니다.<br>하지만 모험가라고 반드시 예술 업계에만 종사하는 것은 아닙니다.<br>이들에게는 삶 자체가 자신을 표현하기 위한 캔버스이기 때문입니다.<br>이들은 입는 옷부터 여가 시간을 보내는 방식까지 다양한 측면에서 자신의 독특한 개성을 생생히 드러냅니다.";
				
			}else if(result == "ESTP") {
				mbtiPng = "images/ESTP.jpg"
				mbtiNickName = "사업가";
				mbtiExplanation = "사업가(ESTP)는 항상 주변 사람에게 영향력을 행사하곤 합니다.<br>파티에서 가는 곳마다 사람들에게 둘러싸여 있는 사람을 발견한다면 바로 사업가일 것입니다.<br>이들은 직설적인 유머 감각을 지니고 있으며 수많은 사람의 관심을 받는 일을 즐깁니다.<br>한 마디로 사회자가 무대로 올라올 사람을 찾을 때 직접 무대로 올라가는 성격이라고 할 수 있습니다.";
				
			}else{	// ESFP 일 시
				mbtiPng = "images/ESFP.jpg"
				mbtiNickName = "연예인";
				mbtiExplanation = "연예인(ESFP)은 즉흥적으로 노래하고 춤을 추는 일을 즐기는 성격입니다.<br>이들은 지금 이 순간을 즐기며 남들도 자신과 같은 즐거움을 느낄 수 있기를 바랍니다.<br>또한 남을 응원하는 데 기꺼이 시간과 에너지를 투자하며, 매우 매력적인 방식으로 다른 사람의 기운을 북돋곤 합니다.";
				
			}						
			document.getElementById("mbtiImage").src = mbtiPng;								// 결과에 맞게 이미지 변경
			document.getElementById("userMbti").innerHTML = result+"("+mbtiNickName+")";	// 결과에 맞게 제목 변경
			document.getElementById("userMbtiExplanation").innerHTML = mbtiExplanation;		// 결과에 맞게 내용 변경
			document.getElementById("resultList").style.display = "";						// 결과 노출
			 
		}catch {
			alert("모든 문항을 선택해 주세요.");
		}
		
	}
	// 6페이지 계산식 끝	
	
	// mbti 계산식 저장 시작
	// lastPageCheck은 마지막 페이지 확인하는 변수(마지막 페이지 = Y)
	this.calculator = function(questions, lastPageCheck) {	
		
		// 10개 항목의 배열에 있는 값을 for문을 이용하여 계산하기
		for (var i = 0; i < questions.length; i++) {
		    var price = questions[i];					// 1번~10번 값 넣기
		    
		    // if문 이용하여 첫글자(I, E, S, N, T, F, J, P) 값 체크하여 전역변수 8개에 각각 넣기
		    // 값 계속 가지고 있게 하기 위해 전역변수에서 값 저장
		    if (price[0] === 'I') {	
		        // 'I'일 경우
		        I_check += parseInt(price.charAt(1));	// 계산하기 위해 2번쨰 글자는 숫자로 가져오기
		    } else if (price[0] === 'E') {
		        // 'E'일 경우
		        E_check += parseInt(price.charAt(1)); 
		    } else if (price[0] === 'S') {
		        // 'S'일 경우
		        S_check += parseInt(price.charAt(1)); 
		    } else if (price[0] === 'N') {
		        // 'N'일 경우
		        N_check += parseInt(price.charAt(1)); 
		    } else if (price[0] === 'T') {
		        // 'T'일 경우
		        T_check += parseInt(price.charAt(1)); 
		    } else if (price[0] === 'F') {
		        // 'F'일 경우
		        F_check += parseInt(price.charAt(1)); 
		    } else if (price[0] === 'J') {
		        // 'J'일 경우
		        J_check += parseInt(price.charAt(1)); 
		    } else if (price[0] === 'P') {
		        // 'P'일 경우
		        P_check += parseInt(price.charAt(1)); 
		    }

		}	
		// 페이지 이동 시 값이 초기화 되어서 sessionStorage에 값 저장
		sessionStorage.setItem('I_check', I_check);
		sessionStorage.setItem('E_check', E_check);
		sessionStorage.setItem('S_check', S_check);
		sessionStorage.setItem('N_check', N_check);
		sessionStorage.setItem('T_check', T_check);
		sessionStorage.setItem('F_check', F_check);
		sessionStorage.setItem('J_check', J_check);
		sessionStorage.setItem('P_check', P_check);	
			
		
		// 마지막페이지인지 확인 후 mbti결과 화면 노출
		if(lastPageCheck === "Y") {
			
			// EI 결과 확인 (동일한 값이면 문항이 많은 E)
			if(E_check >= I_check) {
				result = "E";
			}else {
				result = "I";
			}
			
			// SN 결과 확인 (동일한 값이면 문항이 많은 S)
			if(S_check >= N_check) {
				result = result+"S";
			}else {
				result = result+"N";
			}			
			
			// FT 결과 확인 (동일한 값이면 문항이 많은 F)
			if(F_check >= T_check) {
				result = result+"F";
			}else {
				result = result+"T";
			}
			
			// JP 결과 확인 (동일한 값이면 문항이 많은 J)
			if(J_check >= P_check) {
				result = result+"J";
			}else {
				result = result+"P";
			}	
					
		}
	
	}	
	// mbti 계산식 저장 끝

	// 다시하기 버튼 시작
	this.again= function() {
		
		sessionStorage.clear();												// mbti 변수 초기화(sessionStorage)
		
		document.getElementById("mainImage").style.display = "";			// 메인 이미지 노출
		document.getElementById("questionList").style.display = ""; 		// 질문 노출			
		document.getElementById("myBarDiv").style.display = ""; 			// 게이지바 노출	
		document.getElementById("mbtiImage").src = "";						// 결과 이미지 초기화
		document.getElementById("userMbti").innerHTML = "";					// 결과 제목 초기화 변경
		document.getElementById("userMbtiExplanation").innerHTML = "";		// 결과 내용 초기화 변경
		document.getElementById("resultList").style.display = "none";		// 결과 비노출
			
		location.href='onePage.html';										// 1페이지로 이동
		
	}
	// 다시하기 버튼 끝	



}
