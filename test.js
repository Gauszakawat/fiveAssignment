const createbug = (arry)=>{
    const bugbtn = arry.map((el)=>`
    <button class="bg-[#FECACA] btn btn-soft btn-error  text-[#EF4444] rounded-full"><i class="fa-solid fa-bug" style="color: rgb(239, 68, 68);"></i> ${el}</button>
    `);
    return bugbtn.join(" ");

}
const hahaha = ['ha', 'ha', 'ha']
createbug(hahaha);