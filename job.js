let url = 'https://still-spire-37210.herokuapp.com/positions.json'
  fetch(url)
  .then( (resp) => {
    return resp.json()
  })
  .then( data => {
    console.log(data)
    let html2 = data.map(toPostHtml).join("");
    console.log(html2)
    let column = document.querySelector('#job-pannel')
    column.innerHTML += html2
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