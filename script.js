const countEl = document.getElementById("count-el")
const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
const saveEl = document.getElementById("save-el")
const resetBtn = document.getElementById("reset-btn")
const decrementBtn = document.getElementById("decrement-btn")

let count = 0
let savedEntries = []

incrementBtn.addEventListener("click", function(){
    count += 1
    countEl.textContent = count
}) 

decrementBtn.addEventListener("click", function(){
    if (count > 0) {count -= 1
    countEl.textContent = count
    }
})

saveBtn.addEventListener("click", function(){
    if (count > 0) {
        save()
        renderEntries()
    } 
})

resetBtn.addEventListener("click", function(){
    count = 0
    countEl.textContent = 0
    savedEntries = []
    saveEl.textContent = ""
})

function save(){
    savedEntries.push(count)
}

function renderEntries() {
    saveEl.textContent = ""
    for (let i = 0; i < savedEntries.length; i++) {
        saveEl.textContent += savedEntries[i] + "\n"
    }
}

