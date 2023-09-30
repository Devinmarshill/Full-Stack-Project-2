const newFormHandler = async (event) => {
  event.preventDefault();

  const taskname = document.querySelector('#taskname').value.trim();
  const description = document.querySelector('#description').value.trim();
  const needed_funding = document.querySelector('#needed_funding').value.trim();

  if (taskname && description && needed_funding) {
    const response = await fetch(`/api/tasks`, {
      method: 'POST',
      body: JSON.stringify({ taskname, description, needed_funding}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create tasks');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/taskss/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete tasks');
    }
  }
};

const newUserFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (name && email && password) {
    const response = await fetch(`/api/taskss`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to create profile');
    }
  }
};



document
  .querySelector('#form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.tasks-list')
//   .addEventListener('click', delButtonHandler);

//    document
//   .querySelector('.new-user-form')
//  .addEventListener('submit', newUserFormHandler);