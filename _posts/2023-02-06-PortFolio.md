---
title: "[BP]PortFolio"
data: 2023-02-06 10:00:00 +0900
categories: [UE4 포트폴리오(BP), 목차]
tags: [BP]
---
   
 - 목차 - 
중요 클래스 구조 설명   
Player   
Weapon  
AI  

Default Character <br>
![Image](https://user-images.githubusercontent.com/121000013/219037126-479108a8-711e-4175-b8be-9cf81efbcb9e.PNG)<br>

<br>
Item <br>
![Image](https://user-images.githubusercontent.com/121000013/218699561-241d3636-fa66-4405-86bf-24e16b48b0c0.PNG) <br>
<br>
<br>
Player <br>
<iframe width="800" height="450" src="https://www.youtube.com/watch?v=_TWT7ePJDbI&list=PLALFxu-91BI-l2uEO2tuPQIBTthDU0-GR&index=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
캐릭터의 애니메이션은 애님 에셋 리타깃을 이용하였고 <br>
아이템들을 파밍하여 인벤토리에 보관이 가능하다. <br>
Combat 아이템을 장착하면 캐릭터의 Status의 값이 반영된다. <br>
장착시 Attach가 되고 해제 시 Status 값이 바뀌고 액터를 Destroy한다. <br>
버리고 다시 먹기도 가능하다. <br>
<br>
<br>
![Image](https://user-images.githubusercontent.com/121000013/219045119-22fbf754-2e50-48f2-b6c3-bdfa061718ac.PNG) <br>
![Image](https://user-images.githubusercontent.com/121000013/218485334-2c3fac89-1230-4bda-89ef-df4957876d72.PNG) <br>
Playe 입력 방식으로는 커맨드식으로  Queue를 비슷하게 만들었다. <br>
들어온 커맨드를 배열에 저장하여 앞에의 두개의 입력을 확인하여 Enum값으로 저장하고 배열을 0.3초 후 초기화 시키는 타이머를 만들었다. <br>
Enum값으로 특수 키(마우스 양쪽클릭, 마우스 사이드 + 좌클릭 등) 일 경우 값에 따라 호출하고 다시 Enum값을 초기화 시켜준다. <br>
<br>
<br>
무기 <br>
![Image](https://user-images.githubusercontent.com/121000013/218485439-4b0d0904-d05d-4358-bff0-09857f974364.PNG) <br>
DamageComponent 무기들의 데미지 퍼센트와 데미지 타입이 있는 구조체의 DT로 관리해주고 <br> 
BP Weapon 클래스에서 몽타주에 필요한 구조체를 DT로 관리해준다. <br> 
배열에 들어 있는 인덱스 번호는 Combo Count의 변수로 넣어 배열의 인데스에 접근하여 데이터를 읽는다. <br>
데미지는 방어율 방식으로 방어 상수를 이용해 계산했습니다. <br>
<br>
<br>
콤보 <br>
- Sword - <br>
<iframe width="800" height="450" src="https://www.youtube.com/watch?v=S9MBDGPiEWE&list=PLALFxu-91BI-l2uEO2tuPQIBTthDU0-GR&index=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
기본 콤보 1-2-3-4 이런식으로 작동한다 반복 클릭시, 2번 부터 2-3-4 순으로 작동한다. <br>
우클릭 시 3번째 콤보 공격이 나가고 3-4-3-4 반복 콤보도 가능하다. <br>
마우스 사이드 클릭시 특수 공격 콤보가 4타 나간다. (기본과 동일 속도와 트레일 추가) <br>
기본 공격과 특수공격을 섞을 수 있다. <br>
공격 모션 중 발도 준비 커맨드도 가능하다. (불 이펙트) <br>
<br>
<br>
DualSword  (공중 콤보 어택) <br>
데미지 타입으로 공중 콤보를 구현하였다. <br>
<iframe width="800" height="450" src="https://www.youtube.com/watch?v=A6T9Zen75l0&list=PLALFxu-91BI-l2uEO2tuPQIBTthDU0-GR&index=5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
기본 공중콤보 1-2-3-4  형식으로 작동한다. <br>
특수 공중콤보 하나의 몽타주로 처리했고 공중에 뜬 적을 찾아 이동공격 한다 마지막 공격에 글로벌 시간을 느리게 했다. <br>
공중에 뜬 적을 못찾은 경우 제자리에서 모션이 나간다. <br>
<br>
<br>
AI <br>
![Image](https://user-images.githubusercontent.com/121000013/219038700-854337c8-fe65-49c5-b1e4-7289bca803ff.PNG)    
기본적인 이동과 공격이 있다. <br>
Return은 고유한 자리를 벗어나지않게 다시 돌아간다. <br>
<iframe width="800" height="450" src="https://www.youtube.com/watch?v=XHF6sYezLpY&list=PLALFxu-91BI-l2uEO2tuPQIBTthDU0-GR&index=2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
<br>
![Image](https://user-images.githubusercontent.com/121000013/219044177-f9143bd1-c7ea-4199-9522-e4bc23b50b3b.PNG) <br>
RunAway는 피가 20%이하가 되면 EQS를 돌려 Enemy에서 Player 방향과  Enemy와 Item 방향으로 내적하여 <br>
나온 값의 Inverse Linear로 점수를 먹여 최적의 방향을 정해준다. (Scoring Factor 2로 설정하여 제일 높은 점수) <br>
플레이와 거리가 가장 먼 곳  (Scoring Factor 1 제일 낮은 점수) <br> 
차폐된 곳으로 Item점수 ((Scoring Factor 1.5 중간 점수) <br>
점수로 우선순위를 정하여 이동한다. <br>
<br>
<br>
보스 패턴 <br>
보스의 상태를 정해주는 Root Service에서 상황을 체크하여 Enum값을 설정하여 정해주는데 <br>
보스 내부에 쿨타임을 만들어 난사하는 경우를 막았다.<br>
<br>
![Image](https://user-images.githubusercontent.com/121000013/218486473-5aa7f75f-befd-4472-8e85-f88ed85af490.PNG) <br>
AirBone - 적에게의해 Falling 상태 일 때 몽타주를 재생 시켜 행동을 끊어주고, !Falling 상태 일 때 몽타주로 일어나 다시 Idle상태로 돌린다. <br>
BackStep - 일정거리 안에 들어올 때 쿨타임이 아닌경우 실행한다. 기본공격시 20퍼확률 쿨타임을 초기화 시켜준다. <br>
Turn - 타겟을 기준으로 내적과외적을 하여 어느 방향에 있는지 알아내어 그 방향으로 몸을 돌린다. <br>
-Melee Attack- <br>
BackAttack은 Chance값이 상대가 뒤를 보일 때 확률을 100퍼로 하여 거리안에 있으면 공격을 하고,   <br>
Melee Attack 상황에서 사거리에 접근을 하지 않고 30퍼 확률로도 공격한다. <br>
<br>
- Range Attack -  <br>
<iframe width="800" height="450" src="https://www.youtube.com/watch?v=0xZcegxHsW4&list=PLALFxu-91BI-l2uEO2tuPQIBTthDU0-GR&index=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

먼 거리에서 두개의 공겨 모션이 있다.  <br>
Spline을 이용해 점프의 곡선을 최대한 자연스럽게 만들었다. <br>
Spline의 Length를 이용해 일정 간격마다 검을 소환하게 만들었다.<br>
<br>
- Strafe & StrafeAttack - <br>
일정범위에서 EQS 값으로 상대 주변을 맴돌며 점점 가까워진다 하지만 상대가 이 때 움직이지 않는다고 생각하면 StrafeAttack을 하게 만들었다. <br>
<br>
2페이지 <br>
잠시 보스가 도망가여 다이나믹 머티리얼을 이용해 몸색을 바꾸어 주고, 공격속도가 증가하고  30초마다 은신패턴에 들어간다. <br>
은신을 풀리게하는 아이템을 사용하여 찾아 낼 수 있고 Post Process를 이용하여 효과를 주었다. <br>
<iframe width="800" height="450" src="https://www.youtube.com/watch?v=Tv5D3FhuHN4&list=PLALFxu-91BI-l2uEO2tuPQIBTthDU0-GR&index=7" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

