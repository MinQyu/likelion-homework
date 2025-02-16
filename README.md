# 멋쟁이 사자처럼 프론트엔드 스쿨 12기

김민규의 과제 저장소

## 쇼핑 카트

> [배포 주소](https://likelion-homework.vercel.app/)

> [깃허브 파일](https://github.com/MinQyu/likelion-homework/tree/main/src/homework/pages/shopping-cart)

## 스톱워치

> [배포 주소](https://likelion-homework.vercel.app/?view=stop-watch)

> [깃허브 파일](https://github.com/MinQyu/likelion-homework/tree/main/src/homework/pages/stop-watch)

### 기존 스톱워치 버그

```typescript
// 기존 타임 포멧팅 함수
// recordTime + nowTime - startTime
const formatTime = (time: number) => {
  // 밀리초(miliseconds)
  const miliseconds = parseInt(${time % 100}, 10);

  // 초(seconds) = 1000ms
  const seconds = parseInt(${(time / 1000) % 60}, 10);

  // 분(minutes) = 60s
  const minutes = parseInt(${(time / (1000 * 60)) % 60}, 10);

  // 시(hours) = 60m
  const hours = parseInt(${(time / (1000 * 60 * 60)) % 60}, 10);

  // 숫자값을 2자리로 설정
  // 예) 0  →  "00"
  const [hh, mm, ss, ms] = [hours, minutes, seconds, miliseconds].map(
    (time) => {
      return time.toLocaleString('ko-KR', {
        minimumIntegerDigits: 2,
      });
    }
  );

  return ${hh}:${mm}:${ss}:${ms};
};
```

- 타임 포멧팅 함수에서 밀리초에 해당하는 부분이 0~99 범위로 제한되어있어서 제대로 표기되지 않는 버그가 있었습니다.
- 1s는 1000ms 이므로 0~999 범위로 처리해주었습니다.
- 불필요한 템플릿 리터럴을 제거하고, parseInt 대신 Math.floor 메서드를 사용해 소수점 아래를 자르는 방식으로 다시 작성했습니다.

```typescript
// 수정한 타임 포멧팅 함수
const formatTime = (time: number) => {
  const miliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  const [hh, mm, ss, ms] = [hours, minutes, seconds, miliseconds].map((unit) =>
    unit.toString().padStart(2, '0')
  );

  return `${hh}:${mm}:${ss}:${ms}`;
};
```
