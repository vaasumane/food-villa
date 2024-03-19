import React from 'react'

const Shimmer = () => {
    return (
        <>
            <div className='restaurant-list'>
                {Array(10).fill("").map((e,index) => (
                <div className='cardShimmer' key={index}>
                    <div className='ShimmerCard'></div>
                    <span className='ShimmerText'></span>
                    <span className='ShimmerText'></span>
                </div>

                ))}
            </div>
        </>
    )
}

export default Shimmer
