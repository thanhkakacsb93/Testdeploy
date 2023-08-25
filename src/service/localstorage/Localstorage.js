export const DataLocalStorage = (data) => {
    localStorage.setItem("datatodolist", JSON.stringify(data))
}

export const handleArrange = (data) => {
    data.sort((a, b) => {
        let A = a.txt.toUpperCase()
        let B = b.txt.toUpperCase()
        return A.localeCompare(B)
    })
}

