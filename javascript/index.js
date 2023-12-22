var joinedBtn=document.getElementById('joined')
var formSubmitBtn =document.getElementById('formSubmitBtn')
var profleIcon=document.getElementById('profile')
var names=document.getElementById('created')
var itsFree=document.getElementById('i-f');
var followMember=document.getElementById('r-c');
var form=document.getElementById('isSignup');
var follow=document.querySelector('.follow')
joinedBtn.addEventListener('click',()=>{
    joinedBtn.innerText="Leave Group"
})
follow.addEventListener('click',()=>{
    follow.textContent="Following"
})
formSubmitBtn.addEventListener('click',()=>{
    var ima=document.createElement('img')
    ima.src="Rectangle 3 (1).png"
    ima.height=40
    ima.width=40
    profleIcon.appendChild(ima)
    names.innerText="Sidharth Goyal";
    itsFree.innerText="";
    followMember.style.display='block';
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})