const baseUrl = 'http://localhost:5000/api/v1'


export const create = async (courseData) => {
    let response = await fetch(`${baseUrl}/course`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ ...courseData })
    });

    let jsonResult = await response.json();
    console.log(jsonResult);
    if (response.ok) {
        const result = jsonResult.data.course
        return result
    } else {
        const err = jsonResult.message;
        throw err
    }



};

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/course`)
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

export const getOne = async (courseId) => {
    let res = await fetch(`${baseUrl}/course/${courseId}`)
    let jsonResult = await res.json();

    if (res.ok) {
        const courseData = jsonResult.data.course

        return courseData
    } else {
        const err = jsonResult.message;
        throw err
    }
}

export const remove = async (courseId) => {
    let res = await fetch(`${baseUrl}/course/${courseId}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        const msg = 'success'
        return msg
    }
};

export const update = async (courseId, course) => {
    console.log(course);
    let res = await fetch(`${baseUrl}/course/${courseId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(course)
    });
    console.log(res)
    let jsonResult = await res.json();

    if (res.ok) {
        const courseData = jsonResult.data.course
        let result = Object.values(courseData)
        return result
    } else {
        const err = jsonResult.message;
        throw err
    }
};


export const getreviews = async (courseId,pageNumber) => {
    let res = await fetch(`${baseUrl}/course/${courseId}/reviews?page=${pageNumber}`)
    let jsonResult = await res.json();
     
    if (res.ok) {
        const reviews = jsonResult.data.reviews
        const totalPages = jsonResult.totalPages
        console.log(totalPages)
        console.log(reviews);
        return {reviews, totalPages}
    } else {
        const err = jsonResult.message;
        throw err
    }
}

export const sendMessage = async (courseId, review, token) => {
 
  console.log(courseId,review,token)
    let res = await fetch(`${baseUrl}/course/${courseId}/reviews`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ review })
    })

    let jsonResult = await res.json();
    console.log(jsonResult);
    if (res.ok) {
        const result = jsonResult.data.reviews
        return result
    } else {
        const err = jsonResult.message;
        throw err
    }
}