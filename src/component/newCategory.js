import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../action/action';
function NewCategory({ addCategory }) {
  const [category, setcategory] = useState('');
  const [inputValue, setInputValue] = useState('');
  const addCategoryHandler = () => {
    console.log('action', inputValue, category);
    let obj = {
      inputValue,
      category,
    };
    addCategory(obj);
    setInputValue('');
    setcategory('');
  };
  const handleSelectChange = (event) => {
    setcategory(event.target.value);
  };
  return (
    <>
      <div className="newCategory-box">
        <div className="categoryBox">
          <h2>Add a New Categorys</h2>
          <div>
            <p class="category-name">create category</p>
            <input
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
              value={inputValue}
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
              onChange={handleSelectChange}
              style={{
                height: '30px',
                width: '220px',
                border: '#201f2175 solid 2px',
              }}
            >
              <option value="choose the catergory">Choose the category</option>
              <option value="Food">Food</option>
              <option value="Movies">Movies</option>
              <option value="Bikes">Bikes</option>
            </select>
          </div>
          <button onClick={addCategoryHandler} className="submit-button">
            Add Category
          </button>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCategory);
