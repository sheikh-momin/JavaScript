window.onload = () => {
    main()
}

function main() {
    const root = document.getElementById('root')
    const showName = document.getElementById('show-name')
    const reset = document.getElementById('reset')
    const submit = document.getElementById('submit')
    const input = document.getElementById('input')


    reset.addEventListener('click', function() {
        input.value = ''
        root.innerHTML = null


    })
    submit.addEventListener('click', function() {
        const value = input.value
        if (!value) {
            alert('Enter a Name')
        } else {

            root.innerHTML = value
            input.value = ''

        }
    })
}