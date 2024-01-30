let totalAmount = 0;
    let transactionCount = 0;

    function showPiggyBank() {
        document.getElementById('initialScreen').style.display = 'none';
        document.getElementById('piggyBank').style.display = 'flex';
    }

    function saveMoney() {
        const nameInput = document.getElementById('nameInput');
        const amountInput = document.getElementById('amountInput');

        const name = nameInput.value.trim();
        const amount = parseFloat(amountInput.value);

        if (!name || isNaN(amount) || amount <= 0) {
            alert('Please enter valid name and amount.');
            return;
        }

        totalAmount += amount;
        transactionCount++;
        updateTotalAmount();
        nameInput.value = '';
        amountInput.value = '';
    }

    function withdrawMoney() {
        const nameInput = document.getElementById('nameInput');
        const amountInput = document.getElementById('amountInput');

        const name = nameInput.value.trim();
        const amount = parseFloat(amountInput.value);

        if (!name || isNaN(amount) || amount <= 0 || amount > totalAmount) {
            alert('Please enter a valid name and amount within the available balance.');
            return;
        }

        totalAmount -= amount;
        transactionCount++;
        updateTotalAmount();
        nameInput.value = '';
        amountInput.value = '';
    }

    function breakPiggyBank() {
        document.getElementById('piggyBank').style.display = 'none';
        document.getElementById('finalScreen').style.display = 'flex';

        document.getElementById('transactionCount').textContent = transactionCount;
        document.getElementById('finalAmount').textContent = totalAmount.toFixed(2);
    }

    function updateTotalAmount() {
        const totalAmountElement = document.getElementById('totalAmount');
        totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    }