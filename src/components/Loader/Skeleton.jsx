import React from 'react';
import { Skeleton } from '@mui/material';

const index = ({ login }) => {
    return (
        <>
            <style jsx>{`
            .skeleton{
                width: 100%;
            }
        `}
            </style>
            {login ? (
                <div className="skeleton">
                    <Skeleton />
                    <Skeleton height={100} />
                    <Skeleton height={50} />
                    <Skeleton />
                    <Skeleton height={80} />
                    <Skeleton height={50} />
                </div>
            ) : (
                <div className="skeleton">
                    <Skeleton />
                    <Skeleton height={100} />
                    <Skeleton height={50} />
                    <Skeleton />
                    <Skeleton height={120} />
                    <Skeleton height={50} />
                    <Skeleton />
                    <Skeleton height={150} />
                </div>

            )}


        </>
    )
}

export default index