let user = null;
const red_blog = document.getElementById('red_blog')
const black_blog = document.getElementById('black_blog')
const green_blog = document.getElementById('green_blog')
const blue_blog = document.getElementById('blue_blog')

const pro_user = document.getElementById('pro_user')

const add_user = document.getElementById('add_user')
const delete_user = document.getElementById('delete_user')

const move_to_red = document.getElementById('move_to_red')
const move_to_black = document.getElementById('move_to_black')
const move_to_green = document.getElementById('move_to_green')
const move_to_blue = document.getElementById('move_to_blue')


function addToCard(){
  if(user == null){
    user = document.createElement('div') 
    user.innerHTML = pro_user.value 
    user.setAttribute('id', 'user')
    user.className = 'my_user'
    red_blog.append(user) 
    pro_user.disabled = true 
    add_user.disabled = true 
    delete_user.disabled = false
  }
}

function deleteUser(){
   if(user != null){
       user.remove()
    pro_user.disabled = false
    add_user.disabled = false
    delete_user.disabled = true 
    pro_user.value = ''
    user =null 
   }
}

function moveToRed(){
    if(user != null){
        red_blog.append(user)
    }
}
function moveToBlack(){
    if(user != null){
        black_blog.append(user)
    }
}
function moveToGreen(){
    if(user != null){
        green_blog.append(user)
    }
}
function moveToBlue(){
    if(user != null){
        blue_blog.append(user)
    }
}

add_user.addEventListener('click', addToCard)
delete_user.addEventListener("click", deleteUser)

move_to_red.addEventListener('click', moveToRed)
move_to_black.addEventListener('click', moveToBlack)
move_to_green.addEventListener('click', moveToGreen)
move_to_blue.addEventListener('click', moveToBlue)