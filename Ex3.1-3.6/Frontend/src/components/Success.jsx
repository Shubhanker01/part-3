import React, { useEffect } from 'react'

function Success({ type, successMessage, setSuccessMessage, setError, error }) {
    useEffect(() => {
        if (successMessage === true) {
            setTimeout(() => {
                setSuccessMessage(false)
            }, 5000)
        }
        if (error === true) {
            setTimeout(() => {
                setError(false)
            }, 5000)
        }
    }, [successMessage, error])
    return (
        <>
            {
                successMessage === true ? <div className='success'>
                    {type}
                </div> : <div></div>
            }
            {
                error === true ? <div className='error'>
                    {type}
                </div> : <div></div>
            }
        </>
    )
}

export default Success