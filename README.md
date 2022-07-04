# triple task
> 트리플 홈페이지의 한 섹션 구현

### 목차
- #### [프로젝트 실행 방법](#프로젝트-실행-방법)
- #### [기술 스택](#기술-스택)
- #### [고민](#고민)

---

## 프로젝트 실행 방법
1. `npm install` : 필요한 라이브러리 설치

2. `npm start` : 실행

## 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> <img src="https://img.shields.io/badge/styledComponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

### Styled Components
- 컴포넌트의 props의 값에 따라 다르게 스타일링 할 수 있다.
  - 애니메이션 명세 중 영역별 등장 애니메이션에서 영역별 애니메이션은 같으나, 
  - 사이 간격만이 다르기에 props를 사이 간격을 주어 재사용에 유용하게 할 수 있기에 해당 기술 스택을 선택했다.
- 컴포넌트 기반으로 CSS 작성할 수 있게 도와준다.
  - React는 컴포넌트 기반 라이브러리다. 
  - 그렇기에 컴포넌트 기반으로 CSS를 작성할 수 있는 Styled Components는 React로 개발할 때 잘 어울린다고 생각하기에 사용한다.


## 고민

### 숫자가 올라가는 애니메이션
- 문자가 변경되는 애니메이션은 작업해 본 적이 없기에 많은 고민이 들었다.
- 우선 2초 동안 숫자가 증가하기에 프레임을 30으로 고정한 후, interval을 2000/60 간격으로 실행하도록 하였다.
  - 1초 동안 30번 실행이 되기에 2000/60으로 설정했다.
- 그 후 React Hook인 useState로 화면에 보여줄 숫자의 상태 관리하였다.
- 숫자 증가 속도가 느려지는 효과를 구현하기 위해 easing 함수를 사용하였다.
  - easing 함수의 반환 값은 0에서 1사이의 값이므로 최종 숫자를 곱해 소수점을 버리면 0부터 최종 수까지 증가하는 것처럼 보이도록 하였다.
- 만일 easing 함수에 최종 숫자를 곱한 값이 최종 숫자이면 interval을 종료하도록 하였다.

### 모듈화
- Styled Components를 사용한 이유에서 언급했듯이 영역별 등장 애니메이션은 3개의 영역의 애니메이션이 시간 차를 제외하고는 동일하다.
- 그런 동일한 애니메이션을 따로 만들어 두어 사용을 하는 편이 이후 유지보수도 간편하다고 생각했다.

### 일관된 형식
- 일관된 형식을 지키기 위해 코드를 작성하기 이전에 어떤 식으로 코드를 작성할지 고민해봤다.
- 우선 body요소의 주 컨텐츠이기에 main태그로 감싸기로 결정했다.
- 한 섹션을 구현하는 것이기에 트리플에서 className으로 사용하고 있는 ResponsiveSection라는 className을 사용해 나머지 Container들을 감싸기로 했다.
