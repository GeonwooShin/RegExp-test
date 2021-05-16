const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://www.naver.com
`
// 메소드
// const regexp = new RegExp('the','gi')
// console.log(str.match(regexp))

// const regexp = /the/gi
// console.log(str.match(regex))

// const regexp = /fox/gi
// console.log(regexp.test(str))

// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// 플래그
// const regexp = /the/gi
// console.log(str.match(regexp))

// console.log(str.match(/the/gi)) // 리터럴로 대체 가능

// console.log(str.match(/\.$/gim))

// 패턴
console.log(str.match(/d$/gm)) // d로 끝나는 문자의 배열 반환

console.log(str.match(/^t/gim)) // 대소문자 관계없이 t로 시작하는 문자의 배열 반환

console.log(str.match(/h..p/g)) // 앞글자가 h 뒷글자가 p 가운데에 임의의 문자 두개가 들어간 문자를 배열 반환

console.log(str.match(/fox|dog/g)) // g플래그가 없다면 둘 중 먼저 찾아지는 것만 반환한다.

console.log(str.match(/https?/g)) // ? 패턴 앞에 글자는 있을수도 있고, 없을수도 있다.

console.log(str.match(/\b\w{2,3}\b/g)) // 일치 개수로 문자의 배열 반환

console.log(str.match(/[fox]/g)) // f 또는 o 또는 x 를 모두 찾아 문자의 배열 반환

console.log(str.match(/[0-9]{1,}/g)) // 0부터 9 사이의 숫자중 1개 이상으로 이루어진 문자를 배열 반환

console.log(str.match(/\w/g))

console.log(str.match(/\bf\w{1,}\b/g)) // 63개의 문자가 아닌 경계에서 시작해서 f라는 알파벳 단어로 시작하고 그 뒤에 63개 문자중에 하나 이상의 문자가 오고 마지막에 63개의 문자가 아닌 경계로 끝나는 문자를 모두 찾아 배열로 반환

console.log(str.match(/\d{1,}/g))

console.log(str.match(/\s/g)) // 공백 문자 배열 반환
const h = `  the  hello   world !  `
console.log(h.replace(/\s/g,'')) // 모든 공백 문자 없앰

console.log(str.match(/.{1,}(?=@)/g)) // 앞쪽을 일치시키는 개념이라서 앞에 작성

console.log(str.match(/(?<=@).{1,}/)) // 뒤쪽을 일치시키는 개념이라서 뒤에 작성