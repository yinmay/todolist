# todolist
a todo list created by react

* create the todo-list and todo-submit

###0215
* add hover on the delete button
* auto focus by using `.focus()` and put `ref` in the input tag
* store the items at the localstorage 
```
 componentWillMount () {
    this._loadListItem()
}
  _loadListItem(){
    let items = localStorage.getItem('items')
    if(items){
      items = JSON.parse(items)
        this.setState({items})
    }
 }
 _saveListItem(items){
    localStorage.setItem('items',JSON.stringify(items))
 }
 ```
* add time!!!
* 
