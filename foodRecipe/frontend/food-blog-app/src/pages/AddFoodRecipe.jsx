import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({})
    const navigate = useNavigate()

    const onHandleChange = (e) => {
        let val = (e.target.name === "ingredients")
            ? e.target.value.split(",")
            : (e.target.name === "file")
                ? e.target.files[0]
                : e.target.value
        setRecipeData(pre => ({ ...pre, [e.target.name]: val }))
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()

        // Since you are uploading a file, use FormData
        const formData = new FormData()
        for (const key in recipeData) {
            // If ingredients is array, convert to string for formData
            if (key === "ingredients" && Array.isArray(recipeData[key])) {
                formData.append(key, recipeData[key].join(","))
            } else {
                formData.append(key, recipeData[key])
            }
        }

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/recipe`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': 'bearer ' + localStorage.getItem("token")
                }
            })
            navigate("/")
        } catch (error) {
            console.error("Failed to add recipe:", error)
            alert("Failed to add recipe, please try again.")
        }
    }

    return (
        <>
            <div className='container'>
                <form className='form' onSubmit={onHandleSubmit}>
                    <div className='form-control'>
                        <label>Title</label>
                        <input type="text" className='input' name="title" onChange={onHandleChange} required />
                    </div>
                    <div className='form-control'>
                        <label>Time</label>
                        <input type="text" className='input' name="time" onChange={onHandleChange} required />
                    </div>
                    <div className='form-control'>
                        <label>Ingredients</label>
                        <textarea className='input-textarea' name="ingredients" rows="5" onChange={onHandleChange} required></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Instructions</label>
                        <textarea className='input-textarea' name="instructions" rows="5" onChange={onHandleChange} required></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Recipe Image</label>
                        <input type="file" className='input' name="file" onChange={onHandleChange} required />
                    </div>
                    <button type="submit">Add Recipe</button>
                </form>
            </div>
        </>
    )
}
