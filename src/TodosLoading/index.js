import React from 'react';
 import './TodosLoading.css'

function TodosLoading() {
    return (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
    );
}

export { TodosLoading }; 