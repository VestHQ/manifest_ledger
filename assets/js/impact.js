// ACTIVE ACCOUNTS
const numOldAccounts = document.getElementById('numOldAccounts')
const avgAccountBalance = document.getElementById('avgAccountBalance')
const calcBtnActive = document.getElementById('calcGains')

let numOldAccountsEl = document.getElementById('numAccounts')
let avgAccountBalanceEl = document.getElementById('avgAccount')
let gainEl = document.getElementById('gain')
let graphicOutputEl = document.getElementById('graphicOutput')

calcBtnActive.addEventListener('click', () => {
    numOldAccountsEl.textContent = numOldAccounts.value
    avgAccountBalanceEl.textContent = `$${formatNumber(avgAccountBalance.value)}`
    gainEl.textContent = `$${formatNumber(numOldAccounts.value + avgAccountBalance.value)}`
    graphicOutputEl.textContent = `$${formatNumber(numOldAccounts.value + avgAccountBalance.value)}`
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
    inactiveAccountEl.textContent = numAccountsTransferred.value
    yearsEl.textContent = numYears.value
    graphicInactiveGain.textContent = `$${formatNumber(numYears.value * 1000)}`
    employerCircleYearEl.textContent = numYears.value
    participantCircleYearEl.textContent = numYears.value
    employerCircleCostEl.textContent = `$${72 * numYears.value}`
    participantCircleCostEl.textContent = `$${36 * numYears.value}`
    totalCostReductionEl.textContent = `$${(72 * numYears.value) + (36 * numYears.value) + 49}`
})


// utily fn's
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}