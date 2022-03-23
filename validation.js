const inputs = document.querySelectorAll('input');
console.log(inputs);

const patterns =
{
    telephone:/^\d{11}$/,
    username:/^[a-z\d]{5,12}$/i,
    password:/^[\w@-]{8,20}$/,
    slug:/^[a-z\d-]{8,20}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,24})(\.[a-z]{2,24})?$/
}
console.log(patterns);

function validate(field, regex)
{
    if (regex.test(field.value))
        field.className = 'valid';
    else
        field.className = 'invalid';
}

inputs.forEach(input =>
    input.addEventListener('keyup', e =>
    validate(e.target, patterns[e.target.attributes.name.value])))