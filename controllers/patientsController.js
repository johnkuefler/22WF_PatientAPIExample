exports.get_patient = function (req, res) {
    let patient = {
        firstName: 'John',
        lastName: 'Smith',
        age: 40,
        weight: 200,
        height: 70
    }

    res.send(patient);
}