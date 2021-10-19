import React from 'react'
import { useForm } from '../hooks/useForm'
import './style.css'

// /* topLeft | topRight | bottomRight | bottomLeft */
// border-radius: 1px 0 3px 4px;

export const BorderRadiusApp = () => {


    const [{ topLeft, topRight, bottomRight, bottomLeft}, handleInputChange] = useForm({
        topLeft: 0,
        topRight: 0,
        bottomRight: 0,
        bottomLeft: 0,
    });
    // console.log({ topLeft, topRight, bottomRight, bottomLeft });


    const mystyle = {
        border: "4px solid crimson",
        borderRadius: `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`,
        height: "500px",
        paddingTop: "250px",
        textAlign: "center",
        width: "100%",
    };

    const setValues ={
        min: 0,
        max: 500
    }

    

    return (
        <div>
            <h1 className="text-center">Border Radius App</h1>
            <hr />

            <form>
                <div className="form-group">
                    <label className="form-label">Top Left</label>
                    <input
                        type="range"
                        min={setValues.min} 
                        max={setValues.max}
                        name="topLeft"
                        className="form-control"
                        placeholder="topLeft"
                        autoComplete="off"
                        value={topLeft}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="range"
                        min={setValues.min} 
                        max={setValues.max}
                        name="topRight"
                        className="form-control"
                        placeholder="topRight"
                        autoComplete="off"
                        value={topRight}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group ">
                    <input
                        type="range"
                        min={setValues.min} 
                        max={setValues.max}
                        name="bottomRight"
                        className="form-control"
                        placeholder="bottomRight"
                        autoComplete="off"
                        value={bottomRight}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="range"
                        min={setValues.min} 
                        max={setValues.max}
                        name="bottomLeft"
                        className="form-control"
                        placeholder="bottomLeft"
                        autoComplete="off"
                        value={bottomLeft}
                        onChange={handleInputChange}
                    />
                </div>

                <div
                    style={mystyle}
                >
                    border-radius: {topLeft}px {topRight}px {bottomRight}px {bottomLeft}px;
                </div>
            </form>
        </div>
    )
}
