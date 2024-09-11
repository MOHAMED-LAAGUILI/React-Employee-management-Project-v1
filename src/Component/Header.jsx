import React from 'react';

export default function Header(props) {
    return (
        <>
            <div className="p-4 text-center bg-primary text-light rounded shadow-lg m-4">
                <h1 className="display-4">
                    <span role="img" aria-label="office-building">🏢</span>
                    Employee Management
                    <span role="img" aria-label="busts-in-silhouette">👥</span>
                </h1>
                <p className="lead mt-2">Manage your team efficiently with ease.</p>
            </div>
        </>
    );
}
