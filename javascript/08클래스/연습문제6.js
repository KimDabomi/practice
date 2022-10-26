/* 6. Queue(큐)는 배열을 내장하는 클래스로서 Stack과 더불어 가장 널리 사용되는 자료구조이다.active

Stack의 특징이 FILO(First Input Last Output, 선입후출)인 반면 Queue의 특징은 FIFO(First Input First Output, 선입선출)이다.

전통적인 자료구조에서는 추가되는 데이터는 무조건 배열의 맨 마지막 원소로 등록되지만 요즘 프로그래밍 언어는 배열의 맨 앞에 데이터를 추가하고 기존의 데이터는 한칸씩 뒤로 밀리는 기능도 제공되고 있다.

문제05에서 완성한 MyList 클래스에 기능을 추가하시오.

1) 문제05에서 구현한 MyList 클래스를 문제06에 동일하게 복사하고 shift() 메서드와 unshift(item) 메서드를 추가한다.
2) shift() 메서드는 배열의 가장 첫 번째 원소를 꺼내어 리턴하고 배열의 크기를 1축소 시킨다.
   - 이를 위해 data의 첫 번째 원소를 지역변수(혹은 상수)에 복사한다.
   - 임시 변수를 data의 길이보다 1 작은 크기로 초기화 하고 data의 1번째 원소부터 나머지 원소들을 임시 변수에 깊은 복사 처리한다. (data의 1번째 항목이 임시 변수의 0번째 자리에 복사)
   - 복사가 완료되면 data의 크기를 기존보다 1 작게 다시 초기화 하고 임시 변수의 항목들을 그대로 깊은 복사 처리한다.
   - 이 모든 과정은 slice() 등의 javascript 내장 함수를 사용하지 않고 반복문으로 직접 구현하시오.
3) unshift(item) 메서드는 파라미터로 전달된 값을 data의 맨 첫 번째 원소로 추가하고 기존의 데이터들은 한 칸씩 뒤로 밀어낸다.
   - 이를 위해 임시 변수를 data와 동일한 길이로 생성하고 data의 모든 원소를 깊은 복사 한다.
   - data를 기존의 길이보다 1 큰 값으로 초기화 한다.
   - data의 첫 번째 원소로 item을 저장한다.
   - data의 두 번째 원소부터는 복사된 임시 변수의 원소를 깊은 복사 처리한다. (임시 변수의 0번째 항목이 data의 1번째 자리에 복사)
   - 이 모든 과정은 slice() 등의 javascript 내장 함수를 사용하지 않고 반복문으로 직접 구현하시오.
4) 완성된 클래스는 아래의 테스트 코드를 사용하여 결과를 확인하시오. */

class MyList {
    #data;
    #size;
    constructor() {
        this.#data = [];
        this.#size = 0;
    }
    get data() {
        return this.#data;
    }
    get size() {
        return this.#size;
    }
    push(item) {
        this.#data[this.#size] = item;
        this.#size++;
        // -> 간단하게 this.#data[this.#size++] = item;
    }
    pop() {
        // 배열의 마지막 원소 꺼내기
        const last = this.#data[this.#size-1];
        // 임시변수에 깊은복사
        const temp = new Array(this.#size);
        for (let i=0; i<this.#size; i++) {
            temp[i] = this.#data[i];
        }
        // 마지막 원소 제외하고 다시 data에 깊은 복사
        this.#data = new Array(this.#size-1);
        for (let i=0; i<this.#size-1; i++) {
            this.#data[i] = temp[i];
        }
        // 배열의 크기를 1 축소
        this.#size--;
        return last;
    }
    shift() {
        const first = this.#data[0];
        // 임시변수를 data의 길이보다 1 작은 크기로 초기화하고 data의 1번째 원소부터 나머지 원소들을 임시변수에 깊은 복사
        const tmp = new Array(this.#size-1);
        for (let i=0; i<this.#size-1; i++) {
            tmp[i] = this.#data[i+1];
        }
        // 복사가 완료되면 data의 크기를 기존보다 1 작게 다시 초기화하고 임시변수의 항목들을 그대로 깊은 복사
        this.#data = new Array(this.#size-1);
        for (let i=0; i<this.#size-1; i++) {
            this.#data[i] = tmp[i];
        }
        this.#size--;
        return first;
    }
    unshift(item) {
        const tmp = new Array(this.#size);
        for (let i=0; i<this.#size; i++) {
            tmp[i] = this.#data[i];
        }
        this.#data = new Array(this.#size+1);
        this.#data[0] = item;
        for (let i=1; i<this.#size+1; i++) {
            this.#data[i] = tmp[i-1];
        }
        this.#size++;
    }
}
const list = new MyList();

list.push(100);
list.push(200);
list.push(300);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const x = list.shift();
console.log('추출된 데이터: %d', x);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.push(400);
list.push(500);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const y = list.shift();
console.log('추출된 데이터: %d', y);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.push(600);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const z = list.shift();
console.log('추출된 데이터: %d', z);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.unshift(700);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.unshift(800);
list.unshift(900);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);