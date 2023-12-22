var boxDiv=document.getElementById('box-c')
var postHeader=document.getElementById('div')
var cardC=document.querySelector('.cardCollection')
var card=document.querySelector('.Cards')
var closeModals=document.querySelector('.closeModals')
var joinedGroup =document.querySelector('.joinedGroup')
var header=document.querySelector('.headers')
var androidHeader=document.querySelector('.mobileHeader')
var imageBox=document.querySelector('.BoxContainer')
var float_button_container=document.querySelector('.float-button-container')
var postContainer=document.querySelector('.PostConatiner')
var image_container=document.querySelector('.image-container')
var postBox=document.querySelector('.postBox')
var filters=document.querySelector('.filter')
var postAndJoin=document.querySelector('.postAndJoin')
var modalBody=document.querySelector('.modal-body');
var d_title=document.querySelector('.d-title')
var d_modal=document.getElementById('signupmodal')
var writePost=document.querySelector('.writePost')
var d_no_follow=document.querySelector('.d-no-follow')
function adjustMargin() {
    var tabletScreenMediaQuery = window.matchMedia("(max-width: 1024px)");
    var tabScreenMediaQuery = window.matchMedia("(max-width: 855px)");
    var smallScreenMediaQuery = window.matchMedia("(max-width: 466px)");
    var largeScreenMediaQuery = window.matchMedia("(min-width: 1025px)");
    if(largeScreenMediaQuery.matches){
        header.style.display='block'
        d_title.style.top='310px'
        d_title.style.left='280px'
        d_title.style.position='absolute'
        cardC.style.width='692px'
        postHeader.style.marginLeft='200px'
        postHeader.style.marginRight='200px'
        joinedGroup.style.display='block'
        writePost.style.display='block'
        image_container.style.height='440px'
        filters.style.display='none';
        closeModals.style,display='none';
    }
    if (tabletScreenMediaQuery.matches) {
        joinedGroup.style.display='block'
        // Set margin to 0 for small screens
        boxDiv.style.marginLeft='100px'
        boxDiv.style.marginRight='100px'
        image_container.style.height='440px'
        postHeader.style.marginLeft='100px'
        postHeader.style.marginRight='100px'
    } 
    if (tabScreenMediaQuery.matches) {
        d_title.style.top='300px'
        d_title.style.left='150px'
        d_title.style.position='absolute'
        image_container.style.height='440px'
        // Set margin to 0 for small screens
        boxDiv.style.marginLeft='50px'
        boxDiv.style.marginRight='50px'
        cardC.style.width='400px'
        filters.style.display='none';
        // postAndJoin.style.display='block';
        postHeader.style.marginLeft='50px'
        postHeader.style.marginRight='50px'
        header.style.display='block'
        postContainer.style.top='72px'
        joinedGroup.style.display='block'
        writePost.style.display='block'
        androidHeader.style.display='none'
        closeModals.style,display='none';
    } 
    if(smallScreenMediaQuery.matches){
        filters.style.display='block';
        // postAndJoin.style.display='none';
        d_title.style.top='168.8px'
        d_title.style.left='125px'
        image_container.style.obeject='cover'
        image_container.style.height='236px'
        postContainer.style.top='0'
        imageBox.style.marginTop='0px'
        joinedGroup.style.display='none'
        document.body.paddingTop='0px'
        boxDiv.style.marginLeft='0px'
        boxDiv.style.marginRight='0px'
        cardC.style.width='100vw'
        header.style.display='none'
        d_no_follow.style.marginLeft='25px'
        androidHeader.style.display='block'
        postHeader.style.marginLeft='0px'
        postHeader.style.marginRight='10px'
        postBox.style.marginTop='0px'
        writePost.style.display='none'
        modalBody.style.marginLeft='0px'
        closeModals.style,display='block';

    }
}

adjustMargin();
window.addEventListener("resize", adjustMargin);