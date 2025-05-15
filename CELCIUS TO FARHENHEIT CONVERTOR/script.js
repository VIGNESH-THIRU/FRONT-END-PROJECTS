function convert(){
    let cel = Number(document.getElementById("cel").value)
    let fah = (cel * 9/5) + 32
    let res = document.getElementById("res")
    res.innerHTML = fah
}
