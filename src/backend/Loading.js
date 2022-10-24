import React from 'react'

function Loading() {
    return (
        <div class='flex flex-col justify-center items-center'>
            <h1 class='text-3xl my-5 font-bold'>Loading...</h1>
            <a class='bg-blue-300 p-4 mt-5' href='/login'>Return to login</a>
        </div>
    )
}

export default Loading