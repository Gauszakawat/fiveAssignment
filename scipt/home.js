// bug button daynamic
const createbug = (arry)=>{
    const bugbtn = arry.map((el)=>`
    <button class="bg-[#FECACA] btn-sm text-1xl btn btn-soft btn-error  font-bold rounded-full"><i class="fa-solid fa-bug" style="color: rgb(239, 68, 68);"></i> ${el}</button>
    `);
    return bugbtn.join(" ");

}
// 
// //////all issue////////////
const allbtn =  document.getElementById('allbtn').addEventListener('click' ,function loadData(){
     const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
    .then(res=> res.json())
    .then(data=> displaydata(data.data))


})

const displaydata=(detiles)=>{
 const issueconteiner = document.getElementById('issueconteiner');
 issueconteiner.innerHTML = " ";
for(let single of detiles){
    console.log(single);
    const Newcard = document.createElement('div');
    Newcard.innerHTML= `
    
  <div onclick="loadsingledata(${single.id})" id="issueCard${single.id}" class="  issueCard bg-white pt-4 rounded-[11px] shadow-sm h-100 ">
                    <div class="p-3 flex justify-between items-center">
                        
                          
                         <img src="assets/Open-Status.png" alt="">

                       <button  class="btn rounded-full">${single.priority}</button>
                    </div>


                    <div class="p-3">
                       <h3 class="font-medium text-2xl leading-7 pb-2">${single.title}</h3>
                       <p class="text-[#64748B] leading-5">${single.description}</p>

                    </div>


                    <div class="p-3 flex gap-1 pb-3">

                      <div>${createbug(single.labels)}</div>
                        
                         
                    </div>


                    <div class="p-3 border-t-1 border-[#E4E4E7]">
                        <p class="text-[#64748B]">${single.assignee}</p>
                        <div class="flex justify-between">
                        <p class="text-[#64748B]">${single.createdAt}</p>
                        <p class="text-[#64748B]">${single.updatedAt}</p>
                        </div>
                    </div>

                </div>
    `;
issueconteiner.append(Newcard);

if(single.status === 'open'){
    Newcard.classList.add('openbadge');
    Newcard.classList.remove('closebadge');
};


if(single.status === 'closed'){
    Newcard.classList.add('closebadge');
 Newcard.classList.remove('openbadge');



};



}
const issuelist = document.getElementsByClassName('issueCard');
    const total = issuelist.length;
    document.getElementById('counttext').innerText = total;

};
// ////////////open data/////////

const openbtn =  document.getElementById('openbtn').addEventListener('click',function openbtnload(){
     const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
    .then(res=> res.json())
    .then(data=> opendisplay(data.data))


})
const opendisplay = (openissue)=>{
    const issueconteiner = document.getElementById('issueconteiner');
    issueconteiner.innerHTML = " ";
   for(let openjob of openissue){
      
    if(openjob.status === 'open'){
    


   const Newcard = document.createElement('div');
    Newcard.innerHTML= `
    
  <div onclick="loadsingledata(${openjob.id})" id="issueCard" class=" issueCard bg-white pt-4 rounded-[11px] shadow-sm h-100 ">
                    <div class="p-3 flex justify-between items-center">
                       <img src="assets/Open-Status.png" alt="">
                       <button class="btn rounded-full">${openjob.priority}</button>
                    </div>


                    <div class="p-3">
                       <h3 class="font-medium text-2xl leading-7 pb-2">${openjob.title}</h3>
                       <p class="text-[#64748B] leading-5">${openjob.description}</p>

                    </div>


                    <div class="p-3 flex gap-1 pb-3">

                      <div>${createbug(openjob.labels)}</div>
                        
                         
                    </div>


                    <div class="p-3 border-t-1 border-[#E4E4E7]">
                        <p class="text-[#64748B]">${openjob.assignee}</p>
                        <div class="flex justify-between">
                        <p class="text-[#64748B]">${openjob.createdAt}</p>
                        <p class="text-[#64748B]">${openjob.updatedAt}</p>
                        </div>
                    </div>

                </div>
    `;
issueconteiner.append(Newcard);
Newcard.classList.add('openbadge');
 Newcard.classList.remove('closebadge');


}
   }

const issuelist = document.getElementsByClassName('issueCard');
    const total = issuelist.length;
    document.getElementById('counttext').innerText = total;

}

// ///////close btn///////

const closebtn =  document.getElementById('closebtn').addEventListener('click',function closebtnload(){
     const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
    .then(res=> res.json())
    .then(data=> closedisplay(data.data))


})
const closedisplay = (closeissue)=>{
    const issueconteiner = document.getElementById('issueconteiner');
    issueconteiner.innerHTML = " ";
   for(let closejob of closeissue){
      
    if(closejob.status === 'closed'){
    


   const Newcard = document.createElement('div');
    Newcard.innerHTML= `
    
  <div onclick="loadsingledata(${closejob.id})" id="issueCard" class=" issueCard bg-white pt-4 rounded-[11px] shadow-sm h-100 ">
                    <div class="p-3 flex justify-between items-center">
                       <img src="assets/Closed- Status .png" alt="">
                       <button class="btn rounded-full">${closejob.priority}</button>
                    </div>


                    <div class="p-3">
                       <h3 class="font-medium text-2xl leading-7 pb-2">${closejob.title}</h3>
                       <p class="text-[#64748B] leading-5">${closejob.description}</p>

                    </div>


                    <div class="p-3 flex gap-1 pb-3">

                      <div>${createbug(closejob.labels)}</div>
                        
                         
                    </div>


                    <div class="p-3 border-t-1 border-[#E4E4E7]">
                        <p class="text-[#64748B]">${closejob.assignee}</p>
                        <div class="flex justify-between">
                        <p class="text-[#64748B]">${closejob.createdAt}</p>
                        <p class="text-[#64748B]">${closejob.updatedAt}</p>
                        </div>
                    </div>

                </div>
    `;
issueconteiner.append(Newcard);

 Newcard.classList.add('closebadge');
 Newcard.classList.remove('openbadge');
 

}
   }

   const issuelist = document.getElementsByClassName('issueCard');
    const total = issuelist.length;
    document.getElementById('counttext').innerText = total;






    
}

// button funtion///
const tabbtn = document.getElementsByClassName('tab');
for(let i = 0; i< tabbtn.length; i++){
    tabbtn[i].addEventListener('click', function(){
        for(let j =0; j < tabbtn.length; j++){
            tabbtn[j].classList.remove('tabActive')};
            this.classList.add('tabActive');
    })
}

// //////////////


const loadsingledata = (id)=>{
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=> displaymodal(data.data))

};
const displaymodal = (modal)=>{
    // console.log(modal);
    const modalbo = document.getElementById('modalbox');
    modalbo.innerHTML= `
    <div> 
            <h2 class="text-2xl font-bold mb-6">${modal.title}</h2>
             <div class="space-x-2">
             <button class="bg-[#00A96E] btn text-white rounded-full btn-md">${modal.status}</button>
             <button class="text-[#64748B]"> <i class="fa-solid fa-circle" style="color: rgb(100, 116, 139);"></i>${modal.author}</button>
            <button class="text-[#64748B]"><i class="fa-solid fa-circle" style="color: rgb(100, 116, 139);"></i>${modal.createdAt}</button>
            </div>
           <div class="pt-6 flex gap-1 pb-3">

                      <div>${createbug(modal.labels)}</div>
                        
                         
                    </div>
            <p class="text-[#64748B]">${modal.description}</p>
            <div class=" bg-[#F8FAF] flex justify-between pt-5">
        <div class="left">
            <h4 class="text-[#64748B]">Assignee:</h4>
            <p class="font-bold text-1xl ">${modal.assignee}</p>
        </div>
        <div class="right">
             <h4 class="text-[#64748B]">Priority:</h4>
             <button class="btn bg-[#EF4444] rounded-full text-white">${modal.priority}</button>

        </div>

            
            
            
            
            
            
            </div>
            
            
            </div>
    
    `;
    document.getElementById('mymodal').showModal();
  

};





const serbtn = document.getElementById('serbtn').addEventListener('click',function(){
  const input = document.getElementById('search');
  const value = input.value.trim().toLowerCase();
  console.log(value);
  const url =`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${value}`;
  fetch(url)
  .then(res=> res.json())
  .then(data=> {
    const alldata = data.data;
    console.log(alldata);
    const filterissue = alldata.filter(issueee => issueee.title.toLowerCase().includes(value));
    displaydata(filterissue);
  })
})









// ///load
window.onload = function(){
    const autoclick = document.getElementById('allbtn');
    autoclick.click()
};