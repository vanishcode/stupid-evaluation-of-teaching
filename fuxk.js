let inside = window.document.getElementById('frmStu').contentWindow

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        let op = inside.document.querySelector(`#GridView1_DropDownList${i}_${j}`)
        if (op == null) continue
        op.value = 5
    }
}