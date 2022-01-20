
# 만다라트 프로젝트

<img src="https://user-images.githubusercontent.com/10703437/148901757-f417af0d-ea1c-4297-ae1d-fb67be0ef37f.png">


>  
>  Mandalart(만다라트)는 Manda(깨달음) La(성취) Art(기술)의 합성어입니다.   
>  

- 9개의 격자는 중심의 목표와 그 목표를 성취하기 위한 8개의 방법이 위치합니다.
- 중심의 격자와 그 외 8방 격자들은 각 방법을 위해 할 수 있는 것들을 적어가며 채워갑니다.

1년 계획 등을 세울때 사용하면 가시성이 좋고, 목표를 수립하는데에 큰 도움이 될 수 있습니다.

<br/><br/>


## 개발동기

리액트를 공부하면서 실제 운용할 수 있는 서비스(프로그램)을 만들고 싶었습니다. 

트위터, 유튜브 등을 클론코딩 하는 것 보다 내가 평소에 불편하게 사용하던 것을 만들면 좋겠다고 생각했습니다. 

매년 저는 만다라트 계획표를 직접 그리며 새해를 준비하곤 합니다.

2021년을 보내면서 내가 배운 기술로 내 스스로의 불편함을 해결해보자는 취지로 시작하게 되었습니다.

<br/><br/>
## 리액트 컴포넌트 트리

<img src="https://user-images.githubusercontent.com/10703437/150314119-3fcd71c4-adcf-4205-80f9-2713c7887263.png">

리액트 컴포넌트 트리는 위와 같습니다. 
- Top, Main, Footer의 영역으로 나누어지며, 핵심 부분은 Main입니다.
- 확장성을 고려하여 차후에 기능이 추가된다면 이용될 수 있는 Side부분을 Main내부에 구현 해두었습니다.
- 계획표가 동작하는 부분은 Article 컴포넌트이며, 음영으로 표시된 BoxContainer, Box는 Redux의 상태에 따라 변화됩니다.
- Modal, InputModal은 직접 제작한 모달창으로, 사용자와의 상호작용에 따라 열림/닫힘이 이루어집니다. 

<br/><br/>
## 사용법

### 1. 초기화면
<img src="https://user-images.githubusercontent.com/10703437/150311738-53c8b2eb-22dd-413e-9c70-2d162d087a94.png" width="500" height="500" >

만다라트 계획표는 1개의 메인 목표와, 8개의 서브목표로 이루어집니다. 중간의 타일을 클릭하여 모달창을 띄웁니다.


<br/>



### 2. 메인목표와 8개의 서브목표 채우기 
<img src="https://user-images.githubusercontent.com/10703437/150311948-4d754824-3f48-4488-9da0-51518c3e24c1.gif">
모달창에서 각 타일을 선택하여 목표들을 채웁니다.  


<img src="https://user-images.githubusercontent.com/10703437/150312918-b97872f1-fb40-4358-bc3c-a09ef6a8ce67.png" width="500" height="500">

각 목표가 채워짐에 따라 메인 홈의 타일들의 색상이 채워집니다.


<br/>




### 3. 각 서브목표를 달성하기 위한 계획들 세우기

<img src="https://user-images.githubusercontent.com/10703437/150313300-fdd10f29-7f3f-4dba-b6d9-95bf47aca6d3.gif" width="500" height="500">

<img src="https://user-images.githubusercontent.com/10703437/150311859-828cb7f8-8b5e-4a47-889b-73964c2ed642.png" width="500" height="500">

각 서브목표 타일에서도 위와 같은 방식으로 계획들을 채워줍니다.



<img src="https://user-images.githubusercontent.com/10703437/150311546-470d0b7d-4ab7-457d-90c0-25872343aa93.png" width="500" height="500">

계획들이 세워짐에 따라 홈화면의 각 타일들의 색상이 짙어집니다. 

<br/><br/>



### 개발 기간
2021년 12월 25일 ~ 2022년 1월 7일 (약 2주)
- <a href="https://93jpark.tistory.com/97">개발 일지 0</a>
- <a href="https://93jpark.tistory.com/105">개발 일지 1</a>
- <a href="https://93jpark.tistory.com/106">개발 일지 2</a>


