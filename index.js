let btn = document.querySelector('.navbar-burger')
let menu = document.querySelector('.navbar-menu')
let form = document.querySelector('form')
let input = document.querySelectorAll('input')
let btn2 = document.querySelector('.pagination-next')
let html = {}
btn.addEventListener('click',function(){
  btn.classList.toggle('is-active')
  menu.classList.toggle('is-active')
  return false
})
form.addEventListener('submit',function(){
  let description = document.getElementsByName('description')[0].value;
  let country = document.getElementsByName('location')[0].value;
  let full_time = document.getElementsByName('full_time')[0].checked;
  html['workshop'] = `https://still-spire-37210.herokuapp.com/positions.json?description=${description}&location=${country}&type=${full_time}`
  console.log(html.workshop)
  let url = html.workshop
  fetch(url)
  .then( (resp) => {
    return resp.json()
  })
  .then( data => {
    console.log(data)
    let html2 = data.map(toPostHtml).join("");
    let column = document.querySelector('#job-pannel')
    column.innerHTML = html2
    if(data.lenght = 50){
      btn2.removeAttribute('disabled')
      btn2.addEventListener('click',function(){
        
      })
    }
    else{
      btn2.setAttribute('disabled')
    }
  })
function toPostHtml(jsn){
  return`
    <tr>
      <td>
        <h4><a href="${jsn.url}">${jsn.title}</a></h4>
        <p class="source">
        <a class="company" href="${jsn.company_url}">${jsn.company}</a>
        –
        <strong class="fulltime">${jsn.type}</strong>
        </p>
      </td>
      <td class="meta">
        <span class="location">${jsn.location}</span>
      </td>
    </tr>
  `;
}
  event.preventDefault()

  return false
})





