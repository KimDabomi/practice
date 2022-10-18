/* 4. 다음을 만족하는 클래스 Account를 작성하시오.
1. 다음의 2 개의 필드를 선언
문자열 owner; (이름)
숫자형 balance; (금액)
2. 위 모든 필드에 대한 getter와 setter의 구현
3. 위 모든 필드를 사용하는 가능한 모든 생성자의 구현
4. 메소드 deposit()의 헤드는 다음과 같으며 인자인 금액을 저축하는 메소드
deposit(amount)
5. 메소드 withdraw()의 헤드는 다음과 같으며 인자인 금액을 인출(리턴)하는 메소드
withdraw(long amount)
인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력
클래스 작성 후 아래의 소스를 실행하여 동일한 출력결과를 생성하시오. */
class Account {
    owner;
    balance;
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    get owner() { return this._owner; }
    set owner(v) { this._owner = v; }
    get balance() { return this._balance; }
    set balance(v) { this._balance = v; }
    disposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance < amount) {
            console.log("잔액이 부족합니다.");
            return 0;
        }
        this.balance -= amount;
        return amount;
    }
}
const acc = new Account("Hello", 15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.disposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.disposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);