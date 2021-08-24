
const filterStudents = (str,studentArr) => {
    const newArr = studentArr.filter(item =>
        item.id.toString().toLowerCase().includes(str.toLowerCase()) ||
        item.name.toLowerCase().includes(str.toLowerCase()) ||
        item.address.toLowerCase().includes(str.toLowerCase()) ||
        item.dob.toLowerCase().includes(str.toLowerCase()) ||
        item.total.toString().toLowerCase().includes(str.toLowerCase())
        )
        .map(item => {
            let newId = item.id.toString().replace(
                new RegExp(str,'gi'),
                match => `<mark style="background: #2769AA; color: white;">${match}</mark>`

            )
            let newName = item.name.replace(
                new RegExp(str,'gi'),
                match => `<mark style="background: #2769AA; color: white;">${match}</mark>`
            )
            let newAddress = item.address.replace(
                new RegExp(str,'gi'),
                match => `<mark style="background: #2769AA; color: white;">${match}</mark>`
            )
            let newDOB = item.dob.replace(
                new RegExp(str,'gi'),
                match => `<mark style="background: #2769AA; color: white;">${match}</mark>`
            )
            let newTotal = item.total.toString().replace(
                new RegExp(str,'gi'),
                match => `<mark style="background: #2769AA; color: white;">${match}</mark>`
            )
            return{
                ...item,
                id : newId,
                name : newName,
                address : newAddress,
                dob : newDOB,
                total : newTotal
            }
        })
        return newArr
}
export default filterStudents