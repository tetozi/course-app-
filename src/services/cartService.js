const baseUrl = 'http://localhost:5000/api/v1'


export const getMyCourse = async (_id) => {
    
    
    let response = await fetch(`${baseUrl}/course?customers=${_id}`)
    let jsonResult = await response.json();
    console.log(jsonResult);
    if (response.ok) {
        const result = jsonResult.data.course
        return result
    } else {
        const err = jsonResult.message;
        throw err
    }
}


export const addCustomer = async (courseId, customers) => {

    let response = await fetch(`${baseUrl}/course/${courseId}`,{
        method: "PATCH",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({customers})
    })
    console.log(response)
    let jsonResult = await response.json();

    if (response.ok) {
        const courseData = jsonResult.data.course
        let result = Object.values(courseData)
        return result
    } else {
        const err = jsonResult.message;
        throw err
    }
}