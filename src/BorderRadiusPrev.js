import React from 'react'
import { SetValuesBorder } from './component/SetValuesBorder'
import { PrevPropertyBorder } from './component/PrevPropertyBorder'
import './index.css';


export const BorderRadiusPrev = () => {

    return (
        <>
            <h1>Border Radius Preview</h1>
            <div className="flex-container">
                <div className="flex-containerA">
                    <div><SetValuesBorder id = {1}/></div>
                    <div><SetValuesBorder id = {2}/></div>
                </div>

                <div className="flex-containerB">
                    <div><PrevPropertyBorder/></div>
                </div>

                <div className="flex-containerC">
                    <div><SetValuesBorder id = {3}/></div>
                    <div><SetValuesBorder id = {4}/></div>
                </div>
            </div>
        </>
    )
}