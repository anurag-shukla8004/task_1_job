import React from 'react';

function newCategory() {
  return (
    <>
      <div className="newCategory-box">
        <div className="categoryBox">
          <h2>Add a New Categorys</h2>
          <div>
            <p class="category-name">create category</p>
            <input
              type="text"
              name=""
              id=""
              style={{
                height: '30px',
                width: '220px',
                border: '#201f2175 solid 2px',
              }}
            />
          </div>
          <div>
            <p class="category-name">Parent category</p>

            <select
              id="cars"
              name="cars"
              style={{
                height: '30px',
                width: '220px',
                border: '#201f2175 solid 2px',
              }}
            >
              <option value="volvo">Choose the category</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <button className="submit-button">Add Category</button>
        </div>
      </div>
    </>
  );
}

export default newCategory;
