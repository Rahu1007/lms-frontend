import React from 'react';

function CourseCard({ data }) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={data.thumbnail.secure_url} alt={data.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Enroll</button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
