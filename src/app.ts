
export function runApp(): void {
    const billInput = document.getElementById('billInput') as HTMLInputElement;
    const tipBtns = document.querySelectorAll('.tip-btn');

    const billAmt = document.getElementById('billAmt') as HTMLSpanElement;
    const tipPercent = document.getElementById('tipPercent') as HTMLSpanElement;
    const amtOfTip = document.getElementById('amtOfTip') as HTMLSpanElement;
    const totalBillAmt = document.getElementById('totalAmt') as HTMLSpanElement;

    let currentTipAmt = 0;
    let currentBillAmt = 0;

    billInput.addEventListener('keyup', getBillInput);
    tipBtns.forEach(function (b: HTMLButtonElement) {
        b.addEventListener('click', function () {
            currentTipAmt = Number(this.value);
            calculateTip();
        });
    });

    function getBillInput() {
        currentBillAmt = Number(billInput.value);
        calculateTip();
    }

    function calculateTip() {
        billAmt.innerHTML = currentBillAmt.toString();
        tipPercent.innerHTML = currentTipAmt.toString();
        amtOfTip.innerHTML = (currentBillAmt * currentTipAmt / 100).toString();
        totalBillAmt.innerHTML = (currentBillAmt + currentBillAmt * currentTipAmt / 100).toString();
    }
}






