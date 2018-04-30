$(document).ready(() => {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users/",
        type: "GET",
        datatype: "json",
    })
    .done(function(response){
        displayUsers(response)
        console.log(response);
    })
    .fail(function(status, errorThrown){
        console.log('Error: ', errorThrown);
        console.log('Status: ', status);
    })
    .always(function(){
        console.log('request complete');
    });
})


function displayUsers(data) {
    for (let user of data) {
        // console.log(user);
        let userContainer = document.createElement('div');
        userContainer.id = 'user-container' + user.id;
        userContainer.className = 'user-container';
        let userName = document.createElement('h3');
        userName.className = 'user-name';
        userName.innerHTML = user.name;
        let userEmail = document.createElement('p');
        userEmail.className = 'user-email';
        userEmail.innerHTML = user.email;
        let userCompany = document.createElement('p');
        userCompany.className = 'user-company';
        userCompany.innerHTML = user.company.name;
        let firstName = user.name.split(' ').slice(0, -1).join(' ');
        
        let todoButton = document.createElement('button');
        todoButton.id = `todo-button-${user.id}`;
        todoButton.innerHTML = `Click for ${firstName}'s to-do list`;

        let albumBotton = document.createElement('button');
        albumBotton.id = `album-button-${user.id}`;
        albumBotton.innerHTML = `Click for ${firstName}'s albums`;

        $('.users').append(userContainer);
        $(`#user-container${user.id}`).append(userName);
        $(`#user-container${user.id}`).append(userEmail);
        $(`#user-container${user.id}`).append(userCompany);
        $(`#user-container${user.id}`).append(todoButton);
        $(`#user-container${user.id}`).append(albumBotton);
        

        $(todoButton).click((event) => {
            todoButtonClick(user.id);
        })

        $(albumBotton).click((event) => {
            albumButtonClick(user.id);
        })

        let outerTodoContainer = document.createElement('div');
        outerTodoContainer.id = 'outer-todo-container-' + user.id;
        outerTodoContainer.className = 'outer-todo-container';
        outerTodoContainer.innerHTML = '<h4> Todos </h4>';
    
        $(`#user-container${user.id}`).append(outerTodoContainer);
        $(`#outer-todo-container-${user.id}`).hide();

        let outerAlbumContainer = document.createElement('div');
        outerAlbumContainer.id = 'outer-album-container-' + user.id;
        outerAlbumContainer.className = 'outer-album-container';
        outerAlbumContainer.innerHTML = '<h4> Albums </h4>';
    
        
    
        $(`#user-container${user.id}`).append(outerAlbumContainer);
        $(`#outer-album-container-${user.id}`).hide();

    }
}

function todoButtonClick(userId) {
    // console.log($(event.target).attr('data-loaded'));
    
    if (event.target.dataset.loaded) {
        $(`#outer-todo-container-${userId}`).toggle();
        $(`#outer-album-container-${userId}`).hide();
        // console.log('should hide');
    } else {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
            type: 'GET',
            datatype: 'json',
        })
        .done(function(response) {
            $(`#outer-todo-container-${userId}`).show();
            $(`#outer-album-container-${userId}`).hide();
            displayTodos(response);
        })
        .fail(function(status, errorThrown){
            console.log('Error: ', errorThrown);
            console.log('Status: ', status);
        })
        .always(function(){
            console.log('todo request complete');
        });
        
        $(event.target).attr('data-loaded', 'true');
    }
}

function displayTodos(todos) {
    for (let todo of todos) {
        // console.log(todo);
        let todoContainer = document.createElement('div');
        todoContainer.id = 'todo-container-' + todo.id;
        todoContainer.className = 'todo-container';
        let todoTitle = document.createElement ('p');
        todoTitle.className = 'todo-title';
        todoTitle.innerHTML = todo.title;
        let todoSatus = document.createElement('i');
        todoSatus.className = 'todo-status';
       if (todo.completed) {
           todoTitle.innerHTML = '<i class="far fa-calendar-check"></i>' + todo.title;
       } else {
           todoTitle.innerHTML = '<i class="far fa-calendar"></i>' + todo.title;
       }

        $(`#outer-todo-container-${todo.userId}`).append(todoContainer);
        $(`#todo-container-${todo.id}`).append(todoTitle);
    }
}


function albumButtonClick(userId) {    
    // console.log(`${userId} todo's loaded`);
    if (event.target.dataset.loaded) {
        $(`#outer-album-container-${userId}`).toggle();
        $(`#outer-todo-container-${userId}`).hide();
        // console.log('should hide');
    } else {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
            type: 'GET',
            datatype: 'json',
        })
        .done(function(response){
            displayAlbums(response);
            $(`#outer-album-container-${userId}`).show();
            $(`#outer-todo-container-${userId}`).hide();
        })
        .fail(function(status, errorThrown){
            console.log('Error: ', errorThrown);
            console.log('Status: ', status);
            $(event.target).attr('data-loaded', 'false');
        })
        .always(function(){
            console.log('todo request complete');
        });

        $(event.target).attr('data-loaded', 'true');
    }
}

function displayAlbums(albums) {
    for (let album of albums) {
        // console.log(album);
        let albumContainer = document.createElement('div');
        albumContainer.id = 'album-container-' + album.id;
        albumContainer.className = 'album-container';
        let albumTitle = document.createElement ('p');
        albumTitle.className = 'album-title';
        albumTitle.innerHTML = '<i class="far fa-folder-open"></i>' + album.title;

        $(`#outer-album-container-${album.userId}`).append(albumContainer);
        $(`#album-container-${album.id}`).append(albumTitle);
    }
}