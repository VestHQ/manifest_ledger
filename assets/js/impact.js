// ACTIVE ACCOUNTS
const numOldAccounts = document.getElementById('numOldAccounts')
const avgAccountBalance = document.getElementById('avgAccountBalance')
const calcBtnActive = document.getElementById('calcGains')

let numOldAccountsEl = document.getElementById('numAccounts')
let avgAccountBalanceEl = document.getElementById('avgAccount')
let unconsolidatedEl = document.getElementById('unconsolidated')
let gainEl = document.getElementById('gain')
let consolidatedEl = document.getElementById('consolidated')

calcBtnActive.addEventListener('click', () => {
    // check for user input
    if (numOldAccounts.value == 0) {
        numOldAccounts.value = 3
    }
    if (avgAccountBalance.value == 0) {
        avgAccountBalance.value = 8100
    }

    numOldAccountsEl.textContent = numOldAccounts.value
    avgAccountBalanceEl.textContent = `$${formatNumber(avgAccountBalance.value)}`
    unconsolidatedEl.textContent = `$${formatNumber(numOldAccounts.value * avgAccountBalance.value)}`
    gainEl.textContent = `$${formatNumber(Math.round(numOldAccounts.value * avgAccountBalance.value * .36))}`
    consolidatedEl.textContent = `$${formatNumber(Math.round(numOldAccounts.value * avgAccountBalance.value * 1.36))}`
})

// INACTIVE ACCOUNTS
const numAccountsTransferred = document.getElementById('numInactiveAccounts')
const numYears = document.getElementById('numYears')
const calcBtnInactive = document.getElementById('calcBtnInactive')

const inactiveAccountEl = document.getElementById('inactiveAccountsNum')
const yearsEl = document.getElementById('years')
const graphicInactiveGain = document.getElementById('inactiveGain')
const employerCircleYearEl = document.getElementById('employer-circle')
const participantCircleYearEl = document.getElementById('participant-circle')
const employerCircleCostEl = document.getElementById('employerCost-circle')
const participantCircleCostEl = document.getElementById('participantCost-circle')
const totalCostReductionEl = document.getElementById('costReduction')

calcBtnInactive.addEventListener('click', () => {
    // check for user input
    if (numAccountsTransferred.value == 0) {
        numAccountsTransferred.value = 1
    }
    if (numYears.value == 0) {
        numYears.value = 5
    }

    inactiveAccountEl.textContent = numAccountsTransferred.value
    yearsEl.textContent = numYears.value
    graphicInactiveGain.textContent = `$${formatNumber(numAccountsTransferred.value * (72 * numYears.value) + (36 * numYears.value))}`
    employerCircleYearEl.textContent = numYears.value
    participantCircleYearEl.textContent = numYears.value
    employerCircleCostEl.textContent = `$${72 * numYears.value}`
    participantCircleCostEl.textContent = `$${36 * numYears.value}`
    totalCostReductionEl.textContent = `$${(72 * numYears.value) + (36 * numYears.value)}`
})


// utily fn's
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// click outside
// document.addEventListener("click", (e) => {
//     const activeInputBox = document.querySelector(".input-box");
//     let targetElement = e.target; // clicked element

//     do {
//         if (targetElement == activeInputBox) {
//             // This is a click inside. Do nothing, just return.
//             console.log('in')
//             return;
//         }
//         // Go up the DOM
//         targetElement = targetElement.parentNode;
//     } while (targetElement);

//     // This is a click outside.
//     // active
//     if (numOldAccounts.value == 0) {
//         console.log('out active')
//         numOldAccountsEl.textContent = 1
//         unconsolidatedEl.textContent = '$8,100'
//         gainEl.textContent = '$2,916'
//         consolidatedEl.textContent = '$11,016'
//     }
//     if (avgAccountBalance.value == 0) {
//         avgAccountBalanceEl.textContent = '$8,100'
//     }

//     // inactive
//     if (numAccountsTransferred.value == 0) {
//         inactiveAccountEl.textContent = 1
//         graphicInactiveGain.textContent = '$540'
//     }
//     if (numYears.value == 0) {
//         yearsEl.textContent = 5
//         employerCircleYearEl.textContent = 5
//         participantCircleYearEl.textContent = 5
//         employerCircleCostEl.textContent = '$360'
//         participantCircleCostEl.textContent = '$180'
//         totalCostReductionEl.textContent = '$540'
//     }
// });