console.log("Validate.js is connected");

document.addEventListener('DOMContentLoaded', function () {
    const emailField = document.querySelector('#id_email')
    const usernameField = document.querySelector('#id_username')

    if (!emailField || !usernameField) return

    const emailFeedback = document.createElement('small')
    emailField.parentNode.appendChild(emailFeedback)

    const usernameFeedback = document.createElement('small')
    usernameField.parentNode.appendChild(usernameFeedback)

    // Email validation
    emailField.addEventListener('input', function () {
        const email = emailField.value
        fetch(`/accounts/validate/?email=${encodeURIComponent(email)}`)
            .then(response => response.json())
            .then(data => {
                if (data.email_taken) {
                    emailFeedback.textContent = 'This email is already taken'
                    emailFeedback.style.color = 'red'
                } else {
                    emailFeedback.textContent = 'Email is available'
                    emailFeedback.style.color = 'green'
                }
            })
    })

    // Username validation
    usernameField.addEventListener('input', function () {
        const username = usernameField.value
        fetch(`/accounts/validate/?username=${encodeURIComponent(username)}`)
            .then(response => response.json())
            .then(data => {
                if (data.username_taken) {
                    usernameFeedback.textContent = 'The username is already taken!'
                    usernameFeedback.style.color = 'red'
                } else {
                    usernameFeedback.textContent = 'Username is available'
                    usernameFeedback.style.color = 'green'
                }
            })
    })
})

