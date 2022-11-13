export const setJwtToken = (user) => {
    const currentUser = {
        email: user.email
    }

    // get jwt token
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // Using local storage to get the user token easily 
            localStorage.setItem('user-token', data.token);
        });
}