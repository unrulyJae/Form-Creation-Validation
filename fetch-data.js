// Define the async function to fetch and display user data
async function fetchUserData() {
    // Step 1: Declare the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 2: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 3: Fetch data from the API
        const response = await fetch(apiUrl);

        // Step 4: Convert the response to JSON
        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create and append user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 7: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded
