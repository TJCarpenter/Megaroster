const App = {
  init() {
    const rosterForm = document.querySelector('form')
    const enterTop = document.getElementById('1')
    enterTop.onclick = 
    function(){
        if (enterTop.textContent === 'Enter Bottom')
        {
            enterTop.textContent = 'Enter Top'
        }
        else if (enterTop.textContent === 'Enter Top')
        {
            enterTop.textContent = 'Enter Bottom'
        }
    }
    rosterForm.addEventListener('submit', (ev) => this.handleSubmit(ev))
    
  },

  renderListItem(name, value) {
    const li = document.createElement('li')
    li.innerHTML = `${name}: ${value} `
    const deleteButton = document.createElement('button')
    const promoteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.setAttribute('id' , 'delete_' + value)
    deleteButton.onclick = function(){var x = document.getElementById(this.id).parentElement;x.remove()}
    promoteButton.textContent = 'Promote'
    promoteButton.setAttribute('id','promote_' + value)
    promoteButton.onclick = 
    function(){
        var x = document.getElementById(this.id).parentElement
        
        if (document.getElementById(this.id).textContent === 'Demote')
        {
            document.getElementById(this.id).textContent = 'Promote'
            x.style.color = 'red'
        }
        else if (document.getElementById(this.id).textContent === 'Promote')
        {
            document.getElementById(this.id).textContent = 'Demote'
            x.style.color = 'green'
        }
    }
    li.appendChild(deleteButton)
    li.appendChild(promoteButton)
    return li
  },

  renderList(person) {
    const list = document.createElement('ul')
    Array.from(person).map((input, _i, _elementsArray) => {
      if (input.value) {
        let value = input.value
        let li = this.renderListItem('Name', value)
        list.appendChild(li)
      }
    })

    return list
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')
    const enterTop = document.getElementById('1')
    const list = this.renderList(form.elements)
    if (document.getElementById('1').textContent === 'Enter Bottom')
    {
        details.appendChild(list)
    }
    else if (document.getElementById('1').textContent === 'Enter Top')
    {
        details.insertBefore(list, details.childNodes[0])
    }

  },

}

App.init()